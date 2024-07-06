const gridContainer = document.querySelector("#gridContainer");

const dimension = 640;

//HOVER EFFECT:
function hoverEffect() {
    const allSquares = document.querySelectorAll("#square");
    //iterate through all squares
    allSquares.forEach((div) => {
        //add listener
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });
    });
}

//create each square
function getSquare() {
    const square = document.createElement("div");
    square.setAttribute("id", "square");
    gridContainer.appendChild(square);
    return square;
}

//DEFAULT 16x16 GRID:
for (i = 0; i < (16*16); i++) {
    getSquare();
}
hoverEffect();

//NEW GRID BUTTON:
const button = document.querySelector("button");
button.addEventListener("click", () => {
    //receive new number of squares in num
    let flag = 0;
    let num = 0;
    while (flag == 0) {
        num = prompt("How many squares per side? (Input a number, maximum 100)");
        if (num >= 1 && num <= 100) {
            flag = 1;
        }
        else {
            alert("Must be positive a number less than or equal to 100");
        }
    }

    //clear existing grid
    gridContainer.innerHTML = "";

    //create new grid with dimensions num x num in set container dimension=640x640px
    for (i = 0; i < (num*num); i++) {
        let newSquare = getSquare();
        newSquare.style.height = newSquare.style.width = (dimension/num).toString() + "px";
    }

    //enable hover effect for the new grid
    hoverEffect();
});



