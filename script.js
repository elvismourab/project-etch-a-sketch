// create parent div
const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

// 2. 16x16 grid
function gridStart(grid = 16) {

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");

            square.style.height = (container.offsetHeight / grid) + "px";
            square.style.width = (container.offsetWidth / grid) + "px";
            square.style.flex = `1 1 calc(100% / ${grid})`;

            fragment.appendChild(square);
        }

        container.appendChild(fragment);

    }
}

// 3. Mouse move event - paint
function paint() {
    const mouseMove = document.getElementsByClassName("square");
    for (i = 0; i < mouseMove.length; i++) {
        mouseMove[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = "black";
        })
    }
}

// 4 - button / div size
const btn = document.createElement("button");
btn.textContent = "NEW GRID";
btn.addEventListener("click", function () {
    let squareSize = 16;
    do {
        squareSize = prompt("Define the number of squareSize per side for the new grid (<= 100): ");
        if (squareSize > 100) alert("The value should be <= 100");
    } while (squareSize > 100);

    //container.innerHTML = "";
    container.textContent = "";
    gridStart(squareSize);
    paint();
})

body.prepend(btn);

// START
gridStart();
paint();