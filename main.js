const container = document.querySelector('#container');
let square;
let target; 
let currentColor = "black";


function promptSize() {
    let number = prompt("Choose a grid size between 1-75 for your sketchpad", 16); 
     if (number >= 1 && number <= 75) {
        alert(`${number}`)
     }else {
         do {number = prompt("Invalid input. Provide a number between 1-75 plese.");
         }
         while(number < 1 || number > 75);
         //this loop makes it so that the user will be trapped with further prompts until they provide one in an acceptable range. 
         alert(`${number}`)

     }
 }





promptSize();