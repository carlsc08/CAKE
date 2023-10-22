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
    var myHello = window.open("hello.html", "hello");
    for (let [key, value] in map){
        myHello.document.write("**" + key + "**: " + hashMap[key] + "<br>");
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

/**
 * @param {selection} holds what user had highlighted when they clicked on the extension
 */
function main(selection){
    if (selection){
        //query

        //display query result in sidepanel
        const str = `* **Quantum Electrodynamics (QED)**:  A relativistic quantum field theory that describes all electromagnetic interactions. [Wikipedia](https://en.wikipedia.org/wiki/Quantum_electrodynamics) 
        * **Electron self-energy**: The energy of the interaction of an electron with its own electromagnetic field. [Wikipedia](https://en.wikipedia.org/wiki/Electron_self-energy) 
        * **Vacuum zero-point energy**: The lowest possible energy of the electromagnetic field in the vacuum state. [Wikipedia](https://en.wikipedia.org/wiki/Vacuum_energy) 
        * **Photon**: A massless, neutral elementary particle that is the quantum of the electromagnetic field. [Wikipedia](https://en.wikipedia.org/wiki/Photon) 
        * **Momentum**: The product of an object's mass and velocity. [Wikipedia](https://en.wikipedia.org/wiki/Momentum) 
        * **Infinitesimal**: A quantity that is smaller than any finite quantity. [Wikipedia](https://en.wikipedia.org/wiki/Infinitesimal) 
        * **Renormalization**: A mathematical procedure that removes infinities from quantum field theories. [Wikipedia](https://en.wikipedia.org/wiki/Renormalization) 
        * **Relativistic invariance**: The property of a theory that is invariant under Lorentz transformations. [Wikipedia](https://en.wikipedia.org/wiki/Relativistic_invariance) 
        * **S-matrix theory**: A theory that describes the relationships between a small number of observables in an interaction. [Wikipedia](https://en.wikipedia.org/wiki/S-matrix_theory) 
        * **Observables**: Quantities that can be measured in an experiment. [Wikipedia](https://en.wikipedia.org/wiki/Observable) 
        * **Action-at-a-distance**: A theory that proposes that particles can interact with each other instantaneously, even if they are separated by a distance. [Wikipedia](https://en.wikipedia.org/wiki/Action-at-a-distance) 
        * **Lamb shift**: The minute difference in the 2S1/2 and 2P1/2 energy levels of the hydrogen atom. [Wikipedia](https://en.wikipedia.org/wiki/Lamb_shift) 
        `; //CHANGE TO EQUAL QUERY RESULT
        const map = stringToMap(str);
        displayKeywords(map);
        
    } else {
        // var span = document.getElementById("body"); 
        // span.innerText = "It looks like you didn't select anything. Please select a portion of the webpage and reclick on the extension.";
        
        
    }
}