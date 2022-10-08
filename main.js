//wait until the HTML and CSS are loaded before you run the javascript
document.addEventListener("DOMContentLoaded", function(){
    generateCanvas(16);
    console.log("dom content is loaded");
    
});

function generateCanvas(gridSize){
    //create the gridlines
    //divide canvas into A x A where A = the number provided by user
    let canvas = document.querySelector(".main-grid-container");
    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    alert("canvas should be generated");

    let divsTotal = (gridSize * gridSize);
    for(let i = 0; i < divsTotal; i++){
        let div = document.createElement("div");
        div.style.backgroundColor="blue";
        //this will allow our divs to change color when hovered over
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor="black";
        })

        canvas.insertAdjacentElement("beforeend", div);
    }
}

function selectSize(){
    //has the user type a number and returns that number, but only if it is between 0 and 100
    let userInput = prompt("What should be the size of the board?")
    let message = document.querySelector("#message")
    
    
    if (userInput == ""){
        message.innerText = "Please provide a number only";
    } else if(userInput < 0 || userInput > 100){
        message.innerText ="Please only provide a number between 1 and 100"
    } else {
        message.innerText =`You selected a ${userInput} x ${userInput} sized grid for your canvas`
        generateCanvas(userInput);
    } 

}






const buttonPress = e =>{
    //takes in the id of the button that was pressed.
    let buttonID = e.target.id;
    console.log(buttonID);
    alert(`button ${buttonID} was pressed`);
    switch(buttonID){
        case "modify-grid":
            
            selectSize();
            break;
        
        case "black":
            alert('you pressed black');
            break;

        case "red":
            alert('you pressed red');
            break;
        
        case "reset":
            alert('you pressed reset');
            break;
        
    }
}

//get all buttons and make them listen for a click to run a function
let buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", buttonPress));

