const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);

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

//
/* let count = 0;

do {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    
/*     square.style.height = (container.offsetHeight / 16) + "px";
    square.style.width = (container.offsetWidth / 16) + "px";
    
    container.appendChild(square);
    count++;
} while (count <= 256); // 16 * 16 */