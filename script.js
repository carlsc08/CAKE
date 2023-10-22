getCurSelection();

function getCurSelection(){
    var text = "";
    if (window.getSelection()) {
        text = window.getSelection().toString();
    } else {
        text = "im sad. i couldnt find a selection! please make one!";
    }
    main(text);
}

/**
 * @param {selection} holds what user had highlighted when they clicked on the extension
 */
function main(selection){
    if (selection){
        //query

        //display query result
        const str = "weeee"; //CHANGE TO EQUAL QUERY RESULT
        const map = stringsToMap(str);
        displayKeywords(map);

        //open popup
        createFloatingDiv();
        window.open({
            type: 'popup',
            url: 'hello.html',
            width: 400,
            height: 600
        });
    } else {
        alert("i am sad! i found no selection :(");
    }
}

function stringToMap(str) {
    let stringsMap = new Map();
    let lines = str.split(/\r?\n/);
    for (let i = 0; i < 2*(lines.length-1); i+=2) {
        let substrings = str.split('**');
        substrings.shift();
        stringsMap.set(substrings[i], substrings[i+1]);
    }
    return (stringsMap);
}

function displayKeywords(map){
    for (let [key, value] in map){
        //document.write("<p></p>");
    }
}

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
