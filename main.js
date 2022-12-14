const container = document.querySelector('#container');
let square;
let target; 
let currentColor = "black";


function promptSize() {
    let number = prompt("Choose a grid size between 1-75 for your sketchpad", 16); 
     if (number >= 1 && number <= 75) {
        generateGrid (number);
     }else {
         do {number = prompt("Invalid input. Provide a number between 1-75 plese.");
         }
         while(number < 1 || number > 75);
         //this loop makes it so that the user will be trapped with further prompts until they provide one in an acceptable range. 
         generateGrid (number);

     }
 }

 function generateGrid(gridSize) {
    //sends data from function call to the variables set up in the CSS root
    //find the container ID and modify the --rows property and set it to the number of rows we want to make
    //once they take our arg to the CSS var, the actual column and rows are generated in CSS.
    
    container.style.setProperty('--rows', gridSize); 
    container.style.setProperty('--columns', gridSize); 
    for (let i = 0; i < gridSize; i++) {
        makeSquares(gridSize);
    }
}


function makeSquares (squareNumber) {
    for (let i = 0; i < squareNumber; i++) {
        square = document.createElement('div');
        //adding this square class to each div will make it targetable by changeColor and will allow us to style them with CSS before they even exist. 
        square.classList.add('square');
        container.appendChild(square);
    }
}




//change color when mouse overs over square 
function changeColor (target) {
    
    target.style.backgroundColor = `${currentColor}`;
}

//use function(e) to set "target" to the specific item that was targeted by the mouse. 
//now target == the div that was just hovered over
container.addEventListener("mouseover", function (e) {
    target = e.target;

    //only change the color if the element you moused-over is a div with a square class
    if (target.matches("div.square")) {
        changeColor(target);
    }
});

//reset button
const reset = document.querySelector('#reset-button');
//map an inline function to the reset button that will refresh the page and therefore prompt the player again.
reset.addEventListener('click', function(){
     location.reload();
     
});

//black button
const black = document.querySelector('#black-button');
black.addEventListener('click', function(){
     
     currentColor = "black";
});

//red button
const red = document.querySelector('#red-button');
red.addEventListener('click', function(){
     
     currentColor = "red";
});

//blue button
const blue = document.querySelector('#blue-button');
blue.addEventListener('click', function(){
     
     currentColor = "blue";
});


promptSize();