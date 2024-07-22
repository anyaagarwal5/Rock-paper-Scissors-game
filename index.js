const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playAgainButton = document.getElementById("playAgainButton");

let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

function playGame(playerChoice) {
    if (playerScore >= maxScore || computerScore >= maxScore) {
        return; 
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "YOU WIN!";
        playerScore++;
    } else {
        result = "COMPUTER WINS!";
        computerScore++;
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
    resultDisplay.textContent = result;

    // Remove any previous result classes
    resultDisplay.classList.remove("greenText", "redText");

    switch (result) {
        case 'YOU WIN!':
            resultDisplay.classList.add("greenText");
            break;
        case 'COMPUTER WINS!':
            resultDisplay.classList.add("redText");
            break;
    }

    playerScoreDisplay.textContent = `PLAYER SCORE: ${playerScore}`;
    computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;

    if (playerScore >= maxScore || computerScore >= maxScore) {
        resultDisplay.textContent = "GAME OVER! " + result;
        playAgainButton.style.display = "block";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";
    resultDisplay.textContent = "IT'S A TIE!";
    resultDisplay.classList.remove("greenText", "redText");
    playerScoreDisplay.textContent = "PLAYER SCORE: 0";
    computerScoreDisplay.textContent = "COMPUTER SCORE: 0";
    playAgainButton.style.display = "none";
}
