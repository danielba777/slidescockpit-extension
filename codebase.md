# .ff_requires/manifest.json

```json
{
  "name": "SlidesCockpit - Slideshow Saver",
  "description": "One Click Saving Slideshows to your SlidesCockpit Account",
  "author": "SlidesCockpit",
  "manifest_version": 3,
  "version": "1.0.1",
  "icons": {
    "48": "48.png",
    "128": "128.png"
  },

  "background": {
    "service_worker": "service.js"
  },

  "content_scripts": [
    {
      "matches": ["https://www.tiktok.com/*", "https://tiktok.com/*"],
      "js": ["main.js"],
      "css": ["main.css"],
      "run_at": "document_idle"
    }
  ],

  "permissions": ["storage"]
}

```

# .gitignore

```
.firefox
.chrome
ff_port-*
*.zip

```

# 48.png

This is a binary file of the type: Image

# 128.png

This is a binary file of the type: Image

# extension.zip

This is a binary file of the type: Compressed Archive

# main.css

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap");

a.ttdb__button_feed > div > svg {
  transition: background-color 0.35s, color 0.35s, opacity 1s !important;
  -webkit-transition: background-color 0.35s, color 0.35s, opacity 1s !important;
  -moz-transition: background-color 0.35s, color 0.35s, opacity 1s !important;
  -o-transition: background-color 0.35s, color 0.35s, opacity 1s !important;
}

a.ttdb__button_feed,
a.ttdb__button_grid,
a.ttdb__button_basic-player {
  transition: background-color 0.35s, color 0.35s, opacity 1s !important;
  -webkit-transition: background-color 0.35s, color 0.35s, opacity 1s !important;
  -moz-transition: background-color 0.35s, color 0.35s, opacity 1s !important;
  -o-transition: background-color 0.35s, color 0.35s, opacity 1s !important;

  cursor: not-allowed;
  opacity: 0;
  outline: none;
}

a.ttdb__button_browser {
  position: absolute;
  top: -17px;
  right: -10px;
  padding: 5px 12px;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 100px;
  text-align: center;
  display: block;
  font-size: 18px;
  pointer-events: none;
  position: relative;
  background-color: #fe2c55 !important;
}

a.ttdb__button_browser:hover {
  text-decoration: none;
}

a.ttdb__button_browser.loading {
  color: transparent !important;
}

a.ttdb__button_browser.loading::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  display: block;
  content: "";
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' version='1.1' id='L9' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 0 0' xml:space='preserve'%3E%3Cpath fill='%23ffffff' d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'%3E%3CanimateTransform attributeName='transform' attributeType='XML' type='rotate' dur='1s' from='0 50 50' to='360 50 50' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E") no-repeat center center !important;
  background-size: contain;
}

a.ttdb__button_feed.loading,
a.ttdb__button_grid.loading,
a.ttdb__button_basic-player.loading,
a.ttdb__button_browser.loading {
  cursor: progress !important;
}

a.ttdb__button_grid.loading > span::after {
  content: url("data:image/svg+xml,%3Csvg width='24' height='24' version='1.1' id='L9' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 0 0' xml:space='preserve'%3E%3Cpath fill='white' d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'%3E%3CanimateTransform attributeName='transform' attributeType='XML' type='rotate' dur='1s' from='0 50 50' to='360 50 50' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E") !important;
}

a.ttdb__button_browser[ttdb_mode="__NEXT"] {
  margin-bottom: 10px !important;
  margin-top: -12px !important;
  padding: 4px 8px 6px 8px !important;
}

a.ttdb__button_browser[ttdb_mode="APP"] {
  margin: 10px 0px 10px 0px !important;
}

a.ttdb__button_feed {
  text-align: center;
  width: 48px;
  height: 48px;
  line-height: 48px;
  border-radius: 100%;
  font-size: 1.5em;
  margin-bottom: 14px;
}

a.ttdb__button_feed {
  padding: 0;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  display: none;
}

a.ttdb__button_feed:hover {
  color: #fe4569;
}

a.ttdb__button_feed.loading > div {
  display: none !important;
}

a.ttdb__button_feed.loading::after {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;

  content: url("data:image/svg+xml,%3Csvg width='24' height='24' version='1.1' id='L9' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 0 0' xml:space='preserve'%3E%3Cpath fill='rgb(254, 69, 105)' d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'%3E%3CanimateTransform attributeName='transform' attributeType='XML' type='rotate' dur='1s' from='0 50 50' to='360 50 50' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E");
}

a.ttdb__button_grid {
  position: absolute;
  z-index: 1;
  top: 2px;
  right: 2px;
  background-color: #eb4034;
  border-radius: 4px;
  color: #fff !important;
  display: none;
  box-shadow: 0 0 4px rgb(0 0 0 / 50%);
  backdrop-filter: blur(2px);
}

a.ttdb__button_grid > span {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  height: 24px;
  line-height: 24px;
  width: 18px;
}

