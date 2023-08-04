// need to adjust to be a factory function
const gameBoard = (() => {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board.push("");
  }

  const getBoard = () => board;

  const getSymbol = (index) => {
    return board[index];
  };

  const player = (symbol) => {
    this.symbol = symbol;
    let score = 0;

    const getPlayerScore = () => score;

    const getSymbol = () => symbol;

    return { getPlayerScore, getSymbol };
  };

  const writeSymbol = (index, symbol) => {};

  const printBoard = () => {
    let row = [];
    let col = 0;

    for (i = 0; i < board.length; i++) {
      col++;
      row.push(board[i]);

      if (col % 3 === 0) {
        console.log(row);
        row = [];
      }
    }
  };

  return { getBoard, writeSymbol, getSymbol, printBoard };
})();

const gameController = (() => {
  const playerX = player("x");
  const playerY = player("y");

  const assignSymbol = (index, player) => {
    // given player and index, assign symbol
  };

  const winConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  const checkWinner = (board) => {
    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // returns winning symbol
      }
    }
    return null; // no winner
  };

  return { assignSymbol };
})();

const displayController = (() => {
  const boardBoxes = document.querySelectorAll(".box");
  // listener
  boardBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      gameController.assignSymbol();
      updateBoard();
    });
  });

  const updateBoard = () => {
    // update DOM
    for (let i = 0; i < boardBoxes.length; i++) {
      boardBoxes[i].textContent = gameBoard.getSymbol(i);
    }
  };

  const clearBoard = () => {};
})();
