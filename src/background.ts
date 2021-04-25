/*
const openTab = (query?: string) => {
  if(query) {
    chrome.tabs.create({ url: `https://www.google.com/search?q=${query}` });
  }
}

chrome.runtime.onInstalled.addListener((): void => {
  chrome.contextMenus.create({
    id: "sample",
    title: "選択した文字列を検索する",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab): void => {
  chrome.tabs.sendMessage(tab.id, info.selectionText, null);
  // openTab(info.selectionText);
});
*/
// Listen to messages sent from other parts of the extension.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // onMessage must return "true" if response is async.
    let isResponseAsync = false;

    if (request.popupMounted) {
        console.log('eventPage notified that Popup.tsx has mounted.');
    }

    return isResponseAsync;
});
