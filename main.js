
function buttonPress(buttonID){
    alert(`button ${buttonID} was pressed`)
}


let buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", buttonPress));