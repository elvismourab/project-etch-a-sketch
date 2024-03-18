const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);

//Create square div's inside container div
let containerHeight = Math.floor(container.offsetHeight / 16);
let containerWidth = Math.floor(container.offsetWidth / 16);

for (let i = 0; i <= containerHeight; i++) {
    for (let j = 0; j <= containerWidth; j++) {
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

// 4 - button / div size
const btn = document.createElement("button");
btn.textContent = "NEW GRID";
btn.setAttribute("class", "newGrid");
body.prepend(btn);