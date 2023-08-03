function gameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i.push("")];
    }
  }

  const getBoard = () => board;

  const writeSymbol = (row, column, player) => {};

  const printBoard = () => {};

  return { getBoard, writeSymbol, printBoard };
}

function gameController() {
  const board = gameBoard();

  const checkWinner = () => {};
}

function player() {}

function computer() {}

function cell() {
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
