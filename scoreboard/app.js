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

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">{props.playerName}</span>
      <Counter />
    </div>
  );
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
    this.incrementScore = this.incrementScore.bind(this);
  }

  incrementScore() {
    this.setState(function(prevState) {
      return {
        score: prevState.score + 1
      };
    });
  }

  decrementScore = () => {
    this.setState(prevState => ({
        score: prevState.score - 1
      })
    );
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

function App(props) {
  return (
    <div className="scoreboard">
      <Header title="scoreboard" totalPlayers={props.initialPlayers.length} />

      {/* Player list */}

      {props.initialPlayers.map(player => (
        <Player key={player.id.toString()} playerName={player.name} />
      ))}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,

  document.getElementById("root")
);
