
const buttonPress = e =>{
    //takes in the id of the button that was pressed.
    let buttonID = e.target.id;
    console.log(buttonID);
    alert(`button ${buttonID} was pressed`)
}

//get all buttons and make them listen for a click to run a function
let buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", buttonPress));