a.ttdb__button_feed > div {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

a.ttdb__button_feed > div > svg {
  fill: currentColor;
  width: 55%;
  margin-left: 1px;
  margin-top: -1px;
}

a.ttdb__button_grid:not(.loading) > span::after {
  content: "\01F853";
  font-size: 16px !important;
}

a.ttdb__button_grid.loading > span::after {
  margin-left: -2px;
}

a.ttdb__button_slideshow {
  opacity: 1 !important;
  cursor: pointer !important;
  pointer-events: auto !important;
  position: relative;
}

a.ttdb__button_slideshow::before {
  position: absolute;
  top: -2px;
  right: -2px;
  font-size: 12px;
  background: rgba(254, 44, 85, 0.9);
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.ttdb__actions-fallback {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 999999;
  pointer-events: none;
}

.ttdb__actions-fallback a {
  pointer-events: auto;
}

.ttdb__button_browser_wrapper {
  position: relative;
  display: inline-block;
}

a.ttdb__button_feed:hover > div > svg {
  color: #fe4569 !important;
}

a.ttdb__button_grid:hover {
  background-color: #000000b5;
  color: #00ff80 !important;
  text-decoration: none;
}

div.ttdb__button_basic-player_wrapper {
  margin: 18px auto 10px auto;
  display: none;
}

div.ttdb__button_basic-player_wrapper > a.ttdb__button_basic-player {
  padding: 8px 10px 6px 10px;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
  position: relative;
}

div.ttdb__button_basic-player_wrapper > a.ttdb__button_basic-player,
div.ttdb__button_basic-player_wrapper > a.ttdb__button_basic-player:visited {
  color: rgba(254, 44, 85, 1);
}

div.ttdb__button_basic-player_wrapper > a.ttdb__button_basic-player:hover {
  background-color: rgba(254, 44, 85, 0.15) !important;
}

div.ttdb__button_basic-player_wrapper > a.ttdb__button_basic-player::after {
  content: "🡓";
  position: absolute;
  left: 10px;
  font-size: 20px;
  top: 4px;
}

div.ttdb__button_basic-player_wrapper
  > a.ttdb__button_basic-player.loading::after {
  content: url("data:image/svg+xml,%3Csvg width='24' height='24' version='1.1' id='L9' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 0 0' xml:space='preserve'%3E%3Cpath fill='rgba(254, 44, 85, 1.0)' d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'%3E%3CanimateTransform attributeName='transform' attributeType='XML' type='rotate' dur='1s' from='0 50 50' to='360 50 50' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E") !important;
  top: 6px !important;
  left: 6px !important;
}

div.ttdb__button_basic-player_wrapper.share,
div.ttdb__button_basic-player_wrapper.share > a {
  width: 100%;
}

div.ttdb__button_basic-player_wrapper.share {
  margin: 0 auto 10px;
  text-align: center;
}

div.ttdb__button_basic-player_wrapper.share > a {
  width: 90%;
}

body > div.ttdb_downloading-active > div.item,
body > div.ttdb_splash-wrapper {
  font-family: "Noto Sans JP", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

body > div.ttdb_splash-wrapper {
  transition: opacity 0.35s !important;
  -webkit-transition: opacity 0.35s !important;
  -moz-transition: opacity 0.35s !important;
  -o-transition: opacity 0.35s !important;

  position: fixed;
  top: 0px;
  right: 30px;
  z-index: 99999;
  opacity: 0;
  pointer-events: none;
  user-select: none;
}

body > div.ttdb_splash-wrapper > div.ttdb_splash-content {
  width: auto;
  margin: 10px auto;
  padding: 5px 10px 3px 10px;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-feature-settings: "tnum";
  backdrop-filter: blur(2px);
  letter-spacing: 1px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  font-size: 0.9em;
}

body > div.ttdb_splash-wrapper > div.ttdb_splash-content.state-success {
  background-color: #3300ff42;
  color: #fff;
}

body > div.ttdb_splash-wrapper > div.ttdb_splash-content.state-warn {
  background-color: rgb(255 200 0);
  color: #000000;
}

body > div.ttdb_splash-wrapper > div.ttdb_splash-content.state-error {
  background-color: #ff0000c7;
  color: #fff;
}

button.extract {
  pointer-events: none !important;
}

button.extract div[class*="-DivContainer "] {
  display: none !important;
}

body > div.ttdb_downloading-active {
  position: fixed;
  inset: auto 4px 4px auto;
  z-index: 99999;

  pointer-events: none;
  display: flex;
  justify-content: end;
  gap: 6px;
}

body > div.ttdb_downloading-active > div.item {
  background-color: #000000bf;
  padding: 9px 8px 4px 8px;
  letter-spacing: 1px;
  border-radius: 4px;
  font-size: 0.9em;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  flex: 0 1 auto;
  max-width: 20vw;
}

body > div.ttdb_downloading-active > div.item > div.progress {
  background-color: #00ff66;
  min-width: 0px;
  max-width: 100%;
  min-height: 3px;
  max-height: 2px;
  display: inline-block;
  position: absolute;
  inset: 0 auto auto 0;
  transition: width 0.1s;
}

/* Light mode colors */

html:not([data-theme]) body > div.ttdb_downloading-active > div.item,
html:not([data-theme="dark"]) body > div.ttdb_downloading-active > div.item,
html[data-theme="light"] body > div.ttdb_downloading-active > div.item {
  color: #fff;
}

html:not([data-theme]) a.ttdb__button_feed,
html:not([data-theme="dark"]) a.ttdb__button_feed,
html[data-theme="light"] a.ttdb__button_feed {
  background-color: rgb(0 0 0 / 10%);
  color: #000;
}

html:not([data-theme]) a.ttdb__button_feed svg,
html:not([data-theme="dark"]) a.ttdb__button_feed svg,
html[data-theme="light"] a.ttdb__button_feed svg {
  color: #161823;
}

html:not([data-theme]) a.ttdb__button_browser,
html:not([data-theme="dark"]) a.ttdb__button_browser,
html[data-theme="light"] a.ttdb__button_browser {
  background-color: #f1f1f2;
  color: #000;
}

html:not([data-theme]) a.ttdb__button_feed:hover > div > svg,
html:not([data-theme="dark"]) a.ttdb__button_feed:hover > div > svg,
html[data-theme="light"] a.ttdb__button_feed:hover > div > svg {
  color: #fe2c55 !important;
}

/* Dark mode colors */

html[data-theme="dark"] a.ttdb__button_feed {
  background-color: rgb(255 255 255 / 10%);
  color: #fff;
}

html[data-theme="dark"] a.ttdb__button_feed svg {
  color: #fff;
}

html[data-theme="dark"] a.ttdb__button_browser {
  background-color: rgb(41, 41, 41);
  color: #fff;
}

```

# main.js

```js
(async () => {
  const TTDB = {},
    API = {},
    EXPR = {},
    UTIL = {},
    SPLASH = {},
    ACTIVE = {};

  TTDB.observers = {};
  TTDB.timers = {};
  TTDB.lastUrl = window.location.href;

  /**
   * Interval object
   *
   * Sets the amount of update attempts that should be done
   */
  TTDB.interval = {
    counter: 25,
    delay: 1000,
  };

  /**
   * Different item modes (mode="X")
   */
  TTDB.MODE = {
    FEED: "0",
    GRID: "1",
    BROWSER: "2",
    BASIC_PLAYER: "4",
    SHARE_OVERLAY: "-1",
  };

  /**
   * Sets the amount of item checks to do
   *
   * @param {integer} count
   */
  TTDB.setInterval = (count) => {
    if (TTDB.interval.counter < count) {
      TTDB.interval.counter = count;
    }
  };

  ACTIVE.running = {};

  /**
   * Log to console
   *
   * @param  {...any} args
   */
  const pipe = (...args) => {
    console.info("[TTDB]", ...args);
  };

  /**
   * Dipatches an event on an element
   *
   * @param {HTMLElement} element
   * @param {class}       eventType
   * @param {string}      event
   */
  UTIL.dispatchEvent = (element, eventType, event) => {
    element.dispatchEvent(
      new eventType(event, {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );
  };

  /**
   * Validates that a response is video content
   *
   * @param {Response} t
   */
  UTIL.validateVideoRequest = (t) => {
    const contentType = t.headers.get("Content-Type") || "";

    return (
      t.ok &&
      (contentType.includes("video/") ||
        contentType.includes("application/octet-stream")) &&
      +t.headers.get("Content-Length") > 1000
    );
  };

  /**
   * Checks whether the current browser environment is Chromium or not
   */
  UTIL.isChromium = () => {
    const rt = (globalThis.browser ?? globalThis.chrome)?.runtime;

    if (rt?.getBrowserInfo) return false;
    if (navigator.userAgentData?.brands) {
      return navigator.userAgentData.brands.some((b) =>
        /Chrom(e|ium)|Edge|Opera/i.test(b.brand)
      );
    }

    return /Chrome|Chromium|Edg|OPR|Brave|Vivaldi/i.test(navigator.userAgent);
  };

  /**
   * Truncates a string
   *
   * @param {string}  string
   * @param {integer} n
   */
  UTIL.truncateString = (string, n) => {
    return string.length > n ? string.substr(0, n - 1) : string;
  };

  /**
   * Generates a random string from a character set
   *
   * @param {string}  characters
   * @param {integer} length
   */
  UTIL.ranGen = (charSet, length = 16) => {
    let result = "";
    const setLength = charSet.length;

    for (let i = 0; i < length; i++) {
      result += charSet.charAt(Math.floor(Math.random() * setLength));
    }
    return result;
  };

  /**
   * Generates a random integer between min and max
   *
   * @param {integer} min
   * @param {integer} max
   */
  UTIL.ranInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /**
   * Attempts to sanitize a filename
   *
   * @param {string} string
   */
  UTIL.sanitizeFilename = (string) => {
    /**
     * Regex ranges and characters:
     *
     * \u3040-\u30ff — Hiragana and katakana
     * \u3400-\u4dbf — CJK unified ideographs extension A
     * \u4e00-\u9fff — CJK unified ideographs
     * \uf900-\ufaff — CJK compatibility ideographs
     * \uff66-\uff9f — Half-width katakana
     * \wа-я		 — Cyrillic
     * 0-9a-zA-Z 	 — Numbers and latin letters
     * -._ #()\[\] 	 — Other characters
     */

    string = string
      .replace(
        /[^\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\wа-я0-9a-zA-Z-._ #()\[\]]/g,
        ""
      )
      .replace(/\s\s+/g, " ")
      .trim();

    // Remove any leading dots
    while (string[0] === ".") {
      string = string.substring(1);
    }

    // Filename limit is about 250, so we'll shorten any super long filenames
    return string.length - 4 >= 246
      ? `${string.replace(".mp4", "").substring(0, 246).trim()}.mp4`
      : string;
  };

  /**
   * Checks the existance of a key in an object
   *
   * @param {object}  obj
   * @param {string}  level
   * @param {...any}  rest
   * @returns
   */
  UTIL.checkNested = (obj, level, ...rest) => {
    if (obj === undefined) return false;
    if (rest.length == 0 && obj.hasOwnProperty(level)) return true;

    return UTIL.checkNested(obj[level], ...rest);
  };

  UTIL.normalizeTikTokUrl = (href) => {
    if (!href || typeof href !== "string") {
      return null;
    }

    const trimmed = href.trim();
    if (!trimmed.length) {
      return null;
    }

    try {
      return new URL(
        trimmed,
        trimmed.startsWith("http") ? undefined : window.location.origin
      ).href;
    } catch (error) {
      pipe("⚠️ Failed to normalize TikTok URL", { href: trimmed, error });
      return null;
    }
  };

  /**
   * Traverses an object for a key, then gets that value
   *
   * Returns an undefined value if not found
   *
   * @param {object} obj
   * @param {string} needle
   */
  UTIL.traverseObj = (obj, needles, index = 0) => {
    if (obj !== null && typeof obj === "object" && index < needles.length) {
      const needle = needles[index];

      for (const key of Object.keys(obj)) {
        if (key === needle) {
          if (index === needles.length - 1) {
            return obj[key];
          }
          return UTIL.traverseObj(obj[key], needles, index + 1);
        }
      }

      for (const key of Object.keys(obj)) {
        const result = UTIL.traverseObj(obj[key], needles, index);
        if (result !== undefined) {
          return result;
        }
      }
    }

    return undefined;
  };

  /**
   * Fetches a stored setting
   *
   * @param {string} key
   */
  const getStoredSetting = async (key) => {
    const stored = await chrome.storage.local.get(key);

    if (stored && stored.hasOwnProperty(key)) {
      return stored[key];
    }

    return null;
  };

  const EXTENSION_TOKEN_KEY = "slidescockpit-extension-token";

  const getExtensionToken = async () => {
  // 1) local
  try {
    const local = await chrome.storage.local.get(EXTENSION_TOKEN_KEY);
    const v1 = local?.[EXTENSION_TOKEN_KEY];
    if (typeof v1 === "string" && v1.trim()) return v1.trim();
  } catch (_) {}

  // 2) sync (Fallback)
  try {
    const sync = await chrome.storage.sync.get(EXTENSION_TOKEN_KEY);
    const v2 = sync?.[EXTENSION_TOKEN_KEY];
    if (typeof v2 === "string" && v2.trim()) return v2.trim();
  } catch (_) {}

  return null;
};

  TTDB.extensionToken = await getExtensionToken();
  pipe("🔐 Extension token loaded", {
    hasToken: !!TTDB.extensionToken,
  });

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if ((areaName === "local" || areaName === "sync") &&
    Object.prototype.hasOwnProperty.call(changes, EXTENSION_TOKEN_KEY)) {
    const v = changes[EXTENSION_TOKEN_KEY].newValue;
    TTDB.extensionToken = (typeof v === "string" && v.trim()) ? v.trim() : null;
    pipe("🔐 Extension token updated", { hasToken: !!TTDB.extensionToken, areaName });
  }
});

  /** Matches `https://www.tiktok.com/@user/video/123456789` URLs */
  EXPR.vanillaVideoUrl = (haystack, options = {}) => {
    let expression =
      "https?:\\/\\/(?:www\\.)?tiktok\\.com\\/@([^\\/]+)\\/(?:video|photo)\\/([0-9]+)";

    if (options.strict) {
      expression = "^" + expression + "$";
    }

    const matches = new RegExp(expression).exec(haystack);
    return matches ? matches : null;
  };

  /**
   * Creates a numerical hash for a given input
   *
   * @param {string} input
   */
  ACTIVE.hash = (input) => {
    return (
      input
        .split("")
        .reduce((hash, char) => (hash * 33) ^ char.charCodeAt(0), 5381) >>> 0
    );
  };

  /**
   * Creates a new download UI container
   */
  ACTIVE.create = () => {
    if (document.body) {
      const container = document.createElement("div");

      container.classList.add("ttdb_downloading-active");
      container.textContent = "";

      document.body.appendChild(container);

      return container;
    }
  };

  /**
   * Gets and returns the current download UI container
   * If one does not exist, it will be created
   */
  ACTIVE.getContainer = () => {
    const container = document.body.querySelector(
      "div.ttdb_downloading-active"
    );
    return container ? container : ACTIVE.create();
  };

  /**
   * Helper function that creates a new download UI item
   */
  ACTIVE.createItem = (hash, item) => {
    const element = document.createElement("div");
    const progress = document.createElement("div");

    element.classList.add("item");
    progress.classList.add("progress");

    element.setAttribute("id", hash);
    element.innerText = item.name;
    element.appendChild(progress);

    ACTIVE.getContainer().appendChild(element);

    element.style.opacity = "1";

    return element;
  };

  /**
   * Refreshes the download items in the UI (updating percentages etc.)
   */
  ACTIVE.refreshUi = () => {
    const activeHashes = Object.keys(ACTIVE.running);
    const container = ACTIVE.getContainer();

    // Clear or hide container if no active downloads
    if (!activeHashes.length) {
      container.innerHTML = "";
      return DOM.setStyle(container, { opacity: "0" });
    }

    DOM.setStyle(container, { opacity: "1" });

    for (const hash of activeHashes) {
      const { item } = ACTIVE.running[hash];
      const element =
        container.querySelector(`:scope > div[id="${hash}"]`) ||
        ACTIVE.createItem(hash, item);
      const progress = element.querySelector(":scope > div.progress");
      const percentage = Math.ceil(item.percentage);

      if (progress) {
        progress.style.minWidth = `${percentage}%`;
      }

      if (percentage >= 100 && !element.dataset.completing) {
        element.dataset.completing = true;
        setTimeout(() => {
          element.style.opacity = "0";
          setTimeout(() => {
            delete ACTIVE.running[hash];
            ACTIVE.refreshUi();
          }, 1250);
        }, 1000);
      }
    }
  };

  /**
   * Adds (if new), otherwise updates the state of a download item
   */
  ACTIVE.ping = (item) => {
    const hash = ACTIVE.hash(item.id);

    if (!ACTIVE.running.hasOwnProperty(hash) && item.percentage === 0) {
      ACTIVE.running[hash] = {
        item,
        timeout: setTimeout(() => ACTIVE.remove(hash), 1e4),
      };

      if (!document.body.querySelector("div.ttdb_downloading-active")) {
        ACTIVE.create();
      }

      return ACTIVE.refreshUi();
    }

    clearTimeout(ACTIVE.running[hash].timeout);

    ACTIVE.running[hash].item.percentage = item.percentage;
    ACTIVE.refreshUi();
  };

  /**
   * Create splash elements
   */
  SPLASH.create = () => {
    const body = document.body;

    // Create splash elements
    const wrapper = document.createElement("div");
    const content = document.createElement("div");

    wrapper.classList.add("ttdb_splash-wrapper");
    content.classList.add("ttdb_splash-content");
    content.textContent = "";

    wrapper.appendChild(content);

    if (body) {
      body.appendChild(wrapper);

      // Store references
      SPLASH.wrapper = wrapper;
      SPLASH.content = content;

      SPLASH.content.addEventListener("click", (_) => {
        chrome.runtime.sendMessage(chrome.runtime.id, {
          task: "fileShow",
        });
      });
    }

    return wrapper;
  };

  /**
   * Display a splash message
   *
   * @param {string}  message
   * @param {integer} duration
   */
  SPLASH.message = (message, options = {}, callback = null) => {
    const state = options.state ? options.state : 0;

    if (SPLASH.wrapper && SPLASH.content) {
      clearTimeout(TTDB.timers.splash);

      if (state === 0 || state === 1) {
        SPLASH.content.classList.remove("state-warn", "state-error");
        SPLASH.content.classList.add("state-success");
      } else if (state === 2) {
        SPLASH.content.classList.remove("state-success", "state-error");
        SPLASH.content.classList.add("state-warn");
      } else if (state === 3) {
        SPLASH.content.classList.remove("state-success", "state-warn");
        SPLASH.content.classList.add("state-error");
      }

      SPLASH.content.textContent = message;

      DOM.setStyle(SPLASH.wrapper, {
        opacity: 1,
        "pointer-events": "auto",
      });

      TTDB.timers.splash = setTimeout(() => {
        DOM.setStyle(SPLASH.wrapper, {
          opacity: 0,
          "pointer-events": "none",
        });

        if (callback) {
          callback();
        }
      }, options.duration || 3000);

      return true;
    }
  };

  /**
   * Different environments
   *
   * Default: `APP` is the main environment (most regions)
   * `__NEXT` has a different HTML structure, region-based and maybe obsolete now?
   */
  TTDB.ENV = {
    APP: Symbol(true),
    __NEXT: Symbol(true),
  };

  TTDB.DEFAULT_ENV = TTDB.ENV.APP;

  /**
   * `fetch` headers for requests
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/fetch
   */
  TTDB.headers = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "include",
    redirect: "follow",
  };

  /**
   * API variables
   */
  API.AID = 0;
  API.APP_NAME = "musical_ly";
  API.HOSTNAME = "api22-normal-c-useast2a.tiktokv.com";
  API.API_V = "v1";

  API.FORMATS = [
    "play_addr",
    "download_addr",
    "play_addr_h264",
    "play_addr_bytevc1",
  ];

  /**
   * Builds an API query URL
   *
   * @param {string} videoId
   */
  API.constructApiQuery = (videoId) => {
    const fetchType = "feed";
    const ts = Math.round(Date.now() / 1000);

    const parameters = {
      aweme_id: videoId,
      version_name: "34.1.2",
      version_code: "2023401020",
      build_number: "34.1.2",
      manifest_version_code: "2023401020",
      update_version_code: "2023401020",
      openudid: UTIL.ranGen("0123456789abcdef", 16),
      uuid: UTIL.ranGen("0123456789", 16),
      _rticket: ts * 1000,
      ts: ts,
      device_brand: "Google",
      device_type: "ASUS_Z01QD",
      device_platform: "android",
      iid: "7318518857994389254",
      device_id: UTIL.ranInt(7250000000000000000, 7351147085025500000),
      resolution: "1080*1920",
      dpi: 420,
      os_version: "10",
      os_api: "29",
      carrier_region: "US",
      sys_region: "US",
      region: "US",
      app_name: API.APP_NAME,
      app_version: "34.1.2",
      app_language: "en",
      manifest_app_version: "2023401020",
      language: "en",
      timezone_name: "America/New_York",
      timezone_offset: "-14400",
      channel: "googleplay",
      ac: "wifi",
      mcc_mnc: "310260",
      is_my_cn: 0,
      aid: API.AID,
      ssmix: "a",
      as: "a1qwert123",
      cp: "cbfhckdckkde1",
    };

    return (
      `https://${API.HOSTNAME}/aweme/${API.API_V}/${fetchType}/` +
      Object.keys(parameters)
        .map(
          (key, index) => `${index > 0 ? "&" : "?"}${key}=${parameters[key]}`
        )
        .join("")
    );
  };

  /**
   * Attempts to get id from API data
   *
   * @param {object} data
   */
  API.extractId = (data, fallback = null) => {
    const id = { user: null, description: null };

    /** Attempt to get the video description */
    if (UTIL.checkNested(data, "aweme_detail", "desc")) {
      id.description = data.aweme_detail.desc;
    }

    /** Attempt to get the channel of the video */
    ["unique_id", "nickname", "ins_id"].forEach((key) => {
      if (!id.user && UTIL.checkNested(data, "aweme_detail", "author", key)) {
        id.user = data.aweme_detail.author[key];
      }
    });

    if (!id.description) {
      return {
        user: id.user,
        description: fallback
          ? fallback
          : data.videoId
          ? data.videoId
          : Date.now(),
      };
    }

    return id;
  };

  API.extractVideoUrls = (data) => {
    const urls = [];

    // Iterate over formats
    API.FORMATS.forEach((format) => {
      // Check if format is available
      if (
        data.aweme_detail.video.hasOwnProperty(format) &&
        data.aweme_detail.video[format].hasOwnProperty("data_size") &&
        data.aweme_detail.video[format].hasOwnProperty("url_list") &&
        data.aweme_detail.video[format].url_list.length > 0
      ) {
        const videoUrl = data.aweme_detail.video[format].url_list[0];
        const videoSize = data.aweme_detail.video[format].data_size;
        const videoRes =
          data.aweme_detail.video[format].height *
          data.aweme_detail.video[format].width;

        urls.push([videoRes, videoSize, videoUrl]);
      }
    });

    // Iterate over bit_rate data
    if (
      data.aweme_detail.video.hasOwnProperty("bit_rate") &&
      Array.isArray(data.aweme_detail.video.bit_rate)
    ) {
      let bestItem = null,
        bestQuality = null;

      for (const videoItem of data.aweme_detail.video.bit_rate) {
        if (bestQuality === null || videoItem.quality_type < bestQuality) {
          bestItem = videoItem;
          bestQuality = videoItem.quality_type;
        }
      }

      if (
        bestItem.hasOwnProperty("play_addr") &&
        bestItem.play_addr.hasOwnProperty("url_list")
      ) {
        const videoUrl = bestItem.play_addr.url_list[0];
        const videoSize = bestItem.play_addr.data_size;
        const videoRes = bestItem.play_addr.height * bestItem.play_addr.width;

        urls.unshift([videoRes, videoSize, videoUrl]);
      }
    }

    urls.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : b[1] - a[1]));

    return urls;
  };

  /**
   * Attempts to get a response from the API
   *
   * @param {string} videoId
   */
  API.getResponse = (videoId) => {
    let videoData = {
      success: false,
      description: null,
      user: null,
      url: null,
    };

    return new Promise(async (resolve, reject) => {
      const urlQuery = API.constructApiQuery(videoId);

      try {
        const response = await chrome.runtime.sendMessage(chrome.runtime.id, {
          task: "fetch",
          url: urlQuery,
        });

        const data = response.data; // Get JSON data

        if (response.error) {
          pipe("API Response failed for:", urlQuery);
        } else if (data) {
          pipe("API Response:", data);
        }

        let videoUrl = null;

        // Extract potential fallback data if available
        if (data && UTIL.checkNested(data, "aweme_list")) {
          const awemeList = data.aweme_list;
          const awemeEntries = Object.keys(awemeList);

          for (let index = 0; index < awemeEntries.length; index++) {
            const item = awemeList[awemeEntries[index]];
            const awemeId = item.aweme_id ? parseInt(item.aweme_id) : null;

            if (awemeId === parseInt(videoId)) {
              // Set list item as `aweme_detail` because the structure is the same as the default fetch method
              data.aweme_detail = { ...item };
              break;
            }
          }
        }

        if (data && UTIL.checkNested(data, "aweme_detail", "video")) {
          const extractedUrls = API.extractVideoUrls(data);

          if (extractedUrls.length > 0) {
            pipe("Extracted URLs", extractedUrls);
            videoUrl = extractedUrls[0][2];
          } else {
            pipe("No URLs could be extracted from the response.");
          }
        }

        if (videoUrl) {
          videoData.success = true;
          videoData.url = videoUrl;

          videoData = {
            ...videoData,
            ...API.extractId({
              ...data,
              ...{ videoId },
            }),
            apiFullResponse: data,
          };
          resolve(videoData);
        } else {
          reject("No `videoUrl` was found in the API response.");
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  /**
   * Attempts to fetch video URL through the API
   *
   * @param {string} videoId
   */
  API.getVideoData = async (videoId) => {
    return new Promise(async (resolve, reject) => {
      await API.getResponse(videoId)
        .then((response) => {
          if (response.success) {
            resolve({
              ...{
                success: false,
                description: null,
                user: null,
                url: null,
              },
              ...response,
            });
          }
        })
        .catch((error) => {
          pipe("API Attempt failed:", error);
        });

      reject(null);
    });
  };

  /**
   * Attempts to extract video data from the share popup
   *
   * @param {HTMLElement} element
   */
  const findVideoUrls = (element) => {
    if (element) {
      /** Get shareable `a` elements */
      const anchors = element.querySelectorAll("a[href]");

      for (let i = 0; i < anchors.length; i++) {
        const rawHref = anchors[i].getAttribute("href");
        const normalized = UTIL.normalizeTikTokUrl(rawHref);
        if (!normalized) {
          continue;
        }

        let decodedHref = normalized;
        try {
          decodedHref = decodeURIComponent(normalized);
        } catch (error) {
          pipe("⚠️ Failed to decode URL", { normalized, error });
        }

        const matches = EXPR.vanillaVideoUrl(decodedHref);

        /** If any matches */
        if (matches) {
          const [, username, videoId] = matches;
          return { username, videoId };
        }
      }
    }

    return false;
  };

  /**
   * Attempts to get the `app` container
   */
  const getAppContainer = () => {
    return document.querySelector(
      DOM.multiSelector({
        APP: "div#app",
        __NEXT: "div#main",
      })
    );
  };

  /**
   * Attempts to fetch the web API data for a video
   *
   * @param {object} videoData
   */
  const getWebApiData = (videoData) => {
    return new Promise((resolve, reject) => {
      if (!videoData.videoApiId) {
        reject("No video ID found in object");
      }

      const reqUrl = `https://www.tiktok.com/@${videoData.user}/video/${videoData.videoApiId}`;

      fetch(reqUrl)
        .then((res) => res.text())
        .then((body) => {
          let status = null,
            webappDetail = null;

          const webDocument = new DOMParser().parseFromString(
            body,
            "text/html"
          );
          const UDScript = webDocument.querySelector(
            "script#__UNIVERSAL_DATA_FOR_REHYDRATION__"
          );

          if (UDScript) {
            try {
              const UD = JSON.parse(UDScript.innerText);
              status =
                UTIL.traverseObj(UD, ["webapp.video-detail", "statusCode"]) ||
                0;
              webappDetail = UTIL.traverseObj(UD, [
                "webapp.video-detail",
                "itemInfo",
                "itemStruct",
              ]);
            } catch (error) {
              reject("Error parsing web data: " + error);
            }
          }

          pipe("Got web API response", { status }, webappDetail);

          if (webappDetail && ![10216].includes(status)) {
            // Video data is OK
            resolve(webappDetail);
          } else if (status === 10216) {
            // Status indicates a private video
            reject("Video is private");
          }

          reject(`Video is not available (status code: ${status})`);
        })
        .catch((error) => {
          reject("Error fetching web data: " + error);
        });
    });
  };

  /**
   * Downloads a file
   *
   * @param {string} url
   * @param {string} filename
   */
  const downloadFile = async (url, filename, buttonElement = null) => {
    // Sanitize filename
    (filename = UTIL.sanitizeFilename(filename)), (hasFallbacked = false);

    if (filename.length > 250) {
      // Truncate any super long strings
      filename = UTIL.truncateString(filename, 250);
    }

    /**
     * Reverts the state of the progress button
     *
     * @param {HTMLElement} buttonElement
     */
    const revertState = (buttonElement) => {
      if (buttonElement) {
        buttonElement.classList.remove("loading");
      }
    };

    /**
     * Fallback for when fetching is not allowed
     */
    const fallback = async (url) => {
      if (hasFallbacked) return;

      pipe("✘ File could not be fetched — attempting to open instead.");

      SPLASH.message("✘ Opened video in new tab (fetch was not allowed)", {
        duration: 3500,
        state: 2,
      });

      const tabActive = await getStoredSetting("download-fallback-tab-focus");

      chrome.runtime.sendMessage(chrome.runtime.id, {
        task: "windowOpen",
        url,
        active: tabActive === null ? true : tabActive,
      });

      revertState(buttonElement);
      hasFallbacked = true;
    };

    let subFolder = await getStoredSetting("download-subfolder-path");
    if (!(typeof subFolder === "string" || subFolder instanceof String)) {
      subFolder = "";
    }

    // Attempt download using chrome API (@ service.js)
    fetch(url, TTDB.headers)
      .then(async (t) => {
        if (!UTIL.validateVideoRequest(t) || !t.body) {
          // Check if the content type is invalid
          pipe(
            `✘ Probe failed for ${url} (${
              t.headers.get("Content-Type") || ""
            } - ${t.status})`,
            t
          );
          return fallback(url);
        }

        pipe("✓ Probe is valid", t);

        // Chrome  : Create blob from response and send its URL to backend worker
        // Firefox : Pass video URL directly, as that's allowed in that environment
        const chromium = UTIL.isChromium();
        const videoUrl = chromium ? URL.createObjectURL(await t.blob()) : url;
        const response = await chrome.runtime.sendMessage({
          task: "fileDownload",
          url: videoUrl,
          filename,
          subFolder,
        });

        if (response.success) {
          pipe(`✓ Downloaded ${url}`);
          SPLASH.message("✓ Downloaded video", { duration: 2500, state: 1 });
        } else {
          pipe(`✘ Downloading failed`, response);
          fallback(url);
        }

        revertState(buttonElement);

        if (chromium) {
          URL.revokeObjectURL(videoUrl);
        }
      })
      .catch((error) => {
        pipe(error);
        fallback(url);
      });
  };

  /**
   * DOM manipulation functions
   */
  const DOM = {
    /**
     * Creates a basic polygon svg element
     *
     * @param {object} values
     */
    createPolygonSvg: (values) => {
      const w3Url = "http://www.w3.org/2000/svg";
      const [width, height] = values.dimensions;

      const elementSvg = document.createElementNS(w3Url, "svg");
      const elementPolygon = document.createElementNS(w3Url, "polygon");

      DOM.setAttributes(elementSvg, {
        width,
        height,
        viewBox: `0 0 ${width} ${height}`,
      });

      elementPolygon.setAttribute("points", values.points.join(" "));
      elementSvg.appendChild(elementPolygon);

      if (values.style) {
        DOM.setStyle(elementSvg, values.style);
      }

      return elementSvg;
    },
    /**
     * Sets the CSS style of an element
     *
     * @param {HTMLElement} element
     * @param {object}      values
     */
    setStyle: (element, values) => {
      Object.keys(values).forEach((key) => {
        element.style[key] = values[key];
      });
    },
    /**
     * Sets the attributes of an element
     *
     * @param {HTMLElement} element
     * @param {object}      attributes
     */
    setAttributes: (element, attributes) => {
      Object.keys(attributes).forEach((key) => {
        element.setAttribute(key, attributes[key]);
      });

      return element;
    },
    /**
     * Creates a multi-selector out of an object
     *
     * @param {object} values
     */
    multiSelector: (values) => {
      return Object.keys(values)
        .map((key) => values[key])
        .join(", ");
    },
    selectorNamed: (values) => {
      for (const [name, value] of Object.entries(values)) {
        values[name] = document.querySelector(value) || null;
      }

      return values;
    },
    /**
     * Base function for creating button elements
     *
     * @param {object} values
     */
    createButton: (values) => {
      const container = document.createElement("a");
      const inner = document.createElement(
        values.innerType ? values.innerType : "span"
      );

      if (values.content) {
        const [contentMode, content] = values.content || [
          "textContent",
          "Download",
        ];

        if (content instanceof Element) {
          inner[contentMode](content);
        } else {
          inner[contentMode] = content;
        }
      }

      container.appendChild(inner);
      container.setAttribute("class", values.class || "");

      return container;
    },
  };

  /**
   * Creates different buttons for the different modes
   */
  const createButton = {
    /** Basic player (theater view) */
    BASIC_PLAYER: () => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("ttdb__button_basic-player_wrapper");

      /** Create download button */
      const button = DOM.createButton({
        content: ["textContent", "Download"],
        class: "ttdb__button_basic-player",
      });

      /** Set directly, as this makes it more compatible with dark mode addons */
      DOM.setStyle(button, {
        border: "1px solid rgba(254, 44, 85, 1.0)",
        "background-color": "rgba(254, 44, 85, 0.08)",
      });

      wrapper.appendChild(button);
      return wrapper;
    },
    /** Browser items (full-view items) */
    BROWSER: () => {
      /** Create download button */
      const button = DOM.createButton({
        content: ["textContent", "+"],
        class: "ttdb__button_browser",
      });

      button.dataset.originalLabel = "+";
      button.dataset.confirmedLabel = "✓";

      return button;
    },
    /** Feed items */
    FEED: () => {
      /** Create download button */
      return DOM.createButton({
        content: [
          "appendChild",
          DOM.createPolygonSvg({
            dimensions: [24, 24],
            points: [
              "13",
              "17.586",
              "13",
              "4",
              "11",
              "4",
              "11",
              "17.586",
              "4.707",
              "11.293",
              "3.293",
              "12.707",
              "12",
              "21.414",
              "20.707",
              "12.707",
              "19.293",
              "11.293",
              "13",
              "17.586",
            ],
          }),
        ],
        innerType: "div",
        class: "ttdb__button_feed",
      });
    },
    /** Grid items (videos/liked items) */
    GRID: () => {
      /** Create download button */
      return DOM.createButton({
        content: false,
        class: "ttdb__button_grid",
      });
    },
  };

  /**
   * Attempts to extract the description/tags to use as an ID (for when no number ID is available)
   *
   * @param {HTMLElement} container
   * @param {string}      env
   */
  const extractDescriptionId = (container, env = TTDB.ENV.APP) => {
    let identifier = null;
    let extracted = null;

    if (env === TTDB.ENV.APP) {
      const description = container.querySelector('span[class*="-SpanText "]');

      if (description) {
        extracted = description.parentElement.textContent;
      }
    } else if (env === TTDB.ENV.__NEXT) {
      const metaTitle = container.querySelector(
        'div[class*="video-meta-caption"]'
      );

      if (metaTitle) {
        extracted = metaTitle.textContent;
      }
    }

    if (extracted) {
      extracted = extracted
        .replace(/[/\\?%*:|"<>]/g, "-")
        .toLowerCase()
        .trim();

      if (extracted && extracted.length > 0) {
        identifier = extracted;
      }
    }

    return identifier;
  };

  /**
   * Injects a button into the action bar of a feed item
   *
   * Also monitors the parent for changes, as the action bar is prone to frequently
   * updating and clearing its content, thus also the buttons.
   *
   * @param {*} data
   */
  const feedInjectButton = (data) => {
    const { getActionBar, button, videoData } = data;

    const inject = () => {
      const actionBar = getActionBar();

      if (!actionBar.querySelector("a." + [...button.classList].join("."))) {
        button.setAttribute("video-id", videoData.id);

        downloadHook(button, videoData);
        button.ttIsProcessed = true;
        actionBar.prepend(button);

        setTimeout(() => {
          button.style.opacity = 1;
        }, 50);
      }
    };

    inject();

    let observer,
      timer = null;

    // Observe container for changes
    observer = new MutationObserver(() => {
      // (Re-)inject to new action bar if needed
      inject();
      clearTimeout(timer);

      // Disconnects observer after an idle time
      timer = setTimeout(() => observer.disconnect(), 1e5);
    });

    // Start observing action bar container for changes
    observer.observe(getActionBar().parentNode, {
      childList: true,
      subtree: true,
    });
  };

  /**
   * Gets the action bar of a feed item
   * @param {HTMLElement} element
   */
  const feedGetActionBar = (item, data) => {
    return item.querySelector(
      data.env === TTDB.ENV.APP
        ? 'section[class*="-SectionActionBarContainer"]'
        : 'div[class*="-action-bar"].vertical'
    );
  };

  /**
   * Extracts the video ID from a feed element
   * @param {HTMLElement} element
   */
  const feedExtractVideoId = (element) => {
    const xgWrapper = element.querySelector("div.xgplayer-container");

    if (!xgWrapper || !xgWrapper.hasAttribute("id")) {
      return false;
    }

    const [, , videoId] = xgWrapper.getAttribute("id").split("-");

    return videoId || false;
  };

  /**
   * Hacky way of retrieving the videoId of a `For You` item
   *
   * We need the ID to query the API correctly.
   *
   * @param {HTMLElement} element
   * @param {function}    callback
   * @param {integer}     timeout
   */
  const feedShareExtractIdLegacy = (element, callback, timeout = 500) => {
    let timer = null;

    const shareButton = element.querySelector(
      'div[role="button"][data-e2e="share-btn"] > button:not(.attempted)'
    );
    const shareButtonSvg = shareButton.querySelector("span > svg");

    // None of the required elements are defined — return `false`
    if (!shareButtonSvg || !shareButton) {
      callback(false);
    }

    // Callback wrapper
    const respond = (response, existing = false) => {
      if (!existing) {
        setTimeout(() => shareButton.classList.remove("extract"), 500);
        clearTimeout(timer);
        UTIL.dispatchEvent(shareButtonSvg, MouseEvent, "click");
      }
      callback(response);
    };

    /**
     * Called on mutation
     *
     * @param {array} mutationsList
     */
    const onMutate = (mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const attempt = findVideoUrls(
            element.querySelector('div[class*="-DivContainer "]')
          );

          if (attempt) {
            observer.disconnect(); // Good attempt — disconnect observer
            respond(attempt);
            break;
          }
        }
      }
    };

    // Checks if a share menu already is present
    let existingShare = element.querySelector('div[class*="-DivContainer "]');

    // Share menu is present, clone it and extract data
    if (existingShare) {
      attempt = findVideoUrls(existingShare.cloneNode(true));

      if (attempt) {
        respond(attempt, true); // Good attempt, callback
      } else {
        existingShare = false; // Failed attempt
      }
    }

    /**
     * If no existing share menu (this accounts for 99% of the cases)
     *
     * It only really already exists if the user hovers the share button prior
     * to the actual extraction, which is rare.
     */
    if (!existingShare) {
      observer = new MutationObserver(onMutate);
      observer.observe(shareButton, { childList: true, subtree: true });

      // Add a temporary class to hide `Share` menu
      shareButton.classList.add("extract");

      // Simulate a click on the share button's `SVG`
      UTIL.dispatchEvent(shareButtonSvg, MouseEvent, "click");

      timer = setTimeout(() => {
        // If no success within `timeout`, return `false`
        observer.disconnect();
        respond(false);
      }, timeout);
    }

    return false;
  };

  const itemData = { extract: {} };

  /** Feed items (`For Your` page etc.) */
  itemData.extract[TTDB.MODE.FEED] = (data) => {
    const videoData = {};

    let itemUser = data.container.querySelector(
      DOM.multiSelector({
        app: 'a > [class*="AuthorTitle "]',
        __next: "h3.author-uniqueId",
      })
    );

    if (itemUser) {
      /** Set username */
      videoData.user = itemUser.textContent;
    } else {
      /** Fallback username fetch */
      itemUser = data.container.querySelector('a[href^="/@"]');

      if (itemUser) {
        videoData.user = itemUser.getAttribute("href").split("/@")[1];
        if (videoData.user.includes("?")) {
          videoData.user = videoData.user.split("?")[0];
        }
      }
    }

    const feedVideoId = feedExtractVideoId(data.container);

    if (feedVideoId) {
      videoData.videoApiId = feedVideoId;
      videoData.id = feedVideoId;
    }

    if (!videoData.videoApiId) {
      const shareLinks = data.container.querySelectorAll('a[href*="/@"]');

      for (const link of shareLinks) {
        const href = link.getAttribute("href");
        const matches = href
          ? EXPR.vanillaVideoUrl(decodeURIComponent(href))
          : null;
        if (matches) {
          const [, username, mediaId] = matches;
          if (!videoData.user) {
            videoData.user = username;
          }
          videoData.videoApiId = mediaId;
          videoData.id = mediaId;
          break;
        }
      }
    }

    const descriptionIdentifier = extractDescriptionId(
      data.container,
      data.env
    );
    if (!videoData.id && descriptionIdentifier) {
      videoData.id = descriptionIdentifier;
    }

    if (!videoData.id) {
      videoData.id = Date.now();
    }

    return videoData;
  };

  /** Grid items (videos from user page, liked videos etc.) */
  itemData.extract[TTDB.MODE.GRID] = (data) => {
    const videoData = {};
    const itemLinks = data.container.querySelectorAll('a[href*="com/@"]');

    itemLinks.forEach((link) => {
      const matches = EXPR.vanillaVideoUrl(link.getAttribute("href"), {
        strict: true,
      });

      if (matches) {
        let [, user, id] = matches;

        videoData.user = user;
        videoData.id = id;

        if (/^\d+$/.test(id)) {
          videoData.videoApiId = id;
        }
      }
    });

    return videoData;
  };

  /** Browser items (when opening a video grid item or on the `For You` page) */
  itemData.extract[TTDB.MODE.BROWSER] = (data) => {
    const videoData = {};

    let itemUser = null;

    if (data.env === TTDB.ENV.APP) {
      /** Get username */
      itemUser = data.container.querySelector(
        'div[class*="-DivInfoContainer "] a[href*="/@"]'
      );

      if (itemUser) {
        videoData.user = itemUser.getAttribute("href").split("/@")[1];
        if (videoData.user.includes("?")) {
          videoData.user = videoData.user.split("?")[0];
        }
      }

      const selectors = DOM.selectorNamed({
        xgWrapper: 'div[id*="xgwrapper-"]',
        spanUniqueId: 'span[class*="-SpanUniqueId"]',
        legacyCopyLink: 'p[class*="-PCopyLinkText"]',
      });

      // Attempt `xgwrapper` extraction
      if (selectors.xgWrapper) {
        const xgId = selectors.xgWrapper.getAttribute("id").split("-").pop();

        if (parseInt(xgId) > 0) {
          videoData.videoApiId = xgId;

          if (selectors.spanUniqueId) {
            videoData.user = selectors.spanUniqueId.innerText.trim();
          }

          pipe("[BROWSER] Extracted from `xgwrapper`:", videoData);
        }
      }

      // Attempt location extraction
      if (!videoData.videoApiId) {
        const matches = EXPR.vanillaVideoUrl(window.location.href);

        if (matches) {
          const [, user, videoId] = matches;

          videoData.videoApiId = videoId;
          videoData.user = user;

          pipe("[BROWSER] Extracted from window location:", videoData);
        }
      }

      // Attempt "Copy link" extraction
      if (!videoData.videoApiId && selectors.legacyCopyLink) {
        // Get data from copy link URL
        const matches = EXPR.vanillaVideoUrl(
          selectors.legacyCopyLink.textContent
        );
        const [, username, videoId] = matches;

        videoData.user = username;
        videoData.videoApiId = videoId;

        pipe("[BROWSER] Extracted from copy link feature:", videoData);
      }

      // Attempt anchor extraction
      if (!videoData.videoApiId) {
        // Get data from share URLs
        const shareData = findVideoUrls(data.container);

        if (shareData) {
          videoData.user = shareData.username;
          videoData.videoApiId = shareData.videoId;

          pipe("[BROWSER] Extracted from share URLs:", videoData);
        }
      }
    } else if (data.env === TTDB.ENV.__NEXT) {
      // Extract username
      itemUser = data.container.querySelector(
        "div.user-info a > h2.user-username"
      );

      if (itemUser) {
        videoData.user = itemUser.textContent.trim();
      }
    }

    // Get alternative id (no ID available here)
    const descriptionIdentifier = extractDescriptionId(
      data.container,
      data.env
    );

    if (descriptionIdentifier) {
      videoData.id = descriptionIdentifier;
    }

    return videoData;
  };

  itemData.extract[TTDB.MODE.BASIC_PLAYER] = (data) => {
    const videoData = {};
    const parent = data.container.closest('div[class*="-DivLeftContainer "]');

    if (parent) {
      const userId = parent.querySelectorAll(
        'span[class*="-SpanUniqueId "], span[data-e2e="browse-username"]'
      );

      if (userId[0]) {
        videoData.user = userId[0].textContent.trim();
      } else {
        // User ID fallback
        const authorElement = parent.querySelector(
          'div[class*="-DivAuthorContainer "]'
        );

        if (authorElement) {
          const userHref = authorElement.querySelectorAll('a[href^="/@"]');

          if (userHref[0]) {
            videoData.user = userHref[0]
              .getAttribute("href")
              .split("/@")[1]
              .trim();
            if (videoData.user.includes("?")) {
              videoData.user = videoData.user.split("?")[0];
            }
          } else {
            videoData.user = "tiktok_video";
          }
        }
      }

      let videoTags = parent.querySelectorAll(
        'span[class*="-SpanText "], a[href^="/tag/"] \
				strong[class*="-StrongText "]'
      );

      if (videoTags) {
        videoTags = [...videoTags].map((e) => {
          return e.textContent ? e.textContent.trim() : false;
        });

        videoTags = videoTags.filter((e) => e);
        videoData.id = videoTags.join(" ");
      }
    }

    // Get user and video id from URL
    const matches = EXPR.vanillaVideoUrl(window.location.href);

    if (matches) {
      const [, user, videoId] = matches;

      videoData.videoApiId = videoId;
      videoData.user = user;
    }

    return videoData;
  };

  /**
   * Get video data from an item
   *
   * @param {HTMLElement} container
   * @param {object}      data
   */
  itemData.get = (container, data) => {
    let videoData = { id: null, user: null, url: null, mediaType: null };
    const videoElement = container.querySelector("video");

    const slideshowSelectors = [
      'div[data-e2e="browse-slide"]',
      'div[data-e2e*="photo"]',
      'div[class*="-DivBrowseSlide"]',
      'div[class*="-DivSlideCard"]',
      'img[data-e2e*="slide"]',
      'canvas[data-e2e*="slide"]',
      'div[data-e2e="feed-photo"]',
      'div[data-e2e="photo-mode"]',
      'div[class*="SwiperSlide"]',
    ];

    // Check if URL contains /photo/ to detect slideshow
    const isPhotoUrl = window.location.href.includes("/photo/");

    const slideshowElement = videoElement
      ? null
      : container.querySelector(slideshowSelectors.join(", "));
    const hasMediaElement = Boolean(
      videoElement || slideshowElement || isPhotoUrl
    );

    if (hasMediaElement && itemData.extract[data.mode]) {
      if (videoElement && !isPhotoUrl) {
        videoData.url = videoElement.getAttribute("src");

        if (!videoData.url) {
          // If we have a <source/> element instead of an attribute
          const sourceElement = videoElement.querySelector("source");

          if (sourceElement) {
            videoData.url = sourceElement.getAttribute("src");
          }
        }

        videoData.mediaType = "video";
      }

      if (!videoData.url && (slideshowElement || isPhotoUrl)) {
        videoData.mediaType = "slideshow";
        videoData.isSlideshow = true;

        const slideImages = container.querySelectorAll(
          'img[data-e2e*="slide"], img[src*="image"], img[src*="photo"], canvas[data-e2e*="slide"]'
        );
        if (slideImages.length) {
          videoData.slideCount = slideImages.length;
        }

        pipe("📸 Slideshow detected:", {
          hasElement: !!slideshowElement,
          isPhotoUrl: isPhotoUrl,
          slideCount: slideImages.length,
          mode: data.mode,
        });
      }

      videoData = {
        ...videoData,
        ...itemData.extract[data.mode](data),
      };

      if (!videoData.id) {
        videoData.id = Date.now();
      }
    }

    return videoData;
  };

  /**
   * Fetches video items
   */
  const selectAllVideoItems = () => {
    // Use all selectors, but we'll filter in the processing loop
    const selectors = DOM.multiSelector({
      appShareOverlay:
        'div.TUXModal > div[data-e2e="share-group"]:not([is-downloadable])',
      appItemContainer:
        'div[class*="-DivItemContainer"]:not([is-downloadable]):not([class*="-kdocy-"])',
      appBrowserMode:
        'div[class*="-DivBrowserModeContainer "]:not([is-downloadable])',
      appPhotoMode: 'div[data-e2e*="photo-mode"]:not([is-downloadable])',
      appPhotoContainer: 'div[data-e2e*="browse-photo"]:not([is-downloadable])',
      appSlideshowContainer:
        'div[data-e2e*="browse-slide"]:not([is-downloadable])',
      appForYouArticle:
        "main > div#column-list-container > article:not([is-downloadable])",
      appBasicPlayer:
        'div[class*="-DivLeftContainer "] div[class*="-DivVideoContainer "] \
				div[class*="-DivContainer "]:not([is-downloadable])',
      __nextGrid: "div.video-feed div.video-feed-item:not([is-downloadable])",
      __nextBig:
        "div.video-feed-container div.feed-item-content:not([is-downloadable])",
      __nextBrowser:
        "div.tt-feed div.video-card-big.browse-mode:not([is-downloadable])",
      __nextPhoto:
        'div.tt-feed div[data-e2e*="photo-card"]:not([is-downloadable])',
      __nextSlideshow:
        'div.tt-feed div[data-e2e*="slide"]:not([is-downloadable])',
    });

    return document.querySelectorAll(selectors);
  };

  /**
   * Object getter using dot notation
   */
  const _get = (obj, path, defValue) => {
    if (!path) {
      return undefined;
    }

    const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
    const result = pathArray.reduce(
      (prevObj, key) => prevObj && prevObj[key],
      obj
    );

    return result === undefined ? defValue : result;
  };

  /**
   * Returns the filename template
   *
   * @param {object} data
   * @param {string} template
   */
  const getFileNameTemplate = (
    data,
    apiData,
    template = "{uploader} - {desc}"
  ) => {
    const templateValues = {};

    // Desired template data of the keys
    const templateKeys = {
      // User ID (their @ID)
      uploader: [
        ["author", "uniqueId"],
        data.user,
        ["aweme_detail", "author", "unique_id"],
      ],
      // User nickname (full username), not their @ID
      nickname: [
        ["author", "nickname"],
        ["aweme_detail", "author", "nickname"],
      ],
      // Video description
      desc: [
        ["desc"],
        data.description,
        ["aweme_detail", "author", "unique_id"],
      ],
      // User ID
      uid: [
        ["author", "id"],
        ["aweme_detail", "author", "uid"],
        ["aweme_detail", "author_user_id"],
      ],
      // Video ID
      id: [["id"], data.videoApiId, data.videoId],
      // Video region
      region: [["aweme_detail", "region"]],
      // Video language
      language: [["aweme_detail", "author", "language"]],
      // Uploaders signature (their profile description essentially)
      signature: [
        ["author", "signature"],
        ["aweme_detail", "author", "signature"],
      ],
      // Upload timestamp (Unix)
      uploaded: [["createTime"], ["aweme_detail", "create_time"]],
      // Current timestamp (Unix)
      timestamp: [Math.round(Date.now() / 1000)],
    };

    // Get template options from the API data
    for (const [key, value] of Object.entries(templateKeys)) {
      if (!templateValues.hasOwnProperty(key)) {
        let keyData = null;
        for (const item of value) {
          if (!Array.isArray(item) && item) {
            keyData = item;
            break;
          } else if (
            Array.isArray(item) &&
            UTIL.checkNested(apiData, ...item)
          ) {
            keyData = _get(apiData, item.join("."));
            break;
          }
        }

        // Set template key value, revert to a nulled string
        templateValues[key] = keyData || "";
      }
    }

    // Create readable timestamps
    for (const timestamp of ["uploaded", "timestamp"]) {
      // Make sure it's an integer
      templateValues[timestamp] = parseInt(templateValues[timestamp]);

      if (
        Number.isInteger(templateValues[timestamp]) &&
        templateValues[timestamp] > 0
      ) {
        const ts = new Date(templateValues[timestamp] * 1000);
        const tsData = {
          year: ts.getFullYear(),
          month: ts.getMonth() + 1,
          day: ts.getDate(),
          hour: ts.getHours(),
          minute: ts.getMinutes(),
          second: ts.getSeconds(),
        };

        for (const [key, value] of Object.entries(tsData)) {
          // Pad any values under ten
          if (value < 10) tsData[key] = `0${value}`;
        }

        const tsDate = `${tsData.year}${tsData.month}${tsData.day}`; // Format date
        const tsTime = `${tsData.hour}${tsData.minute}${tsData.second}`; // Format time

        // Set template key value
        templateValues[`${timestamp}_s`] = `${tsDate}_${tsTime}`;
      }
    }

    pipe("Template values", templateValues);

    let filename = template;

    // Replace template options with actual values
    for (const [key, value] of Object.entries(templateValues)) {
      filename = filename.replace(`{${key}}`, value);
    }

    // Remove any remaining template options
    filename = filename.replace(/({[^}]+})/g, "");

    if (!filename.endsWith(".mp4")) {
      filename = `${filename}.mp4`;
    }

    return filename.length >= 5 ? filename : null;
  };

  const downloadHook = async (button, videoData) => {
    pipe("🪝 downloadHook called with:", {
      isSlideshow: videoData.isSlideshow,
      hasUrl: !!videoData.url,
      mediaType: videoData.mediaType,
      id: videoData.id,
      user: videoData.user,
    });

    const isBrowserButton = button.classList.contains("ttdb__button_browser");
    const getBrowserButtonLabelElement = () => {
      const firstElement = button.firstElementChild;
      return firstElement instanceof Element ? firstElement : null;
    };
    const applyBrowserButtonLabel = (label) => {
      if (!isBrowserButton || typeof label === "undefined") {
        return;
      }

      const labelElement = getBrowserButtonLabelElement();
      if (labelElement) {
        labelElement.textContent = label;
      } else {
        button.textContent = label;
      }
    };

    if (isBrowserButton) {
      if (!button.dataset.originalLabel) {
        const labelElement = getBrowserButtonLabelElement();
        const current =
          (labelElement ? labelElement.textContent : button.textContent) || "";
        button.dataset.originalLabel = current.trim() || "+";
      }

      if (!button.dataset.confirmedLabel) {
        button.dataset.confirmedLabel = "✓";
      }
    }

    const slideshowLikePost =
      videoData.isSlideshow ||
      (videoData.postUrl && videoData.postUrl.includes("/photo/"));

    if (slideshowLikePost) {
      let normalizedUrl = UTIL.normalizeTikTokUrl(videoData.postUrl);

      if (!normalizedUrl && videoData.user && videoData.videoApiId) {
        const username = videoData.user.replace(/^@/, "");
        normalizedUrl =
          UTIL.normalizeTikTokUrl(
            `/@${username}/photo/${videoData.videoApiId}`
          ) ||
          UTIL.normalizeTikTokUrl(
            `/@${username}/video/${videoData.videoApiId}`
          );
      }

      if (!normalizedUrl) {
        const locationMatch = EXPR.vanillaVideoUrl(window.location.href);
        if (locationMatch) {
          const [, username, mediaId] = locationMatch;
          normalizedUrl = window.location.href;
          if (!videoData.user) videoData.user = username;
          if (!videoData.videoApiId) videoData.videoApiId = mediaId;
          if (!videoData.id) videoData.id = mediaId;
        }
      }

      if (!normalizedUrl) {
        pipe("⚠️ downloadHook - Unable to resolve slideshow URL", {
          videoData,
        });
        button.dataset.postUrl = "";
        return;
      }

      button.dataset.postUrl = normalizedUrl;
      videoData.postUrl = normalizedUrl;
      if (!videoData.isSlideshow && normalizedUrl.includes("/photo/")) {
        videoData.isSlideshow = true;
        videoData.mediaType = videoData.mediaType || "slideshow";
      }
    }

    const videoIdentifier = videoData.id ? videoData.id : Date.now();
    let fileName = `${
      videoData.user ? videoData.user + " - " : ""
    }${videoIdentifier}`;

    DOM.setAttributes(button, {
      filename: `${fileName.trim()}.mp4`,
    });

    if (videoData.videoApiId) {
      button.setAttribute("video-id", videoData.videoApiId);
    }

    if (videoData.isSlideshow && !videoData.url) {
      pipe("✅ Setting up slideshow button (no video URL)");

      DOM.setStyle(button, {
        cursor: "pointer",
        "pointer-events": "auto",
        opacity: "1",
      });

      button.classList.add("ttdb__button_slideshow");
      button.setAttribute("data-slideshow", "true");
    }

    if (!button.hasListener) {
		button.addEventListener("click", async (e) => {
			e.preventDefault();
			button.classList.add("loading");

			const postUrl = button.dataset.postUrl;

			// Fallback: token frisch laden, falls Cache leer/stale
			let extensionToken = TTDB.extensionToken || (await getExtensionToken());

			if (!postUrl) {
				pipe("⚠️ Slideshow import aborted - missing post URL", {
					videoData,
				});
				SPLASH.message("✘ Unable to retrieve slideshow link", {
					duration: 4000,
					state: 3,
				});
				button.classList.remove("loading");
				return;
			}

			if (!extensionToken) {
				pipe("⚠️ Slideshow import aborted - missing extension token");
				SPLASH.message(
					"✘ Missing SlidesCockpit token. Open the extension settings to add it.",
					{
						duration: 4000,
						state: 3,
					},
				);
				button.classList.remove("loading");
				return;
			}

			try {
				const response = await new Promise((resolve, reject) => {
					chrome.runtime.sendMessage(
						{
							task: "fetch",
							url: "https://slidescockpit.com/api/apify/from-url",
							options: {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									Authorization: `Bearer ${extensionToken}`,
								},
								body: JSON.stringify({ url: postUrl }),
							},
						},
						(reply) => {
							if (chrome.runtime.lastError) {
								reject(chrome.runtime.lastError);
								return;
							}
							resolve(reply);
						}
					);
				});

				if (response?.error) {
					const message =
						typeof response.error?.message === "string"
							? response.error.message
							: "Slideshow import failed";
					throw new Error(message);
				}

				SPLASH.message("📸 Slideshow import started", {
					duration: 2500,
					state: 1,
				});
				applyBrowserButtonLabel(button.dataset.confirmedLabel || "✓");
			} catch (error) {
				console.error("Failed to send slideshow import request", error);
				const errorMessage =
					error instanceof Error && error.message
						? error.message
						: "Slideshow import failed";
				SPLASH.message(`✘ ${errorMessage}`, {
					duration: 4000,
					state: 3,
				});
				applyBrowserButtonLabel(button.dataset.originalLabel || "+");
			} finally {
				button.classList.remove("loading");
			}
		});

      button.hasListener = true;
    }

    /** Download data has been set, make element interactable again */
    DOM.setStyle(button, {
      cursor: "pointer",
      "pointer-events": "auto",
    });

    return button;
  };

  const itemSetup = { setters: {} };

  itemSetup.setters[TTDB.MODE.BROWSER] = (item, data) => {
    let linkContainer = null;
    let usedFallback = false;

    const appSelectors = DOM.multiSelector({
      legacyCopyLink: 'div[class*="-DivCopyLinkContainer"]',
      newMainContent: 'div[class*="-DivTabMenuContainer"]',
      photoActions: 'div[data-e2e="photo-actions"]',
      videoActions: 'div[data-e2e="video-actions"]',
      browseSlideshowActions: 'div[data-e2e="browse-slideshow-actions"]',
    });

    const nextSelectors = DOM.multiSelector({
      actionContainer: "div.video-infos-container > div.action-container",
      sideActions: 'div[data-e2e="browser-action"]',
      photoActions: 'div[data-e2e="photo-action"]',
      actionColumn:
        'div[class*="-ActionContainer"], div[class*="-action-container"]',
    });

    if (data.env === TTDB.ENV.APP) {
      linkContainer = document.querySelector(appSelectors);
      pipe("🔍 BROWSER mode - looking for action container with APP selectors");
    } else if (data.env === TTDB.ENV.__NEXT) {
      linkContainer = item.querySelector(nextSelectors);
      pipe(
        "🔍 BROWSER mode - looking for action container with NEXT selectors"
      );
    }

    if (!linkContainer) {
      pipe("🔍 BROWSER mode - using fallback selectors");
      linkContainer = item.querySelector(
        'div[data-e2e*="action"], div[class*="-ActionContainer"], div[class*="-action-container"], div[data-e2e*="share"]'
      );
    }

    if (!linkContainer) {
      pipe("⚠️ BROWSER mode - No action container found, creating fallback");
      let fallback = item.querySelector("div.ttdb__actions-fallback");

      if (!fallback) {
        fallback = document.createElement("div");
        fallback.classList.add("ttdb__actions-fallback");
        item.appendChild(fallback);

        const computedPosition = getComputedStyle(item).position;
        if (computedPosition === "static" || !computedPosition) {
          item.style.position = "relative";
        }
      }

      linkContainer = fallback;
      usedFallback = true;
    } else {
      pipe(
        "✅ BROWSER mode - Action container found:",
        linkContainer.className
      );
    }

    if (
      linkContainer &&
      !window.location.pathname.match(/\/(photo|video)\/\d+$/)
    ) {
      // Mark container as handled (download hook as been set up)
      item.setAttribute("is-downloadable", "true");

      // Create download button
      const button = createButton.BROWSER();
      const buttonWrapper = document.createElement("div");
      buttonWrapper.classList.add("ttdb__button_browser_wrapper");
      buttonWrapper.appendChild(button);
      let videoData = itemData.get(item, data) || {
        id: null,
        user: null,
        url: null,
      };

      pipe("📊 BROWSER mode - Video data extracted:", {
        hasVideoData: !!videoData,
        mediaType: videoData?.mediaType,
        isSlideshow: videoData?.isSlideshow,
        hasId: !!videoData?.id,
        hasUser: !!videoData?.user,
      });

      if (!videoData?.mediaType) {
        const slideshowElement = item.querySelector(
          'div[data-e2e*="photo"], div[data-e2e*="slide"], div[class*="-DivSlideCard"], img[data-e2e*="slide"]'
        );

        if (slideshowElement) {
          videoData = {
            ...videoData,
            isSlideshow: true,
            mediaType: "slideshow",
          };

          const slides = item.querySelectorAll(
            'img[data-e2e*="slide"], img[src*="image"], img[src*="photo"], canvas[data-e2e*="slide"]'
          );
          if (slides.length) {
            videoData.slideCount = slides.length;
          }
        }
      }

      if (!videoData.postUrl) {
        const slideshowLink = item.querySelector(
          'a[href*="/@"][href*="/photo/"]'
        );

        const candidateElements = [
          slideshowLink,
          slideshowLink?.closest("a"),
          item.querySelector('a[href*="/@"][href*="/video/"]'),
          linkContainer?.querySelector('a[href*="/@"][href*="/photo/"]'),
          linkContainer?.querySelector('a[href*="/@"][href*="/video/"]'),
        ].filter(Boolean);

        let rawCandidate = null;
        let matchingAnchor = null;
        for (const element of candidateElements) {
          const potential =
            element.getAttribute("href") ||
            element.getAttribute("data-href") ||
            element.href;
          if (potential) {
            rawCandidate = potential;
            matchingAnchor = element;
            break;
          }
        }

        if (!rawCandidate) {
          const inputCandidate =
            item.querySelector('input[value*="/@"][value*="/photo/"]') ||
            linkContainer?.querySelector(
              'input[value*="/@"][value*="/photo/"]'
            );
          if (inputCandidate) {
            rawCandidate =
              inputCandidate.getAttribute("value") || inputCandidate.value;
          }
        }

        const normalizedCandidate = UTIL.normalizeTikTokUrl(rawCandidate);
        if (normalizedCandidate) {
          let finalUrl = normalizedCandidate;

          if (matchingAnchor) {
            try {
              const url = new URL(normalizedCandidate);
              const pathSegments = url.pathname.split("/").filter(Boolean);
              const postId = pathSegments.pop();
              if (postId && /\d+/.test(postId)) {
                const slug = postId.slice(0, 8);
                const slugLink = matchingAnchor.querySelector(
                  `a[href*="${slug}"]`
                );
                if (slugLink?.href) {
                  finalUrl = UTIL.normalizeTikTokUrl(slugLink.href) || finalUrl;
                }
              }
            } catch (error) {
              pipe("⚠️ Failed to inspect slug container", {
                anchor: matchingAnchor.outerHTML,
                error,
              });
            }
          }

          videoData.postUrl = finalUrl;
          if (finalUrl.includes("/photo/")) {
            videoData.isSlideshow = true;
            videoData.mediaType = "slideshow";
          }
          const matches = EXPR.vanillaVideoUrl(finalUrl);
          if (matches) {
            const [, username, mediaId] = matches;
            if (!videoData.user) {
              videoData.user = username;
            }
            if (!videoData.videoApiId) {
              videoData.videoApiId = mediaId;
            }
            if (!videoData.id) {
              videoData.id = mediaId;
            }
          }

          if (!videoData.postUrl && slideshowLink?.href) {
            const fallbackUrl = UTIL.normalizeTikTokUrl(slideshowLink.href);
            if (fallbackUrl) {
              videoData.postUrl = fallbackUrl;
              if (fallbackUrl.includes("/photo/")) {
                videoData.isSlideshow = true;
                videoData.mediaType = "slideshow";
              }
              const fallbackMatches = EXPR.vanillaVideoUrl(fallbackUrl);
              if (fallbackMatches) {
                const [, fbUser, fbId] = fallbackMatches;
                videoData.user = fbUser;
                videoData.videoApiId = fbId;
                videoData.id = fbId;
              }
            }
          }
        }
      }

      if (!videoData || !videoData.id) {
        const urlMatches = EXPR.vanillaVideoUrl(window.location.href, {
          strict: true,
        });

        if (urlMatches) {
          const [, username, mediaId] = urlMatches;
          videoData = {
            ...videoData,
            id: mediaId,
            videoApiId: mediaId,
            user: videoData?.user || username,
            isSlideshow: window.location.href.includes("/photo/"),
            mediaType: window.location.href.includes("/photo/")
              ? "slideshow"
              : videoData?.mediaType || "video",
            postUrl: window.location.href,
          };
        }
      }

      if (usedFallback) {
        linkContainer.appendChild(buttonWrapper);
        pipe("📍 BROWSER mode - Button added to fallback container");
      } else if (data.env === TTDB.ENV.APP) {
        linkContainer.before(buttonWrapper);
        pipe("📍 BROWSER mode - Button placed before action container (APP)");
      } else if (data.env === TTDB.ENV.__NEXT) {
        linkContainer.after(buttonWrapper);
        pipe("📍 BROWSER mode - Button placed after action container (NEXT)");
      }

      button.setAttribute(
        "ttdb_mode",
        data.env === TTDB.ENV.__NEXT ? "__NEXT" : "APP"
      );

      pipe("🎯 BROWSER mode - Calling downloadHook with videoData:", videoData);
      downloadHook(button, videoData);

      if (TTDB.observers.browserObserver) {
        TTDB.observers.browserObserver.disconnect();
      }

      const callback = (mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            clearTimeout(TTDB.timers.browserObserver);
            TTDB.timers.browserObserver = setTimeout(() => {
              downloadHook(button, itemData.get(item, data));
            }, 100);
          }
        }
      };

      TTDB.observers.browserObserver = new MutationObserver(callback);

      // Observe any changes when navigating through items
      TTDB.observers.browserObserver.observe(item, {
        childList: true,
        subtree: true,
      });

      return true;
    }

    return false;
  };

  itemSetup.setters[TTDB.MODE.GRID] = (item, data) => {
    // Check if this is a slideshow by looking at the link
    const link = item.querySelector('a[href*="/photo/"]');
    const isSlideshow = !!link;

    if (!isSlideshow) {
      return false;
    }

    item.setAttribute("is-downloadable", "true");

    // Create download button
    const button = createButton.GRID();
    const rawLink = link?.getAttribute("href") || link?.href || "";
    let slideshowUrl = null;

    if (rawLink) {
      try {
        slideshowUrl = new URL(
          rawLink,
          rawLink.startsWith("http") ? undefined : window.location.origin
        ).href;
      } catch (error) {
        pipe("⚠️ GRID mode - Failed to normalise URL", { rawLink, error });
      }
    }

    const setButton = (videoData, button) => {
      if (!videoData.isSlideshow || button.ttIsProcessed) {
        return;
      }

      if (slideshowUrl && !videoData.postUrl) {
        videoData.postUrl = slideshowUrl;
      }

      downloadHook(button, videoData);
      button.ttIsProcessed = true;
    };

    item.addEventListener("mouseenter", () => {
      if (button.ttIsProcessed) {
        return;
      }

      let videoData = itemData.get(item, data);

      if (!videoData.isSlideshow) {
        videoData.isSlideshow = true;
        videoData.mediaType = "slideshow";
      }

      setButton(videoData, button);
    });

    DOM.setStyle(item, { position: "relative" });
    item.appendChild(button);
    setTimeout(() => {
      button.style.opacity = 1;
    }, 100);

    return true;
  };

  itemSetup.setters[TTDB.MODE.FEED] = (item, data) => {
    const videoPreview = item.querySelector(
      data.env === TTDB.ENV.APP
        ? ":scope > div:first-child"
        : 'div[class*="video-card"] > span[class$="mask"]'
    );
    const slideshowPreview = item.querySelector(
      'div[data-e2e*="photo"], div[data-e2e*="slide"], div[class*="-DivSlideCard"], img[data-e2e*="slide"], div[class*="SwiperSlide"]'
    );

    // Also check for photo links in the item
    const hasPhotoLink = item.querySelector('a[href*="/photo/"]');

    if (videoPreview || slideshowPreview || hasPhotoLink) {
      if (!feedGetActionBar(item, data)) {
        return;
      }

      const videoData = itemData.get(item, data);
      const feedLink = item.querySelector('a[href*="/photo/"]');
      if (!videoData.postUrl && feedLink) {
        const rawHref = feedLink.getAttribute("href") || feedLink.href || "";
        try {
          videoData.postUrl = new URL(
            rawHref,
            rawHref.startsWith("http") ? undefined : window.location.origin
          ).href;
        } catch (error) {
          pipe("⚠️ FEED mode - Failed to normalise URL", {
            rawHref,
            error,
          });
        }
      }
      const button = createButton.FEED();

      if ((videoData.url || videoData.isSlideshow) && !button.ttIsProcessed) {
        const feedId = feedExtractVideoId(item);

        if (feedId) {
          videoData.id = feedId;
          videoData.videoApiId = videoData.videoApiId || feedId;
        }

        if (videoData.id) {
          feedInjectButton({
            getActionBar: () => {
              return feedGetActionBar(item, data);
            },
            button: button,
            videoData: videoData,
          });

          item.setAttribute("is-downloadable", "true");
        }
      }

      return true;
    }

    return false;
  };

  /** Set up basic player item ("theater" mode) */
  itemSetup.setters[TTDB.MODE.BASIC_PLAYER] = (item, data) => {
    let videoElement = item.querySelector("video");
    const isPhotoUrl = window.location.href.includes("/photo/");
    const slideshowElement =
      videoElement && !isPhotoUrl
        ? null
        : item.querySelector(
            'div[data-e2e="browse-slide"], div[data-e2e="photo-mode"], div[class*="-DivSlideCard"], img[data-e2e*="slide"], div[class*="SwiperSlide"]'
          );

    if (!(videoElement || slideshowElement || isPhotoUrl)) {
      return;
    }

    item.setAttribute("is-downloadable", "true");

    // Create download button
    let button = createButton.BASIC_PLAYER();

    // Get parent element
    const parent = data.container.closest('div[class*="-DivLeftContainer "]');

    if (parent) {
      let existingButton = parent.querySelector(`.${button.classList[0]}`);
      if (existingButton) existingButton.remove();

      parent.children[0].parentNode.insertBefore(
        button,
        parent.children[0].nextSibling
      );

      button = button.querySelector("a");

      const widthTarget = parent.querySelector(
        'div[class*="-DivInfoContainer "]'
      );
      DOM.setStyle(button, {
        width: `${Math.min(
          widthTarget ? widthTarget.offsetWidth : 240,
          240
        )}px`,
      });

      const videoData = itemData.get(item, data);
      if (!videoData.postUrl) {
        videoData.postUrl = window.location.href;
      }

      if (!videoData.isSlideshow) {
        pipe("⏭️ BASIC_PLAYER mode - skipping non-slideshow media");
        button.parentNode?.parentNode?.removeChild(button.parentNode);
        item.removeAttribute("is-downloadable");
        return;
      }

      if (!button.ttIsProcessed) {
        button.parentNode.style.display = "inherit";
        setTimeout(() => (button.style.opacity = "1"), 50);
        downloadHook(button, videoData);
        button.ttIsProcessed = true;
      }
    }
  };

  itemSetup.setters[TTDB.MODE.SHARE_OVERLAY] = (item, _) => {
    const input = item.querySelector('input[value*="/photo/"]');
    if (!input) {
      return false;
    }

    const rawValue = input.getAttribute("value") || "";
    const matches = EXPR.vanillaVideoUrl(rawValue, { strict: true });

    if (!matches) {
      return false;
    }

    item.setAttribute("is-downloadable", "true");

    const [, username, videoId] = matches;
    let button = createButton.BASIC_PLAYER();

    item.prepend(button);

    button.classList.add("share");
    button = button.querySelector("a");
    button.parentNode.style.display = "block";

    setTimeout(() => (button.style.opacity = "1"), 50);

    let normalizedUrl = rawValue;
    if (normalizedUrl && !normalizedUrl.startsWith("http")) {
      try {
        normalizedUrl = new URL(normalizedUrl, window.location.origin).href;
      } catch (error) {
        pipe("⚠️ SHARE_OVERLAY - Failed to normalise URL", {
          rawValue,
          error,
        });
      }
    }

    downloadHook(button, {
      id: videoId,
      videoApiId: videoId,
      user: username,
      url: "",
      isSlideshow: true,
      mediaType: "slideshow",
      postUrl: normalizedUrl || window.location.href,
    });

    return true;
  };

  /**
   * Set up item (get data, create download button and hooks)
   *
   * @param {string}      itemType
   * @param {HTMLElement} item
   * @param {object}      data
   */
  itemSetup.set = (itemType, item, data) => {
    return itemSetup.setters[itemType](item, data);
  };

  /**
   * Cleans up all extension buttons and resets items
   */
  const cleanupButtons = () => {
    // Remove all extension buttons
    const buttons = document.querySelectorAll('[class*="ttdb__button"]');
    buttons.forEach((btn) => {
      const parent = btn.parentElement;
      btn.remove();
      pipe("🧹 Removed button:", btn.className);
    });

    // Remove all fallback containers
    const fallbacks = document.querySelectorAll("div.ttdb__actions-fallback");
    fallbacks.forEach((fb) => fb.remove());

    // Reset all is-downloadable attributes
    const downloadableItems = document.querySelectorAll("[is-downloadable]");
    downloadableItems.forEach((item) => {
      item.removeAttribute("is-downloadable");
    });

    // Disconnect observers
    if (TTDB.observers.browserObserver) {
      TTDB.observers.browserObserver.disconnect();
    }

    pipe("🧹 Cleanup complete:", {
      buttonsRemoved: buttons.length,
      itemsReset: downloadableItems.length,
    });
  };

  // Updates video items
  const updateItems = () => {
    let processed = 0;
    const allItems = selectAllVideoItems();

    pipe(`🔍 Checking ${allItems.length} items for download buttons...`);
    if (window.location.href.includes("/photo/")) {
      pipe("📸 Photo URL detected in address bar!");
    }

    allItems.forEach((item) => {
      let currentMode = null;
      let currentEnvironment = null;

      const modeElement = item.querySelector("div[mode]");

      if (modeElement) {
        currentMode = modeElement.getAttribute("mode");
        currentEnvironment = TTDB.ENV.APP;
      } else {
        const classList = item.classList;

        if (
          classList.contains("video-feed-item") ||
          classList.contains("three-column-item")
        ) {
          currentMode = TTDB.MODE.GRID;
        } else if (classList.contains("feed-item-content")) {
          currentMode = TTDB.MODE.FEED;
        } else if (
          classList.contains("browse-mode") ||
          classList.contains("video-card-big")
        ) {
          currentMode = TTDB.MODE.BROWSER;
        } else if (item.querySelector("div.tiktok-web-player > video")) {
          currentMode = TTDB.MODE.BASIC_PLAYER;
        } else if (
          item.querySelector('input[value*="/video/"]') ||
          item.querySelector('input[value*="/photo/"]')
        ) {
          currentMode = TTDB.MODE.SHARE_OVERLAY;
        }

        if (currentMode !== null) {
          currentEnvironment = TTDB.ENV.__NEXT;
        }
      }

      // Fallback: Check if item is on a /photo/ page or contains slideshow elements
      if (!currentMode && item.className.includes("-DivItemContainer")) {
        // Check if we're on a photo URL
        const isPhotoPage = window.location.href.includes("/photo/");
        const hasPhotoLink = !!item.querySelector('a[href*="/photo/"]');
        const hasSlideshowElements = !!item.querySelector(
          'div[data-e2e*="slide"], div[data-e2e*="photo"], img[data-e2e*="slide"], canvas[data-e2e*="slide"]'
        );

        if (isPhotoPage || hasPhotoLink || hasSlideshowElements) {
          // Treat as BROWSER mode (single item view)
          currentMode = TTDB.MODE.BROWSER;
          currentEnvironment = TTDB.ENV.APP;
          pipe("📸 Slideshow item detected via fallback check");
        }
      }

      if (currentMode) {
        // Set default environment if nothing has been detected
        if (currentEnvironment === null) {
          currentEnvironment = TTDB.DEFAULT_ENV;
        }

        pipe(`Processing item with mode: ${currentMode}`, {
          hasVideo: !!item.querySelector("video"),
          hasPhotoLink: !!item.querySelector('a[href*="/photo/"]'),
          classes: item.className,
        });

        // Data that we're sending downstream
        if (
          itemSetup.set(currentMode, item, {
            mode: currentMode,
            env: currentEnvironment,
            container: item,
          })
        ) {
          processed++;
        }
      } else {
        pipe("⚠️ No mode detected for item:", {
          classes: item.className,
          innerHTML: item.innerHTML.substring(0, 200),
        });
      }
    });

    return processed;
  };

  // Adds download buttons to video elements
  const updatePage = () => {
    const processedItems = updateItems();

    if (processedItems > 0) {
      pipe(
        `Processed ${processedItems} item${processedItems !== 1 ? "s" : ""}!`
      );
    }
  };

  /**
   * Simple debouncer
   */
  const debounce = (f, ms) => {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => f.apply(this, args), ms);
    };
  };

  const observeApp = (container) => {
    if (TTDB.observers.main) {
      TTDB.observers.main.disconnect();
    }

    const debouncedCallback = debounce((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          TTDB.setInterval(15);
          break;
        }
      }
    }, 2000);

    TTDB.observers.main = new MutationObserver(debouncedCallback);
    TTDB.observers.main.observe(container, { childList: true, subtree: true });

    pipe("Watching for DOM changes ...");
  };

  let appContainer = getAppContainer();

  if (appContainer) {
    observeApp(appContainer);
  } else {
    let checks = 0;

    TTDB.timers.appCreationWatcher = setInterval(() => {
      appContainer = getAppContainer();

      if (appContainer || checks === 10) {
        clearInterval(TTDB.timers.appCreationWatcher);

        if (appContainer) {
          observeApp(appContainer);
        }
      }
      checks++;
    }, 1000);
  }

  // Tracks and does item checks on the page
  setInterval(() => {
    if (TTDB.interval.counter > 0) {
      updatePage();
      TTDB.interval.counter--;
    }
  }, TTDB.interval.delay);

  // Create splash elements
  SPLASH.create();

  // Check for updates on `scroll`
  window.addEventListener(
    !UTIL.isChromium() ? "DOMMouseScroll" : "mousewheel",
    () => {
      clearTimeout(TTDB.timers.scrollBreak);
      TTDB.timers.scrollBreak = setTimeout(() => TTDB.setInterval(20), 250);
    }
  );

  // Check for updates on `click`
  window.addEventListener("click", () => TTDB.setInterval(10), {
    passive: true,
  });

  // Listen for URL changes (SPA navigation)
  const checkUrlChange = () => {
    const currentUrl = window.location.href;

    if (currentUrl !== TTDB.lastUrl) {
      pipe("🔄 URL changed from:", TTDB.lastUrl, "to:", currentUrl);

      // Clean up old buttons
      cleanupButtons();

      // Update last URL
      TTDB.lastUrl = currentUrl;

      // Trigger update with delay to allow DOM to settle
      setTimeout(() => {
        TTDB.setInterval(25);
        updatePage();
      }, 500);
    }
  };

  // Check for URL changes periodically
  setInterval(checkUrlChange, 500);

  // Also listen for popstate (browser back/forward)
  window.addEventListener("popstate", () => {
    pipe("🔙 Popstate event detected");
    checkUrlChange();
  });

  // Listen for pushState and replaceState
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    checkUrlChange();
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(this, args);
    checkUrlChange();
  };

  pipe("✅ Extension initialized with URL change detection");
})();

