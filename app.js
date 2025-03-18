let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newBtn");
let msgc= document.querySelector(".msg-c");
let msg= document.querySelector("#msg");

let count=0;
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enablebox();
    msgc.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //player O
        if (turnO === true) {
            box.innerText = "O";
            turnO = false
        }
        //player X
        else {
            box.innerText = "X";
            turnO = true;
        }
        
        box.disabled = true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw=()=>{
    msg.innerText=`Game was a draw.`
    msgc.classList.remove("hide");
    disablebox();
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(Winner)=>{
msg.innerText=`Congratulations, Winner is ${Winner}`;
msgc.classList.remove("hide");
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;

        if (pos0val != "" && pos1val != "" && pos2val != "") {
            if (pos0val === pos1val && pos1val === pos2val) {
                showWinner(pos0val);
                disablebox();
            }
        }
    }
};
reset.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);