//1: CurrentPlayer = X
let CurrentPlayer = "x";
//2: Select all the boxes
const boxes = document.querySelectorAll(".box");
//3: When I cloick a box, I want something to happen
//When box is clicked
var resetbutton=document.querySelector(".reset");
var gameover = false; 
var message = document.querySelector(".win")
function checkWinner() {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
        [0, 4, 8], [2, 4, 6]  //diagonals
    ];

    for (let win of wins){
        let [a, b, c] = win;
        if (
            boxes[a].textContent &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[b].textContent === boxes[c].textContent
        ) {
            message.textContent = CurrentPlayer + " wins!"
            gameover = true;
            console.log(gameover);
            return;
        }
    }
    //Check for a tie(no empty cells)
    let isDraw = true;
    for (let box of boxes){
        if (box.textContent === "") {
            isDraw = false;
            break;

        }
    }
    if (isDraw) {
        message.textContent = "It's a Draw!";
        gameover = true;
    }
}
function boxClicked(event){
    if(gameover==true){
        return;
    }
    console.log("Clicked!")
    const cell=event.target;
    //Mark the cell
    if(cell.textContent!==""){
        return
    }
    cell.textContent=CurrentPlayer;
    checkWinner();
    if(CurrentPlayer=="x"){
        CurrentPlayer="o";
    }
    else{
        CurrentPlayer="x";
    }
}
function ResetGame(){
    gameover=false
    for(let box of boxes){
        box.textContent="";
    }
    message.textContent = " ";
}
for(let box of boxes){
    box.addEventListener("click", boxClicked);
}
resetbutton.addEventListener("click", ResetGame)
function win(){
    gameover=true;
    return;
}
