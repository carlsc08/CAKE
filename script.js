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
        alert(selection);
    } else {
        alert("i am sad! i found no selection :(");
    }
}
