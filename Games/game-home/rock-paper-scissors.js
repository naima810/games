const selects = document.querySelectorAll(".select");
let yourScore = document.querySelector(".wescore");
let compScore = document.querySelector(".youscore");
let para = document.querySelector(".btn")
let userScore = 0;
let compScores = 0;

let userWin = true;
selects.forEach((select) => {
    select.addEventListener("click", () => {
        const userChoice = select.getAttribute("Id");
        playGame(userChoice);
    });
});
const genComp = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
};
const playGame = (userChoice) => {
    let compChoice = genComp();
    console.log(compChoice);
    if (userChoice === compChoice) {
        para.innerText = "It's Draw. Play Again";
        para.style.backgroundColor = "blue";
    }
    else {
        if (userChoice === "Rock") {
            //comp choice Scissors and Paper
            if (compChoice === "Scissors") {
                para.innerText = `your ${userChoice} beats the ${compChoice}`;
                para.style.backgroundColor = "green";
                userWin = false;
                userScore++;
                yourScore.innerText = userScore;
            }
            else {
                para.innerText = `your ${userChoice} lost from  ${compChoice}`;
                para.style.backgroundColor = "red";
                userWin = true;
                compScores++;
                compScore.innerText = compScores;
            }
        }
        else if (userChoice === "Scissors") {
            //comp choice Scissors and Paper
            if (compChoice === "Rock") {
                para.innerText = `your ${userChoice} lost the ${compChoice}`;
                para.style.backgroundColor = "green";
                userWin = false;
                userScore++;
                yourScore.innerText = userScore;
            }
            else {
                para.innerText = `your ${userChoice} beat from  ${compChoice}`;
                para.style.backgroundColor = "red";
                userWin = true;
                compScores++;
                compScore.innerText = compScores;
            }
        }
        else {
            //comp choice Scissors and Paper
            if (compChoice === "Scissors") {
                para.innerText = `your ${userChoice} lost from ${compChoice}`;
                para.style.backgroundColor = "red";
                userWin = false;
                compScores++;
                yourScore.innerText = userScore;
            }
            else {
                para.innerText = `your ${userChoice} beats the ${compChoice}`;
                para.style.backgroundColor = "green";
                userWin = true;
                userScore++;
                compScore.innerText = compScores;
            }
        }
    }

};
// if(userWin){
//      ;
//     yourScore.innerText = yourScore;
// }