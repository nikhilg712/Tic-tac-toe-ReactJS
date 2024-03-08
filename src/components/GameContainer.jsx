import PlayersInfo from "../components/Players.jsx"
import GameBoard from "../components/GameBoard.jsx";
import Log from "../components/Log.jsx";
import { useState } from "react";

export default function GameContainer() {
  let choosePlayer = Math.floor(Math.random() * 10) + 1;
  let active = '';
  if(choosePlayer<5) active = 'X'
  else active = 'O';
  const [activePlayer, setActivePlayer] = useState(active);
  function handleActivePlayer(){
    setActivePlayer((curractivePlayer)=> curractivePlayer ==='X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
       <PlayersInfo  player="Player 1" playersymbol="X" highlightActivePlayer={activePlayer==='X' ? 'active' : undefined} />
       <PlayersInfo  player="Player 2" playersymbol="O" highlightActivePlayer={activePlayer==='O' ? 'active' : undefined}/> 
       </ol>
       <GameBoard handleSelectSquare= {handleActivePlayer} activeSymbol={activePlayer}/>
      <Log logPlayer={activePlayer}/>
      </div>
    </main>
  );
}
