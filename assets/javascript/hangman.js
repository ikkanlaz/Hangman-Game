// Let's start by grabbing a reference to the <span> below.
var startButtonElem = document.getElementById("start-game");
var gameScreenElem = document.getElementById("game-screen");
var winsElem = document.getElementById("wins");
var lossesElem = document.getElementById("losses");
var wordToGuess = document.getElementById("word-to-guess");
var numberOfGuesses = document.getElementById("number-of-guesses");
var guessedLetters = document.getElementById("guessed-letters");
var gameContainerElem = document.getElementById("game-container");
var word;
var wordArray = [];
var guessedWordArray = [];
var guessedWord;
var guessesRemaining = 6;
var lettersInput = [];
var usedWords = [];
var isGameStarted = false;
var winCount = 0;
var loseCount = 0;
var wordChoices = ["Academic", "Activity", "Adults", "After", "school", "Answers", "Anxiety", "Assembly", "Assignments", "Attire", "Auditorium", "Awards", "Backpack", "Ballpoint", "Baseball", "Basketball", "Bikes", "Birthdays", "Bookmarks", "Books", "Boosters", "Bulletin", "board", "Calendar", "Change", "Charter", "Charts", "Cheering", "Chinese", "Choices", "Classes", "Cleats", "Clique", "Clothing", "Clubs", "Colds", "College", "Columbus", "Day", "Community", "college", "Competition", "Computers", "Confrontation", "Counselor", "December", "Detention", "Dictionary", "Directory", "Doctor", "Drama", "Dress", "code", "Editing", "Education", "Elementary", "English", "Eraser", "Events", "Excel", "Excellence", "Fail", "Fall", "Fear", "Felt", "tip", "pen", "Females", "Field", "hockey", "First", "day", "Flash", "drive", "Flashcards", "Flunk", "Football", "Foreign", "Language", "French", "Friends", "Games", "German", "Girls", "Goals", "Grades", "Grammar", "Graph", "paper", "Grounds", "Group", "Guidance", "Habits", "Health", "Highlighters", "History", "Homework", "Individuals", "Influenza", "Injection", "Instruct", "Janitor", "Junior", "high", "Kickoff", "Language", "Arts", "Latin", "Learning", "Leaves", "Library", "Literature", "Location", "Locker", "Markers", "Mathematics", "Meaning", "Meetings", "Memorization", "Messy", "Middle", "Novel", "Numbers", "Nurse", "Objectives", "Observe", "On", "time", "Open", "house", "Organization", "Outside", "Painting", "Paper", "Paper", "clip", "Paper", "punch", "Parochial", "Pencil", "Performance", "Phones", "Planning", "Playground", "Principal", "Private", "Public", "Quarterback", "Quizzes", "Readiness", "Reading", "Records", "Reunion", "Roll", "call", "School", "Science", "Scissors", "Scribble", "Seats", "Secondary", "Shoes", "Snack", "Soccer", "Social", "Studies", "Spanish", "Sports", "Squirrels", "Stapler", "Students", "Studies", "Subjects", "Supplies", "Support", "Swimming", "Teaching", "Tennis", "shoes", "Topics", "Tournaments", "Understanding", "University", "Victories", "Water", "fountain", "Watercolors", "Weather", "Weddings", "Weekends", "Woodworking", "Words", "World", "Series", "Writing", "Absolute", "Acclaim", "Achievement", "Admiration", "agreeable", "Adorable", "Amazing", "Appealing", "Awesome", "Beautiful", "beneficial", "Bountiful", "Brave", "Bravo", "Brilliant", "Celebrate", "Champion", "Charming", "Cheerful", "Clean", "Constant", "creative", "Dazzling", "Delight", "Divine", "Earnest", "Easy", "Ecstatic", "Efficient", "Elegant", "Encouraging", "Enthusiastic", "Esteem", "Ethical", "Exciting", "Exquisite", "Fabulous", "Famous", "Fantastic", "Favorable", "Finest", "Flourish", "Fortunate", "Fresh", "Friendly", "Generous", "Genius", "Genuine", "Giving", "Glowing", "Good", "Great", "Handsome", "Happy", "Harmony", "Healthy", "Honorable", "Ideal", "Impressive", "Innovative", "Intelligent", "Jubilant", "Knowledgeable", "Legendary", "Lively", "Lovely", "Lucky", "Marvelous", "Meaningful", "Miraculous", "Motivating", "Natural", "Nurturing", "Nutritious", "Optimistic", "Perfect", "Phenomenal", "Plentiful", "Popular", "Positive", "Powerful", "Productive", "Prominent", "Quick", "Reassuring", "Refreshing", "Respected", "Rewarding", "Skilled", "Sparkling", "Special", "Stunning", "Stupendous", "Super", "Supreme", "Terrific", "Thrilling", "Thriving", "Tranquil", "Truthful", "Upbeat", "Upstanding", "Valued", "Vibrant", "Victorious", "Virtuous", "Vivacious", "Wealthy", "Welcoming", "Wholesome", "Wonderful", "Yummy", "Zealous"];

