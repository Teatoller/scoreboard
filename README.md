# Scoreboard

### Prerequisites
- Use the local HTTP server `https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#Running_a_simple_local_HTTP_server`

- Nodejs 

- npm

### How to Test the Application

1. Create a folder on your machine `mkdir myproject`
2. `cd myproject`
3. Run `git clone https://github.com/Teatoller/scoreboard.git`
4. cd `scoreboard`
5. open **scoreboard** in your chosen editor. For **vscode** enter `code .` on terminal and press enter.
6. `git checkout develop`
7. Run a local HTTP server. 
- If Python version returned above is 3.X
`python3 -m http.server`
- On windows try "python" instead of "python3"
- If Python version returned above is 2.X
`python -m SimpleHTTPServer`
 
8. By default, this will run the contents of the directory on a local web server, on port 8000. You can go to this server by going to the URL localhost:8000 in your web browser. Here you'll see the contents of the directory listed — click the HTML file you want to run. _In this case http://localhost:8000/scoreboard/_.