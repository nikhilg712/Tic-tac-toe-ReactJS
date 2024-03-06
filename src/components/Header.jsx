import logo from "../assets/game-logo.png"

export default function Header(){
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>Tic-Tac-Toe</h1>
        </header>
      );
}