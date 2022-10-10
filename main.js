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





promptSize();