```

# manifest.json

```json
{
  "name": "SlidesCockpit - Slideshow Saver",
  "description": "One Click Saving Slideshows to your SlidesCockpit Account",
  "author": "SlidesCockpit",
  "manifest_version": 3,
  "version": "1.0.1",
  "icons": {
    "48": "48.png",
    "128": "128.png"
  },

  "background": {
    "service_worker": "service.js"
  },

  "content_scripts": [
    {
      "matches": ["https://www.tiktok.com/*", "https://tiktok.com/*"],
      "js": ["main.js"],
      "css": ["main.css"],
      "run_at": "document_idle"
    }
  ],

  "permissions": [
    "storage"
  ],

  "action": {
    "default_popup": "popup.html"
  }
}

```

# popup.css

```css
body
{
    color: #a3a3a3;
    background-color: #000000;
    border: 2px solid #181818;
    margin: 0px;
    position: relative;
    width: 320px;
    font-family: "Segoe UI", Tahoma, sans-serif;
    font-size: 75%;
    overflow: hidden;
}

body > div#version,
body > a#website
{
    visibility: hidden;
    color: #9f9f9f;
}

body > div#version
{
    position: absolute;
    top: 1px;
    right: 4px;
    pointer-events: none;
}

body > a#website
{
    transition: color 0.3s;
    -webkit-transition: color 0.3s;
    -moz-transition: color 0.3s;
    -o-transition: color 0.3s;

    position: absolute;
    top: 2px;
    left: 4px;
}

