import "./App.css";
import { useState } from "react";

import { Square } from "./components/Square.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";

import { saveGameToStorage } from "./logic/storage/index.js";
import { resetGameFromStorage } from "./logic/storage/index.js";

import confetti from "canvas-confetti";


function App() {

  /*
     Una cosa que nunca se puede hacer en React es
     poner los useStage y todos los hooks dentro de un if
     o dentro de un bucle, ya que React no sabría
     qué hocks ejecutar primero y en qué orden.

     - useState es un hook que nos permite crear
     un estado en nuestro componente.

      => const [value, setValue] = useState(initialValue)

     - useEffect es un hook que nos permite
     ejecutar código cuando nuestro componente
     se renderiza o cuando cambiamos el estado.

      => useEffect(() => {
       console.log('Codigo a ejecutar') --->  como minimo, se ejecutará una vez
     }, [value]);                       --->  El array es opcional, si no lo usamos,
                                              se ejecutará el useEffect cada
                                              vez que se renderice el componente
  */

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });

  // null = no hay ganador, false = empate, X o O = ganador
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    // Limpiamos el localStorage
    resetGameFromStorage();
  };

  const updateBoard = (index) => {

    // No actualizamos la posición si ya hay una ficha o si hay un ganador
    if (board[index] || winner) return;

    // Actualizamos el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //Cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardamos la partida
    saveGameToStorage({board:newBoard, turn:newTurn});

    // Comprobamos si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti()
      // La actualización del estado en React es asíncrona, por lo que debemos usar un setTimeout
      // para asegurarnos de que se actualice el estado antes de mostrar la alerta
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };


  return (

    <main className="board">

      <h1>Tic Tac Toe</h1>

      {/*JUEGO*/}
      <button onClick={resetGame}>Empezar nueva partida</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}>
                {square}
              </Square>
            );
          })
        }
      </section>

      {/* TURNOS */}
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {/* GANADOR */}
      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  );
}

export default App;
