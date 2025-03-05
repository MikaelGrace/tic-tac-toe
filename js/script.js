const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
const buttons = document.querySelectorAll(".gameboard button");
const letterX = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon1"><title>alpha-x</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" /></svg>`;
const letterO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon2"><title>circle-outline</title><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`;


let currentPlayer = "X";


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const [row, col] = e.target.id.split("-").map(Number);

        if (!board[row][col]) {
            board[row][col] = currentPlayer;
            e.target.innerHTML = currentPlayer === "X" ? letterX : letterO;
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
        //button.textContent = "";
        button.innerHTML = "";
    });
    currentPlayer = "X";
}


