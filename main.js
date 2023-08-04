// need to adjust to be a factory function
const gameBoard = (() => {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board.push(box());
  }

  const getBoard = () => board;

  const writeSymbol = (index, symbol) => {};

  const printBoard = () => {
    console.log(board);
    const textBoard = board.map((box) => box.getSymbol());
    console.log(textBoard);
  };

  return { getBoard, writeSymbol, printBoard };
})();

const testBoard = gameBoard;
testBoard.printBoard();

function gameController() {
  const board = gameBoard();

  const winConditions = [
    // Rows
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],

    // Columns
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],

    // Diagonals
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];
  const checkWinner = (board) => {
    for (const condition of winConditions) {
      const [row1, col1] = condition[0];
      const [row2, col2] = condition[1];
      const [row3, col3] = condition[2];

      if (
        board[row1][col1] &&
        board[row1][col1] === board[row2][col2] &&
        board[row1][col1] === board[row3][col3]
      ) {
        return board[row1][col1]; // winner found
      }
    }
    return null; // no winner
  };
}

function player() {
  let score = 0;

  const getPlayerScore = () => score;
}

function computer() {
  let score = 0;

  const getComputerScore = () => score;
}

function box() {
  let symbol = "";

  // Receives player symbol and sets cell as said symbol
  const setSymbol = (player) => {
    symbol = player;
  };

  const getSymbol = () => symbol;

  return {
    setSymbol,
    getSymbol,
  };
}
