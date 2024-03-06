import { useState } from "react";

export default function PlayersInfo({ player, playersymbol }) {

    const [isEditing, setisEditing] = useState(false);
    function whenClicked()
    {
        setisEditing(true);
        console.log("edit clicked")
    }
  
  
    return (
    
      <li>
        <span className="player">
            <input type="text" placeholder={player} className="players" />
            <span className="player-symbol">{playersymbol}</span>
            <button onClick={whenClicked}>edit</button>
          
          
          
        </span>
      </li>
   
  );
}
