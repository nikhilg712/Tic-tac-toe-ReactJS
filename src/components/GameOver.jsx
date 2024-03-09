export default function GameOver({winner,rematch}) {
  return <div id="game-over">
    <h2>Game Over</h2>
    {winner && <p> {winner} wins!</p>}
    {!winner && <p> It&apos; a Draw  </p>}
    <button onClick={rematch}>Rematch</button>
  </div>;
}
