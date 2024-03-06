import PlayersInfo from "./Players"
export default function GameContainer() {
  return (
    <main>
      <div id="game-container">
      <ol id="players">
       <PlayersInfo  player="Player 1" playersymbol="X"/>
       <PlayersInfo  player="Player 2" playersymbol="O"/> 
       </ol>  
      </div>
      
    </main>
  );
}
