import { WINNING_COMBINATIONS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
    // Comprobamos si hay un ganador
    // Iteramos sobre las combinaciones ganadoras
    // y comprobamos si hay tres iguales en la misma fila, columna o diagonal
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // Si no hay ganador, devolvemos null
    return null;
  };

export const checkEndGame = (newBoard) => {
  // Comprobamos si hay un empate
  // Si no hay más posiciones vacías en el tablero
  return newBoard.every((square) => square !== null);
};
