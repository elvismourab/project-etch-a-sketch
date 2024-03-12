const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);

const square = document.createElement("div");
square.setAttribute("class", "square");
container.appendChild(square);

/* for (let i = 0; i <= 1000; i++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    container.appendChild(square);
} */