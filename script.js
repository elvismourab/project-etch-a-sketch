const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);

/* const square = document.createElement("div");
square.setAttribute("class", "square");
container.appendChild(square);

for (let i = 0; i <= 4276; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    container.appendChild(square);
} */

const childHeight = 16;
const childWidth = 16;

let numChildHeight = Math.floor(container.offsetHeight / childHeight); console.log(numChildHeight);
let numChildWidth = Math.floor(container.offsetWidth / childWidth); console.log(numChildWidth);

for (let i = 0; i <= numChildHeight; i++) {
    for (let j = 0; j <= numChildWidth; j++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);
    }
}