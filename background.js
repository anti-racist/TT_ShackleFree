chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getTabInfo") {
    // Get the current tab and send back the tab information to the popup
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      sendResponse({ url: activeTab.url });
    });
    return true; // Indicates we want to send a response asynchronously
  } else if (request.action === "openNewTabWithUrl") {
    // Open a new tab with the shacklefree URL
    const shackleFreeUrl = `https://www.shacklefree.in/${encodeURIComponent(request.url)}`;
    chrome.tabs.create({ url: shackleFreeUrl });
  }
});
