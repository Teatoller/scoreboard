const title = React.createElement(
    'h1',
    {id: 'main-title', 'title': 'This is a title'},
    'My First React Element'
);

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create my first react node'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
)

ReactDOM.render(
    header, 
    document.getElementById('root')
    );