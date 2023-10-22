createFloatingDiv();

function createFloatingDiv() {
    const floatingDiv = document.createElement('div');
    floatingDiv.style.position = 'absolute';
    floatingDiv.style.top = '50px';
    floatingDiv.style.left = '50px';
    floatingDiv.style.width = '200px';
    floatingDiv.style.height = '200px';
    floatingDiv.style.backgroundColor = 'white';
    floatingDiv.style.border = '1px solid black';
    document.body.appendChild(floatingDiv);
  
    setTimeout(() => {
      floatingDiv.style.display = 'block';
    }, 5000);
  }
  
  chrome.browserAction.onClicked.addListener(createFloatingDiv);

  function showPopup() {
    const popup = document.createElement('div');
    popup.textContent = 'This is a popup!';
    document.body.appendChild(popup);
  }
  
  setTimeout(showPopup, 5000);
  
function stringToHashMap(str) {
    let stringsMap = new Map();
    let lines = str.split(/\r?\n/);
    for (let i = 0; i < 2*(lines.length-1); i+=2) {
        let substrings = str.split('**');
        substrings.shift();
        stringsMap.set(substrings[i], substrings[i+1]);
    }
    console.log(stringsMap)
}
