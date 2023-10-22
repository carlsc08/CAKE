chrome.action.onClicked.addListener(async (tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: [ "script.js" ],
    });

    chrome.sidePanel.open({ tabId: tab.id });
    chrome.sidePanel.setOptions({
        tabId: tab.id,
        path: 'sidepanel.html',
        enabled: true
      });
});