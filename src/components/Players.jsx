import { useState } from "react";

export default function PlayersInfo({ player, playersymbol, highlightActivePlayer}) {

    const [isEditing, setisEditing] = useState(false);
    const [playerName, setplayerName] = useState(player);
    let editPlayerName = <span className="player-name">{player}</span>
    let editButton = 'Edit'
    function whenClicked()
    {
        setisEditing((editing)=> !editing )        
    }
    function handleChange(event){
        setplayerName(event.target.value)
    }
  
    if(isEditing)
    {
        editPlayerName = <input type="text" value={playerName} required onChange={handleChange} />
        editButton='Save'
    }
    else{
        editPlayerName = <span className="player-name">{playerName}</span>
        editButton='edit'
    }
  
    return (
    
      <li className= {highlightActivePlayer}>
        <span className="player">
            {editPlayerName}
            <span className="player-symbol">{playersymbol}</span>
            <button onClick={whenClicked}>{editButton}</button>
          
        </span>
      </li>
   
  );
}
