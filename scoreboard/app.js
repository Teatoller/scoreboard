const desc = "I just learned how to create my first react node";

const myTitleId = 'main-title'

const name = 'Steven'

const header = (
  <header>
    <h1 id={myTitleId} >{name}'s First React Element</h1>
    <p>{desc}</p>
  </header>
);

ReactDOM.render(header, document.getElementById("root"));
