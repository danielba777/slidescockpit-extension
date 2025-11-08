/**
 * The method `chrome.downloads.download` does not work with the option:
 *      "Ask where to save each file before downloading" enabled.
 * If the option is disabled (chrome://settings/downloads), this feature will work fine.
 * 
 * This is an issue with the actual chrome API (only MV3, not MV2) — see:
 *      [https://bugs.chromium.org/p/chromium/issues/detail?id=1173497]
 *      [https://bugs.chromium.org/p/chromium/issues/detail?id=1246717]
 * 
 * Anyways...
 *      This method is prioritized because it's very useful if it works, but fallbacks are needed.
 */

/** Default options for the addon to use */
const options = {
	'download-fallback-tab-focus': {
		type: 'toggle',
		default: true,
		current: null
	},
	'download-subfolder-path': {
		type: 'text',
		default: false,
		current: null
	},
	'download-naming-template': {
		type: 'text',
		default: false,
		current: null
	},
	'slidescockpit-extension-token': {
		type: 'text',
		default: '',
		current: null
	}
};

const EXTENSION_TOKEN_KEY = 'extensionToken';
const SLIDESCOCKPIT_HOSTS = [
	'slidescockpit.com',
	'www.slidescockpit.com',
];
const SLIDESCOCKPIT_LOCAL_HOSTS = new Set(['localhost', '127.0.0.1']);
const SLIDESCOCKPIT_LOCAL_PORTS = new Set(['', '3000', null, undefined]);

const getLocalSetting = (key) => {
	return new Promise((resolve) => {
		chrome.storage.local.get(key, (result) => {
			if (chrome.runtime.lastError) {
				console.warn('[TTDB] Failed to get storage value', {
					key,
					error: chrome.runtime.lastError.message
				});
				resolve(null);
				return;
			}

			if (result && result.hasOwnProperty(key)) {
				resolve(result[key]);
				return;
			}

			resolve(null);
		});
	});
};

const isSlidescockpitApiRequest = (rawUrl) => {
	let parsed = null;

	try {
		parsed = new URL(rawUrl);
	} catch (_) {
		return false;
	}

	const { hostname, protocol, port } = parsed;

	if (hostname && SLIDESCOCKPIT_HOSTS.includes(hostname)) {
		return protocol === 'https:' || protocol === 'http:';
	}

	if (hostname && SLIDESCOCKPIT_LOCAL_HOSTS.has(hostname)) {
		return SLIDESCOCKPIT_LOCAL_PORTS.has(port);
	}

	return false;
};

const getExtensionToken = async () => {
	const stored = await getLocalSetting(EXTENSION_TOKEN_KEY);

	if (typeof stored === 'string') {
		const trimmed = stored.trim();
		return trimmed.length ? trimmed : null;
	}

	return null;
};

/** Active download sessions */
globalThis.downloadSessions = globalThis.downloadSessions || new Map();

/** Set default storage values */
Object.keys(options).forEach((key) => {
	chrome.storage.local.get(key, (result) => {
		if (result && !result.hasOwnProperty(key)) {
			let value = new Object();
			value[key] = options[key].default;
			chrome.storage.local.set(value);
		}
	});
});

/**
 * Options getter
 */
const optionsGet = (args) => {
	return args.sendResponse(options);
};

/**
 * Attempts to download a file using `browser.downloads.download`
 * 
 * @param {object} args 
 */
const fileDownload = async (args) => {
	let [filename, url, subFolder] = [
		args.data.filename,
		args.data.url,
		args.data.subFolder
	];

	if (subFolder && subFolder.length > 1 && !subFolder.endsWith('/')) {
		subFolder = subFolder + '/';
	}

	try {
		console.log('[TTDB]', 'Attempting download', {
			filename: `${subFolder ? subFolder : ''}${filename}`, url: url
		});

		chrome.downloads.download({
			conflictAction: 'uniquify',
			filename: `${subFolder ? subFolder : ''}${filename}`,
			url: url,
			...(url.startsWith('http') && { method: 'GET' }),
			saveAs: false
		}, (itemId) => {
			chrome.downloads.onChanged.addListener((delta) => {
				if (itemId === delta.id) {
					console.log('[TTDB]', delta);

					if (delta.endTime || (delta.state && delta.state.current === 'complete')) {
						args.sendResponse({ itemId: itemId, success: true }); // Successful download
					} else if (delta.error) {
						args.sendResponse({ success: false, error: delta.error });
					}
				}
			});
		});
	} catch (error) {
		args.sendResponse({ success: false, error });
	}
};

/**
 * Opens the default download folder
 */
const showDefaultFolder = () => {
	chrome.downloads.showDefaultFolder();
};

/**
 * Opens a new tab in Chrome
 * 
 * @param {object} args 
 */
const windowOpen = (args) => {
	chrome.tabs.create({
		url: args.data.url,
		active: args.data.active ? args.data.active : false
	}, () => { // May wanna handle errors here, not a priority for now however
		args.sendResponse({ success: true });
	});
};

/**
 * Fetching function
 * 
 * @param {object} args 
 */
const serviceFetch = async (args) => {
	const url = args.data.url;
	const options = args.data.options || {};
	const requestOptions = {
		...options,
		headers: {
			...(options.headers || {})
		}
	};

	if (isSlidescockpitApiRequest(url) && !requestOptions.headers.Authorization) {
		const token = await getExtensionToken();

		if (token) {
			requestOptions.headers.Authorization = `Bearer ${token}`;
		}
	}

	try {
		const response = await fetch(url, requestOptions);
		const status = response.status;
		const contentType = response.headers.get('content-type') || '';
		let data = null;

		if (contentType.includes('application/json')) {
			data = await response.json();
		} else {
			data = await response.text();
		}

		if (!response.ok) {
			const errorPayload =
				data && typeof data === 'object'
					? data
					: { message: typeof data === 'string' ? data : null };

			args.sendResponse({
				data,
				status,
				error: {
					status,
					message:
						(errorPayload && (errorPayload.error || errorPayload.message)) ||
						`Request failed with status ${status}`,
					body: errorPayload,
				},
			});
			return;
		}

		args.sendResponse({
			data,
			status,
			error: null,
		});
	} catch (error) {
		console.info('Caught a fetching error:', error);
		args.sendResponse({
			data: null,
			status: 0,
			error: {
				status: 0,
				message: error instanceof Error ? error.message : 'Request failed',
				body: error,
			},
		});
	}
};

/**
 * `onMessage` listener
 */
chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
	// Task IDs and their corresponding methods
	const tasks = {
		'fileDownload': fileDownload,
		'windowOpen': windowOpen,
		'fileShow': showDefaultFolder,
		'optionsGet': optionsGet,
		'fetch': serviceFetch
	};

	if (tasks[data.task]) {
		tasks[data.task]({ // Perform task
			data,
			sender,
			sendResponse
		});
	}

	return true;
});
