chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const activeTab = tabs[0];
  // Use the full URL from the active tab, including the protocol
  const fullUrl = activeTab.url;
  
  // Concatenate the shacklefree.in domain with the full URL from the active tab
  const shackleFreeUrl = `https://www.shacklefree.in/${fullUrl}`;
  
  // Open the new combined URL in a new tab
  chrome.tabs.create({ url: shackleFreeUrl });
});