body > a#website:hover
{
    color: #666666;
}

body a.link
{
    color: #d3d3d3;
    transition: color 0.3s;
    -webkit-transition: color 0.3s;
    -moz-transition: color 0.3s;
    -o-transition: color 0.3s;
}

body a.link:hover
{
    color: #fff;
}

body > div.header
{
    user-select: none;
    text-align: center;
    letter-spacing: 1px;
    display: block;
    color: #d7d7d7;
    width: 320px;
    padding: 10px 4px 10px 4px;
    border-bottom: 1px solid #1e1e1e;
    background-color: #181818;
    font-size: 1.1em;
}

body > div.content
{
    padding: 10px;
}

body > div.content > div.category-divide
{
    user-select: none;
    background-color: #181818;
    color: #ffffff;
    border-top: 2px solid #272727;
    letter-spacing: 1px;
    border-bottom: 2px solid #272727;
    padding: 2px 0px 4px 10px;
    margin: 14px -12px 8px -12px;
    font-size: 1.1em;
}

body > div.content div.textbox-container input
{
    transition: border 0.3s;
    -webkit-transition: border 0.3s;
    -moz-transition: border 0.3s;
    -o-transition: border 0.3s;

    font-family: Consolas, monospace;
    border: 1px solid #2e2e2e;
    background-color: #000000;
    border-radius: 3px;
    margin-top: 10px;
    display: block;
    padding: 6px 8px;
    color: #ffffff;
    width: calc(100% - 18px);
}