function setup() {
    if (isGameStarted === false) {
        startButtonElem.setAttribute("style", "display: none;");
        gameContainerElem.setAttribute("class", "col-md-8")
        gameScreenElem.setAttribute("style", "display: block;")
        numberOfGuesses.textContent = guessesRemaining;
        createImageContainer();
        createNewInstanceOfGame();
        isGameStarted = true;
    }
}

function reset() {
    lettersInput = [];
    guessesRemaining = 6;
    wordArray = [];
    guessedWordArray = [];
    wordToGuess.textContent = "";
    var hangmanImage = document.getElementById("hangman-image");
    numberOfGuesses.textContent = guessesRemaining;
    hangmanImage.setAttribute("src", "assets/images/" + guessesRemaining +".png");
    guessedLetters.textContent = lettersInput;
}

function createImageContainer() {
    var rowContainer = document.getElementById("row-container");
    var imageContainer = document.createElement("aside");
    imageContainer.setAttribute("class", "col-sm-offset-3 col-sm-6 col-md-offset-0 col-md-4");
    imageContainer.setAttribute("id", "image-container");
    var panelContainer = document.createElement("div");
    panelContainer.setAttribute("class", "panel");
    var image = document.createElement("img");
    image.setAttribute("id", "hangman-image");
    image.setAttribute("class", "col-xs-offset-1 col-xs-10");
    image.setAttribute("src", "assets/images/" + guessesRemaining +".png");
    panelContainer.appendChild(image);
    imageContainer.appendChild(panelContainer);
    rowContainer.appendChild(imageContainer);
}

function createNewInstanceOfGame() {
    reset();
    word = getWord();
    for (var i = 0; i < word.length; i++) {
        wordArray.push(word.substr(i, 1))
    }
    console.log(word);

    for (var i = 0; i < word.length; i++) {
        guessedWordArray.push("_");
    }
    printWord();
}

function printWord() {
    guessedWord = guessedWordArray.toString()
    for (var i = 0; i < guessedWord.length - 1; i++) {
        guessedWord = guessedWord.replace(",", "");
    }
    wordToGuess.textContent = guessedWord;
}

function getWord() {
    var numberInWordChoices;
    do {
        numberInWordChoices = getRandomArbitrary(0, wordChoices.length);
    } while (usedWords.indexOf(numberInWordChoices) > 0)
    usedWords.push(numberInWordChoices);
    return wordChoices[numberInWordChoices].toLowerCase();
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function updateWordToGuess(key) {
    var index = wordArray.indexOf(key);
    while (index != -1) {
        guessedWordArray.splice(index, 1, key);
        printWord();
        index = wordArray.indexOf(key, index + 1);
    }
}

function addGuessedLetter(letter) {
    lettersInput.push(letter);
    guessedLetters.textContent = lettersInput;
}

function checkWinCondition() {
    if (guessedWordArray.indexOf("_") === -1) {
        console.log("You win!");
        winCount++;
        winsElem.textContent = winCount;
        createNewInstanceOfGame();
    }
}

function updateHangmanImage() {
    var hangmanImage = document.getElementById("hangman-image");
    hangmanImage.setAttribute("src", "assets/images/" + guessesRemaining +".png");
}

function checkLoseCondition() {
    if (guessesRemaining === 0) {
        loseCount++;
        lossesElem.textContent = loseCount;
        alert("Word was: " + word);
        createNewInstanceOfGame();
    }
}

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90 && isGameStarted === true) {
        var userInput = event.key;
        if (lettersInput.indexOf(userInput) !== -1) {
            console.log("Letter already guessed!");
        } else if (word.indexOf(userInput) >= 0) {
            updateWordToGuess(userInput);
            addGuessedLetter(userInput);
            checkWinCondition();
        } else {
            guessesRemaining--;
            numberOfGuesses.textContent = guessesRemaining;
            addGuessedLetter(userInput);
            updateHangmanImage();
            checkLoseCondition();
        }

    }
};

startButtonElem.addEventListener('click', setup, false);




	/*1. Get input from player to start game loop
		a. Initialize game
			i. Generates random word
			ii. Sets values on html to default (if necessary) and add "current word spaces"
	2. Player guesses a letter
		a. Check to see if letter matches a letter in word
			i. If true, then add letter to all instances of letter in "current word spaces"
			ii. If false, subtract 1 from number of guesses remaining
			iii. In both instances, add letter to "letters already guessed"*/