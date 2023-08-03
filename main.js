function gameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(box());
    }
  }

  const getBoard = () => board;

  const writeSymbol = (row, column, player) => {};

  const printBoard = () => {
    console.log(board);
    const textBoard = board.map((row) => row.map((box) => box.getSymbol()));
    console.log(textBoard);
  };

  return { getBoard, writeSymbol, printBoard };
}

const testBoard = gameBoard();
testBoard.printBoard();

function gameController() {
  const board = gameBoard();

  const checkWinner = () => {};
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
