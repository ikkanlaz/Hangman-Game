// Let's start by grabbing a reference to the <span> below.
var startText = document.getElementById("start-game");
var gameScreen = document.getElementById("game-screen");
var wins = document.getElementById("wins");
var wordToGuess = document.getElementById("word-to-guess");
var numberOfGuesses = document.getElementById("number-of-guesses");
var guessedLetters = document.getElementById("guessed-letters");
var usedWords = [];
var isGameStarted = false;
var winCount = 0;
var randomWord;
var wordChoices = ["r", "p", "s"];
var userInput;
console.log(wins.style);

function setGameSceen() {
    startText.style = "display: none;";
    gameScreen.style = "display: block;";
}

function startGame() {
    wordToGuess = getWordToGuess();
}

function getWordToGuess() {

}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



document.onkeyup = function (event) {
    if (isGameStarted === true) {
        userText.textContent = event.key;
        userInput = userText.textContent;
        console.log(userInput);
        randomWord = computerChoices[getRandomArbitrary(0, 3)];
        computerGuess.textContent = randomWord;
        console.log("randomWord: " + randomWord);
    }
};

document.onfocus = function (event) {
    if (isGameStarted === false) {
        setGameSceen();
        startGame();
        isGameStarted = true;
    }
}



	/*1. Get input from player to start game loop
		a. Initialize game
			i. Generates random word
			ii. Sets values on html to default (if necessary) and add "current word spaces"
	2. Player guesses a letter
		a. Check to see if letter matches a letter in word
			i. If true, then add letter to all instances of letter in "current word spaces"
			ii. If false, subtract 1 from number of guesses remaining
			iii. In both instances, add letter to "letters already guessed"*/