import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({handleSelectSquare , activeSymbol}) {
const [gameBoard,setGameBoard] = useState(initialGameBoard);

function handleBoardClick(rowIndex,colIndex)
{
    setGameBoard((prevGameBoard)=>{
        const updatedGameBoard = [...prevGameBoard.map((innerArray)=>{return [...innerArray]} )]
        updatedGameBoard[rowIndex][colIndex]=activeSymbol;
        return updatedGameBoard;
    })
    handleSelectSquare();
}

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleBoardClick(rowIndex,colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
