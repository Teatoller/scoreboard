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
    }));
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          id: 1,
          name: "Steven"
        },
        {
          id: 2,
          name: "Denzel"
        },
        {
          id: 3,
          name: "Nigel"
        },
        {
          id: 4,
          name: "Fay"
        }
      ]
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="scoreboard">
        <Header title="scoreboard" totalPlayers={this.state.players.length} />

        {/* Player list */}

        {this.state.players.map(player => (
          <Player key={player.id.toString()} playerName={player.name} />
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
