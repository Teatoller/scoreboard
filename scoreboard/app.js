const players = [
  {
    id: 1,
    name: "Steven",
    score: 50
  },
  {
    id: 2,
    name: "Denzel",
    score: 85
  },
  {
    id: 3,
    name: "Nigel",
    score: 95
  },
  {
    id: 4,
    name: "Fay",
    score: 80
  }
];

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

function App(props) {
  return (
    <div className="scoreboard">
      <Header title="scoreboard" totalPlayers={props.initialPlayers.length} />

      {/* Player list */}

      {props.initialPlayers.map(player => (
        <Player
          key={player.id.toString()}
          playerName={player.name}
          playerScore={player.score}
          // {...player}
        />
      ))}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,

  document.getElementById("root")
);