body > div.content div.textbox-container input:focus,
body > div.content div.textbox-container input:focus-visible
{
    border: 1px solid #424242;
    outline: none;
}

body > div.content div.checkbox-container:not(:first-child)
{
    margin-top: 10px;
}

body > div.content div.checkbox-container > span
{
    padding-left: 22px;
    color: #6c6c6c;
}

body > div.content div.checkbox-container label
{
    display: block;
    padding-right: 10px;
    padding-left: 22px;
    text-indent: -22px;
    cursor: pointer;
    margin-bottom: 4px;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

body > div.content div.checkbox-container input
{
    vertical-align: middle;
}

body > div.content div.checkbox-container label > span
{
    vertical-align: middle;
    font-size: 110%;
}

body > button#settings-save
{
    transition: background-color 0.3s, color 0.3s;
    -webkit-transition: background-color 0.3s, color 0.3s;
    -moz-transition: background-color 0.3s, color 0.3s;
    -o-transition: background-color 0.3s, color 0.3s;

    background-color: #181818;
    color: #fff;
    margin: 4px;
    border-radius: 2px;
    cursor: pointer;
    display: block;
    border: none;
    color: #b8b8b8;
    padding: 5px 10px;
    width: calc(100% - 8px);
}

body > button#settings-save:hover
{
    background-color: #2a2733;
    color: #fff;
}
```

# popup.html

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="popup.css">
    <script src='popup.js'></script>
</head>
<body>
    <div class="header">SlidesCockpit - Slideshow Saver</div>

    <div class="content">
        <div class="category-divide">Personal Token</div>

        <div class="textbox-container">
            <span>Paste your personal SlidesCockpit token. Find it in the dashboard under Account &rarr; Chrome Extension.</span>
            <input type="text" id="tokenInput" placeholder="Enter token here" />
            <button id="saveBtn">Save</button>
        </div>
    </div>

    <div id="version"></div><a href="#" id="website" target="_blank">Website</a>
</body>
</html>

```

# popup.js

```js
document.addEventListener('DOMContentLoaded', () => {
const input = document.getElementById('tokenInput');
const saveBtn = document.getElementById('saveBtn');

// Laden des gespeicherten Tokens
chrome.storage.local.get(['slidescockpit-extension-token'], (result) => {
if (result['slidescockpit-extension-token']) {
input.value = result['slidescockpit-extension-token'];
}
});

saveBtn.addEventListener('click', () => {
const token = input.value.trim();
if (!token) {
alert('Please enter the token');
return;
}
chrome.storage.local.set({ "slidescockpit-extension-token": token }, () => {
if (chrome.runtime.lastError) {
console.error('Error saving token:', chrome.runtime.lastError);
alert('Failed to save token. See console.');
} else {
console.log('Token saved');
alert('Token saved successfully');
window.close(); // oder Feedback geben
}
});
});
});
```

# port.sh

```sh
#!/bin/bash

###########################################################
# Ports the Chrome extension to become Firefox compatible.#
###########################################################

TIMESTAMP=$(date +'%d_%m_%Y_%H-%M-%N')
OUTPUT="ff_port-$TIMESTAMP"

declare -a REQUIRES=(
    '48.png'
    '128.png'
    'main.css'
    'main.js'
    'popup.html'
    'popup.css'
    'popup.js'
    'service.js'
)

declare -a HAYSTACK=(
    'chrome.runtime'
    'chrome.storage'
    'chrome.downloads'
    'chrome.tabs'
)

declare -a REPLACE=(
    'browser.runtime'
    'browser.storage'
    'browser.downloads'
    'browser.tabs'
)

mkdir "$OUTPUT"

cp "./.ff_requires/manifest.json" "./$OUTPUT/manifest.json"

for FILE in "${REQUIRES[@]}"
do
    cp "./$FILE" "./$OUTPUT/$FILE"

    if [[ $FILE == *".js"  ||  $FILE == *".html" ]]
    then
        echo "Processing: $FILE"
        INDEX=0

        for SEARCH in "${HAYSTACK[@]}"
        do
            while IFS= read -r LINE || [ -n "$LINE" ]
            do
                echo "${LINE//$SEARCH/${REPLACE[INDEX]}}"
            done < "./$OUTPUT/$FILE" > "./$OUTPUT/temp_$FILE"

            rm "./$OUTPUT/$FILE"
            mv "./$OUTPUT/temp_$FILE" "./$OUTPUT/$FILE"

            ((INDEX=INDEX+1))
        done
    fi
done
```

# README.md

```md
<p align="center">
  <img src="./128.png">
</p>

<h1 align="center">TikTok Download Buttons</h1>

<p align="center">An addon that adds download buttons to the web version of TikTok</p>

---

I made this mostly for my own needs, but it's also published here:

* [Chrome Web Store](https://chrome.google.com/webstore/detail/tiktok-download-buttons/kcnchleajedobajlpgkcinfcdmdnfejd)

* [Add-ons for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tiktok-download-buttons/)

---

## Watermarks

This addon will _attempt_ to use the API to download videos without the watermark. This may not always work because TikTok can change how this works and block the way of downloading.

By default it'll prioritize downloading from the API, but this can be turned off in the settings. If the addon detects that the API isn't responding correctly, it'll revert back to the fallbacks (with watermarks) and it'll try again with the API at a later time.

Once the API has failed, there will be a short "cooldown" for when it attempts to use it again. This cooldown can be reset by simply opening the menu and saving your options, or you can wait 15 minutes.

## Not working?

TikTok is known for changing their site often, something that may break the addon from time to time. If it isn't working, feel free to submit an issue (or a PR with a fix), and I'll look into it.

Keeping this addon updated is a priority as long as it's feasible.
```

# ruleset.json

```json
[{
    "id": 1, 
    "priority": 1, 
    "action": {
       "type": "modifyHeaders", 
       "requestHeaders": [{
            "header": "User-Agent",
            "operation": "set",
            "value": "Mozilla/5.0 (Linux; Android 10; SM-G973F Build/QQ3A.200805.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/85.0.4183.101 Mobile Safari/537.36 trill_2021806060 JsSdk/1.0 NetType/WIFI Channel/googleplay AppName/musical_ly app_version/18.6.6 ByteLocale/fr ByteFullLocale/fr Region/FR"
        },
        {
            "header": "Sec-Fetch-Dest",
            "operation": "set",
            "value": "document"
        },
        {
            "header": "Sec-Fetch-Mode",
            "operation": "set",
            "value": "navigate"
        },
        {
            "header": "Sec-Fetch-Site",
            "operation": "set",
            "value": "cross-site"
        },
        {
            "header": "referer",
            "operation": "remove"
        },
        {
            "header": "origin",
            "operation": "remove"
        }
        ]
    },
    "condition": {
        "urlFilter": "*://api22-normal-c-useast2a.tiktokv.com/*",
        "resourceTypes": ["main_frame", "xmlhttprequest"]
    }
}]
```

# service.js

```js
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

```

# TEMPLATE.md

```md
<h1 align="center">Templating</h1>
<p align="center">This page contains the current available templating options.</p>

## Usage
You can edit the naming template in the options menu of the addon (*pin it, then click on it*).

This only works when utilizing the API because the available data from non-API requests isn't sufficient enough to cover templating.

Example usage:

* `video_{uploader}_{uploaded_s}` → `video_randomusername_20230101_000000.mp4`
* `tiktokVideo_{nickname}_{desc}-{id}` → `tiktokVideo_Random Username_This is a description-7217247845525540139.mp4`

## Options

### `{uploader}`
* Uploader username (their `tiktok.com/@ID`)

### `{nickname}`
* Uploader display name

### `{signature}`
* Uploader signature (usually their profile description)

### `{uid}`
* Uploader ID

### `{desc}`
* Video description

### `{id}`
* Video ID

### `{region}`
* Video region  (**PS: This may not work correctly as of May 2024**)

### `{language}`
* Video language  (**PS: This may not work correctly as of May 2024**)

### `{uploaded}`
* A unix timestamp of when the video was uploaded

### `{uploaded_s}`
* A **readable** timestamp of when the video was uploaded

### `{timestamp}`
* A unix timestamp of when the video was downloaded

### `{timestamp_s}`
* A **readable** timestamp of when the video was downloaded

```

# TO_DO.md

```md
Ich hab’s: Dein Content-Script lädt den Token nur einmal aus chrome.storage.local und hört nur auf Änderungen im local-Bereich. Wenn dein Popup den Token (wie es oft vorkommt) in sync speichert oder unter einem anderen Key, sieht das Content-Script die Änderung nie. Zusätzlich holst du den Token im Klick-Handler nicht noch einmal frisch — dadurch bleibt TTDB.extensionToken leer ⇒ „Missing SlidesCockpit Token“.

3 konkrete Ursachen im Code 1. Nur local, kein sync-Fallback
In main.js:
• getStoredSetting/getExtensionToken lesen nur chrome.storage.local.
• chrome.storage.onChanged prüft areaName !== "local" und ignoriert sync. 2. Kein Re-Read beim Klick
Im downloadHook klick-Handler wird nur TTDB.extensionToken geprüft. Wenn das Content-Script vor dem Speichern geladen wurde (oder das onChanged nicht feuert), bleibt’s null. 3. Key-Mismatch möglich
Dein Code erwartet genau den Key
slidescockpit-extension-token.
Wenn dein Popup einen anderen Key verwendet (z. B. extensionToken), findet main.js nichts.

Minimaler Fix (robust, ohne Architekturumbau)

Füge diese Änderungen in main.js ein: 1. Universelles Lesen (local → sync-Fallback)

const EXTENSION_TOKEN_KEY = "slidescockpit-extension-token";

const getExtensionToken = async () => {
// 1) local
try {
const local = await chrome.storage.local.get(EXTENSION*TOKEN_KEY);
const v1 = local?.[EXTENSION_TOKEN_KEY];
if (typeof v1 === "string" && v1.trim()) return v1.trim();
} catch (*) {}

// 2) sync (Fallback)
try {
const sync = await chrome.storage.sync.get(EXTENSION*TOKEN_KEY);
const v2 = sync?.[EXTENSION_TOKEN_KEY];
if (typeof v2 === "string" && v2.trim()) return v2.trim();
} catch (*) {}

return null;
};

    2.	Auf beide Storage-Bereiche hören

chrome.storage.onChanged.addListener((changes, areaName) => {
if ((areaName === "local" || areaName === "sync") &&
Object.prototype.hasOwnProperty.call(changes, EXTENSION_TOKEN_KEY)) {
const v = changes[EXTENSION_TOKEN_KEY].newValue;
TTDB.extensionToken = (typeof v === "string" && v.trim()) ? v.trim() : null;
pipe("🔐 Extension token updated", { hasToken: !!TTDB.extensionToken, areaName });
}
});

    3.	Im Klick-Handler frisch nachladen (Fallback)

Suche im downloadHook den Klick-Handler und ersetze den Token-Zugriff so:

button.addEventListener("click", async (e) => {
e.preventDefault();
button.classList.add("loading");

const postUrl = button.dataset.postUrl;

// Fallback: token frisch laden, falls Cache leer/stale
let extensionToken = TTDB.extensionToken || (await getExtensionToken());

if (!postUrl) {
// ...
button.classList.remove("loading");
return;
}

if (!extensionToken) {
// ...
button.classList.remove("loading");
return;
}

// ... Request mit Authorization: Bearer ${extensionToken}
});

Prüfliste (damit es 100%ig greift)
• Stelle sicher, dass dein Popup exakt unter dem Key
slidescockpit-extension-token speichert:

chrome.storage.local.set({ "slidescockpit-extension-token": token });

(Oder wenn du sync bevorzugst, dann ändere das Content-Script wie oben, damit es beide Bereiche unterstützt.)

    •	Öffne auf einer TikTok-Seite die DevTools-Konsole (Content-Script-Kontext) und teste:

chrome.storage.local.get("slidescockpit-extension-token", console.log);
chrome.storage.sync.get("slidescockpit-extension-token", console.log);

Einer der beiden sollte den gespeicherten Token zeigen.

    •	Nach Re-Install / ID-Wechsel: Token neu speichern (anderes ID ⇒ anderer Storage-Namespace).

Mit diesen drei Code-Änderungen verschwindet „Missing SlidesCockpit Token“ zuverlässig, selbst wenn das Popup sync nutzt oder das Content-Script vor dem Speichern geladen wurde.

```

# zip.sh

```sh
#!/bin/bash

7z a "tiktok-download-buttons.zip" 48.png 128.png main.css main.js manifest.json popup.css popup.html popup.js service.js ruleset.json

```

