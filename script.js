const body = document.querySelector("body");
const container = document.getElementById("container");
var squareSize = 16;

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

// 4 - button - div size
const btnGrid = document.getElementById("btnGrid");
btnGrid.textContent = "NEW GRID";
btnGrid.addEventListener("click", function () {
    do {
        squareSize = prompt("Define the number of squares per side for the new grid (<= 100): ");
        if (squareSize > 100) alert("The value should be <= 100");
        if (squareSize == null) return;
    } while (squareSize > 100 || squareSize < 1);
    container.textContent = "";
    gridStart(squareSize);
})
body.insertBefore(btnGrid, container);

// button - black color
const btnBlack = document.getElementById("btnBlack");
btnBlack.textContent = "BLACK PEN";
btnBlack.addEventListener("click", function () {
    changeColor(1);
})
body.insertBefore(btnBlack, container);

// button - rainbow color
const btnRainbow = document.getElementById("btnRainbow");
btnRainbow.textContent = "RAINBOW PEN";
btnRainbow.addEventListener("click", function () {
    changeColor(2);
})
body.insertBefore(btnRainbow, container);

// button - shading
const btnShading = document.getElementById("btnShading");
btnShading.textContent = "SHADING PEN";
btnShading.addEventListener("click", function () {
    changeColor(3);
})
body.insertBefore(btnShading, container);

// button - clean grid
const btnClean = document.getElementById("btnClean");
btnClean.textContent = "CLEAN";
btnClean.addEventListener("click", function () {
    container.textContent = "";
    gridStart(squareSize);
})
body.insertBefore(btnClean, container);

// switch color function
function changeColor(color) {
    let squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        let newSquare = squares[i].cloneNode(true);
        squares[i].parentNode.replaceChild(newSquare, squares[i]);
        newSquare.addEventListener("mouseover", function () {
            switch (color) {
                case 1:
                    this.style.backgroundColor = "black";
                    this.style.opacity = 1;
                    break;
                case 2:
                    this.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                    this.style.opacity = 1;
                    break;
                case 3:
                    this.style.backgroundColor = "black";
                    if (this.style.opacity < 1) {
                        this.style.opacity = +this.style.opacity + 0.1;
                    }
                    break;
            }
        })
    }
}

// START
gridStart();