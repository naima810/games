const patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
let boxes = document.querySelectorAll(".box");
let msgJS = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new");
let reviewBtn = document.querySelector(".review");
let TurnX = document.querySelector("#Xturn")
let TurnO = document.querySelector("#Oturn");
let scoreX = document.querySelector(".x-score");
let scoreO = document.querySelector(".O-score");

let x = 0;
let o = 0;
let turnO;
let count = 0;
TurnX.addEventListener("click", () =>{
    turnO = false;
    TurnX.disabled = true;
    TurnO.disabled = true;
});
TurnO.addEventListener("click" , () =>{
    turnO= true;
    TurnO.disabled = true;
    TurnX.disabled = true;
});
boxes.forEach((box) =>
{
     
    box.addEventListener("click", ()=> {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            msg.innerText = "Draw";
            msgJS.classList.remove("hide");
        }
    });
   
});
const checkWinner = () =>{
for (let pattern of patterns){
 let val1 = boxes[pattern[0]].innerText;
 let val2 = boxes[pattern[1]].innerText;
 let val3 = boxes[pattern[2]].innerText;

 if (val1 !="" && val2 !="" && val3 !=""){
    if(val1 ===val2 && val2 === val3){
        console.log(val1);
        winScreen(val1);
        scorex(val1);
        scoreo(val1);
        return true;
        
    }
 }
}
};
const winScreen = (winner) =>{
    msg.innerText = `congratulation player ${winner}`;
    msgJS.classList.remove("hide");
    disableBox();
};
const scorex = (val1) =>{
    if(val1 === "X"){
        x++;
        scoreX.innerText = x;
    }
    };
const scoreo = (val1) =>{
    if(val1 === "O"){
        o++;
        scoreO.innerText = o;
    } 
    };
    

const disableBox = () => {
    for (box of boxes){
        box.disabled = true;
    }
};
const enableBox = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
resetBtn.addEventListener("click",() =>{
    enableBox();
    count = 0;
    msgJS.classList.add("hide");
    turnO = true;
    TurnO.disabled = false;
    TurnX.disabled = false;
});
newBtn.addEventListener("click", () =>{
    enableBox();
    count =0;
    msgJS.classList.add("hide");
    turnO = true;
    TurnO.disabled = false;
    TurnX.disabled = false;
});
reviewBtn.addEventListener("click", () =>{
    msgJS.classList.add("hide");
    turnO = true;
});