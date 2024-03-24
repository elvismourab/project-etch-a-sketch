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

// 4 - button - div size
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

})

body.insertBefore(btnGrid, container);

// button - black color
const btnBlack = document.createElement("button");
btnBlack.textContent = "BLACK PEN";
btnBlack.addEventListener("click", function() {
    changeColor(1);
})

body.insertBefore(btnBlack, container);

// button - random color
const btnRandom = document.createElement("button");
btnRandom.textContent = "RAINBOW PEN";
btnRandom.addEventListener("click", function () {
    changeColor(2);
})

body.insertBefore(btnRandom, container);

// button - darkening
const btnDarkening = document.createElement("button");
btnDarkening.textContent = "DARKENING PEN";
btnDarkening.addEventListener("click", function() {
    changeColor(3);
})

body.insertBefore(btnDarkening, container);


// START
gridStart();

// switch color function
function changeColor(color) {
    const mouseMove = document.getElementsByClassName("square");
    for (let i = 0; i < mouseMove.length; i++) {
        mouseMove[i].addEventListener("mouseover", function() {
            switch(color) {
                case 1 :
                    this.style.backgroundColor = "black";
                    break;
                case 2 :
                    this.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                    break;
                case 3 :
                    this.style.backgroundColor = "black";
                    if (this.style.opacity <= 0.9) {
                        this.style.opacity = +this.style.opacity + 0.1;
                    }
                    break;
            }
        })
    }
}