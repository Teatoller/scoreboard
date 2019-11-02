function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment">+</button>
    </div>
  );
}

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">{props.playerName}</span>
      <Counter score={props.playerScore} />
    </div>
  );
}

function App() {
  return (
    <div className="scoreboard">
      <Header title="scoreboard" totalPlayers={1} />

      {/* Player list */}
      <Player playerName="Steven" playerScore={30} />
      <Player playerName="Jane" playerScore={60} />
      <Player playerName="Denzel" playerScore={80} />
      <Player playerName="Nigel" playerScore={75} />
      <Player playerName="Fay" playerScore={45} />
    </div>
  );
}

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
