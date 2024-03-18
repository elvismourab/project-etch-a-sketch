// create parent div
const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

// 2. 16x16 grid
for (let i = 0; i < 16; i ++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.boxSizing = "border-box";
        
        square.style.height = (container.offsetHeight / 16) + "px";
        square.style.width = (container.offsetWidth / 16) + "px";
        
        container.appendChild(square);
    }
}

// 3. Mouse move event - paint
const mouseMove = document.getElementsByClassName("square");
for (i = 0; i < mouseMove.length; i++) {
    mouseMove[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = "black";
    })
}