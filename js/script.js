const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

let currentPlayer = "X";

function placeChoice (row, col) {

}

const buttons = document.querySelectorAll(".gameboard button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const [row, col] = e.target.id.split("-").map(Number);

        if (!board[row][col]) {
            board[row][col] = currentPlayer;
            e.target.textContent = currentPlayer;
        }

        if (checkWin(currentPlayer)) {
            alert(`${currentPlayer} Wins!`);
            resetBoard();
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});

function checkWin(player) {
    //check rows and columns

    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }

        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
        
    }

    //check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }

    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }

    return false;
}

function resetBoard() {
    board.forEach((row, i) => {
        row.forEach((j) => {
            board[i,j] = null
        });
    });

    buttons.forEach((button) => {
        button.textContent = "";
    });
    currentPlayer = "X";
}


function playRound(humanChoice, computerChoice) {

    //console.log("human choice: " + humanChoice());
    
    if (humanChoice() === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        humanChoicePara.style.backgroundColor = "green";
        computerChoicePara.style.backgroundColor = "red";
    }

    else if (humanChoice() === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        humanChoicePara.style.backgroundColor = "green";
        computerChoicePara.style.backgroundColor = "red";
    }

    else if (humanChoice() === "paper" && computerChoice === "rock") {
        humanScore += 1;
        humanChoicePara.style.backgroundColor = "green";
        computerChoicePara.style.backgroundColor = "red";
    }

    else if (computerChoice === "rock" && humanChoice() === "scissors") {
        computerScore += 1;
        computerChoicePara.style.backgroundColor = "green";
        humanChoicePara.style.backgroundColor = "red";
    }

    else if (computerChoice === "scissors" && humanChoice() === "paper") {
        computerScore += 1;
        computerChoicePara.style.backgroundColor = "green";
        humanChoicePara.style.backgroundColor = "red";
    }

    else if (computerChoice === "paper" && humanChoice() === "rock") {
        computerScore += 1;
        computerChoicePara.style.backgroundColor = "green";
        humanChoicePara.style.backgroundColor = "red";
    }

    else if (computerChoice === humanChoice()) {
        computerChoicePara.style.backgroundColor = "grey";
        humanChoicePara.style.backgroundColor = "grey";
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // console.log("Human score is: " + humanScore);
    // console.log("Computer score is: " + computerScore);

    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent = 0;
        // choicesDiv.removeChild(computerChoicePara);
        // choicesDiv.removeChild(humanChoicePara);
        //choicesDiv.remove();
        winnerDisplay.textContent = ("Human is the winner");
        choicesDiv.appendChild(winnerDisplay);

        //alert ("Human is the winner");
    }
    
    else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = 0;
        computerScoreDisplay.textContent = 0;
        // choicesDiv.removeChild(computerChoicePara);
        // choicesDiv.removeChild(humanChoicePara);
        //choicesDiv.remove();

        winnerDisplay.textContent = ("Computer is the winner");
        choicesDiv.appendChild(winnerDisplay);

        //alert("Computer is the winner");
    }


}

const computerChoicePara = document.createElement("p");
function getComputerChoice () {
    
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length);

    computerChoicePara.textContent = "Computer choice is " + choices[randomNumber];
    choicesDiv.appendChild(computerChoicePara);
    return choices[randomNumber];

}

const humanChoicePara = document.createElement("p");
function getHumanChoice (choice) {
    
    
    humanChoicePara.textContent = "Human choice is " + choice;

    choicesDiv.appendChild(humanChoicePara);
    return () => choice;

    
}