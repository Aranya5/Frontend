let choices = document.querySelectorAll(".choices");
let msg = document.querySelector(".msgBox");
let userScore = document.querySelector("#userPoint");
let compScore = document.querySelector("#compPoint");


let userPoint = 0;
let compPoint = 0;



const getCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const chId = Math.floor(Math.random()*3);
    return options[chId];
}

const gameDraw = () => {
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userPoint++;
        msg.innerText = `YOU WIN! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
        userScore.innerText = userPoint;
    }else {
        compPoint++;
        msg.innerText = `YOU LOST! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
        compScore.innerText = compPoint;
    }

}

const playGame = (userChoice) => {
    let compChoice = getCompChoice();

    if(userChoice === compChoice){
        gameDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = (compChoice === "rock" ? false : true);
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    }) 
});