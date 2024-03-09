
import { useState } from "react";



export default function GameBoard({handleSelectSquare,board}) {


  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectSquare(rowIndex,colIndex)} disabled={col!=null}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
