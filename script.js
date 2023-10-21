document.getElementById("run").onclick = getCurrentTabURL();

async function getCurrentTabURL() {
    let queryOptions = {active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab == 'undefined'){
        throw "no current tab";
    }
    let youurl = "https://you.com/search?q=summarize+" + tab.url;
    console.log("here: " + youurl);
}

function getHtml(url){
  
}

/*
 "content_scripts": [{
    "matches": ["<all_urls>"],
        "all_frames": true,
        "js": ["content_scripts.js"]
  }],
  */