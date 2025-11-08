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