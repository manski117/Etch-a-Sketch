let board = document.querySelector('.board');
board.getElementsByClassName.gridTemplateColumns = "repeat(16, 1fr)";
board.getElementsByClassName.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i < 256; i++){
    //loops 256 (16x16) times to make a grid of divs
    let square = document.createElement("div");
    square.style.backgroundColor = "green";
    //inserts the divs starting in the board class element
    board.insertAdjacentElement("beforeend", square);
}