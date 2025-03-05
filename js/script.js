const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

let currentPlayer = "X";

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

// function resetBoard() {
//     board.forEach((row, i) => {
//         row.forEach((j) => {
//             board[i,j] = null
//         });
//     });

//     buttons.forEach((button) => {
//         button.textContent = "";
//     });
//     currentPlayer = "X";
// }


