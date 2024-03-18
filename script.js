const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

/* const square = document.createElement("div");
square.setAttribute("id", "square");

square.style.height = (container.offsetHeight / 16) + "px";
square.style.width = (container.offsetWidth / 16) + "px";

container.appendChild(square); */

//
let count = 0;

do {
    const square = document.createElement("div");
    square.setAttribute("id", "square");
    
    square.style.height = (container.offsetHeight / 16) + "px";
    square.style.width = (container.offsetWidth / 16) + "px";
    
    container.appendChild(square);
    count++;
} while (count < 16); // 16 * 16