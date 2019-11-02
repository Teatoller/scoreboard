const title = <h1>My First React Element</h1>;

const desc = <p>I just learned how to create my first react node</p>;

const header = React.createElement(
    "header", 
    null, 
    title, 
    desc
    );

ReactDOM.render(
    header, 
    document.getElementById("root")
    );
