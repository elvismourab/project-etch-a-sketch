const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);

//Create square div's inside container div
let windowHeight = Math.floor(window.innerHeight / 16);
let windowWidth = Math.floor(window.innerWidth / 16);

for (let i = 0; i <= windowHeight; i++) {
    for (let j = 0; j <= windowWidth; j++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);
    }
}

// Mouse move event - paint
const mouseMove = document.getElementsByClassName("square");
for (i = 0; i < mouseMove.length; i++) {
    mouseMove[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = "black";
    })
}