// Write your code here!
let element = document.querySelector("main");

element.remove();

let newHeader = document.createElement("h1");
newHeader.id = 'victory';

document.body.appendChild(newHeader.innerHTML = 'Ari is the champion');