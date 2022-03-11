# Wordle+
Check out [Wordle](https://www.nytimes.com/games/wordle/index.html). It is a game where the computer has fixed a 5 letter word, let's call that the `SECRET`, and the user has to guess that word. Let's say the user makes a guess, then the computer gives a feedback for each letter in the guess: 
* Green if that letter is in the same position in the `SECRET`
* Yellow if that letter is in some other position in the `SECRET`
* Black if that letter is not in the `SECRET`

The current implementation of [Wordle](https://www.nytimes.com/games/wordle/index.html) is based completely on the front-end javascript code, so it is possible to find the answer by looking at the main javascript file of that page. Try doing this yourself!

This is not a secure way, so we are going to make a simple API, where the user can only make requests to our server with the guess, and the server returns the feedback response. This way, the user cannot directly hack the secret out of the program.

Example: If the user makes a `GET` request `http://localhost:8080/wordle?q=CRANE` and if the `SECRET` was `CIGAR`, then the response should be `gyybb` (We are adopting this convention to give feedback as green for 1st letter, yellow for 2nd and so on...)

### TODO
* Install `node` and `npm`. Install `http` package using `npm`
* You are given a boilerplate/template of a simple node js http server in the `Wordle+` folder
* This server can be started by running `node index.js`
* The server should be running on your machine's `localhost:8080`
* Write down the logic to extract the guess from the URL string, and then generate the feedback response
* You can test your server locally by opening `http://localhost:8080/wordle?q=CRANE` in your browser

### Optional
* Install `ngrok`
* Forward your port 8080 using `ngrok`, and get the link which would be accessible to everyone on the internet. Now you can share this link with your friends (or on the [Discord Channel](https://discord.gg/Vz9rGUNtTn)) so they can try your game! The server will be this program running on your machine, and your friends will be making requests to your program through the internet using their browser.

### Bonus
* You can deploy this simple API using `heroku` if you want the server to run on the cloud
* Rather than hard-coding the secret word, try to generate it randomly from a list of words. You can also use `fs` package to read the vocabulary from a text file
* You can make a front-end client which would make requests to this API (rather than having to make requests directly on the browser). It should make requests using `fetch` whenever user makes a guess and then parse the response text, and show feedback to the user accordingly
