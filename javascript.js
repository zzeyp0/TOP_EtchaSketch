const gridContainer = document.querySelector("#gridContainer");

const dimension = 640;

//DEFAULT 16x16 GRID:
function getSquare() {
    const square = document.createElement("div");
    //square.classList.toggle("square");
    square.setAttribute("id", "square")
    gridContainer.appendChild(square);
}

for (i = 0; i < (16*16); i++) {
    getSquare();
}


//HOVER EFFECT:
const allSquares = document.querySelectorAll("#square");
//iterate through all squares
allSquares.forEach((div) => {
    //add listener
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
});

//NEW GRID BUTTON:
const button = document.querySelector("button");
let num = prompt("")
