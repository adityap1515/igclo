document.addEventListener("DOMContentLoaded", function() {
    let userScore = 0;
    let compScore = 0;
    let userWin = true;

    const userScoreBoard = document.querySelector("#userScoreb");
    const compScoreBoard = document.querySelector("#compScoreb");
    

    const choices = document.querySelectorAll(".choice button");

    const genCompChoice = () => {
        const options = ["rock", "paper", "scissor"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    }
    const drawGame = () => {
        console.log("game was draw");
        msg.innerText = "Draw!!!";
        msg.style.backgroundColor = "yellow";
    }

    const showWinner = () => {
        if (userWin) {
            userScore++;
            userScoreBoard.innerText = userScore;
            console.log("you win!");
            msg.innerText = "you win!";
            msg.style.backgroundColor = "green";
        }
        else {
            compScore++;
            compScoreBoard.innerText = compScore;
            console.log("you lose!")
            msg.innerText = "you lose!";
            msg.style.backgroundColor = "red"
        }
    }


    const playGame = (choiceId) => {
        console.log("user choice =", choiceId);
        const compChoice = genCompChoice();
        console.log("comp choice = ", compChoice);
        if(choiceId === compChoice){
            drawGame();
        } else {
            if (choiceId === "rock") {
                userWin = compChoice === "paper" ? false : true;
            }
            else if (choiceId === "paper") {
                userWin = compChoice === "scissors" ? false : true;

            } 
            else {
                userWin = compChoice === "rock" ? false : true;

            }
            showWinner(userWin);
        }
    }

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const choiceId = choice.getAttribute("id");
            playGame(choiceId);
        });
    });
});
