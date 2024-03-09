import PlayersInfo from "../components/Players.jsx"
import {WINNING_COMBINATIONS} from "./WinningCombinations.js";
import GameBoard from "../components/GameBoard.jsx";
import GameOver from "./GameOver.jsx";
import Log from "../components/Log.jsx";
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameContainer() {
  const [gameTurns, setGameTurns] =useState([])
  const [activePlayer, setActivePlayer] = useState('X');

  let gameBoard = [...initialGameBoard.map(array=>[...array])];
  for(const turn of gameTurns)
  {
    const{square,player}=turn;
    const{row, col} = square;
    gameBoard[row][col]=player;

  }
  let winner;
  for(const combinations of WINNING_COMBINATIONS)
  {
    let firstSymbol= gameBoard[combinations[0].row][combinations[0].column]
    let secondSymbol= gameBoard[combinations[1].row][combinations[1].column]
    let thirdSymbol= gameBoard[combinations[2].row][combinations[2].column]
    if(firstSymbol && firstSymbol==secondSymbol && firstSymbol==thirdSymbol)
    {
      winner = firstSymbol;
    }
  }
  const hasDrawn = gameTurns.length===9 && !winner;

  function handleActivePlayer(rowIndex,colIndex){
    setActivePlayer((curractivePlayer)=> curractivePlayer ==='X' ? 'O' : 'X');
    setGameTurns((prevTurns) =>{
      let currPlayer = 'X';
      if(prevTurns.length>0 && prevTurns[0].player=='X'){
        currPlayer='O';
      }
      const updatedTurns = [{square: {row :rowIndex, col: colIndex}, player: currPlayer},...prevTurns] 
      return updatedTurns;
    })
  }

  function handleRematch()
  {
    window.location.reload();
  }
  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
       <PlayersInfo  player="Player 1" playersymbol="X" highlightActivePlayer={activePlayer==='X' ? 'active' : undefined} />
       <PlayersInfo  player="Player 2" playersymbol="O" highlightActivePlayer={activePlayer==='O' ? 'active' : undefined}/> 
       </ol>
       {(winner||hasDrawn) ? <GameOver winner={winner} rematch = {handleRematch}/> : null}
       <GameBoard handleSelectSquare= {handleActivePlayer} board={gameBoard}/>
      </div>
    </main>
  );
}
