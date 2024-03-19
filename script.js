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
function paintBlack() {
    const mouseMove = document.getElementsByClassName("square");
    for (i = 0; i < mouseMove.length; i++) {
        mouseMove[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = "black";
        })
    }
}

// 4 - button / div size
const btnGrid = document.createElement("button");
btnGrid.textContent = "NEW GRID";
btnGrid.addEventListener("click", function () {
    let squareSize = 16;
    do {
        squareSize = prompt("Define the number of squareSize per side for the new grid (<= 100): ");
        if (squareSize > 100) alert("The value should be <= 100");
    } while (squareSize > 100);

    //container.innerHTML = "";
    container.textContent = "";
    gridStart(squareSize);
    paintBlack();
})

body.prepend(btnGrid);

// button - random color
const btnRandom = document.createElement("button");
btnRandom.textContent = "RAINBOW";
btnRandom.addEventListener("click", function () {
    const mouseMove = document.getElementsByClassName("square");
    for (i = 0; i < mouseMove.length; i++) {
        mouseMove[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        })
    }
})

body.insertBefore(btnRandom, container);

// START
gridStart();
paintBlack();

//extra-credit
for (i = 0; i <= 5; i++) {
    console.log('#'+(Math.random()*0xFFFFFF<<0).toString(16));
}