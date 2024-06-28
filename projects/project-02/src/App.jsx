import { useState } from "react";

const TURNS = {
  X: 'x',
  O: 'o'
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'selected' : ''}`

  const handleClick = () => {
    updateBoard(index);
  }


  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBINATIONS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal
  [2, 4, 6]
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); 

  const checkWinner = (boarToCheck) => {
    for (const combo of WINNER_COMBINATIONS) {
      const [a, b, c] = combo;
      if (boarToCheck[a] && boarToCheck[a] === boarToCheck[b] && boarToCheck[a] === boarToCheck[c]) {
        return boarToCheck[a];
      }
    
    }
  }
  const updateBoard = (index) => {
    if (board[index] || winner) return; // Si la casilla ya está ocupada, no se hace nada.

    const newBoard = [...board]; // Se copia el tablero actual, no se modifica el original, los props son inmutables.
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner); // La actualización de estado es asíncrona, no se puede hacer un console.log(winner) justo después de setWinner.
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index} 
                updateBoard={updateBoard}
              >
                {index}
              </Square>
            )
          }
        )}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
