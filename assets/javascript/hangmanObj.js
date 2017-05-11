var gameObject = {
    word: "",
    wordArray: [],
    guessedWordArray: [],
    guessedWord: "",
    guessesRemaining: 6,
    lettersInput: [],
    usedWords: [],
    isGameStarted: false,
    winCount: 0,
    loseCount: 0,
    wordChoices: ["Academic", "Activity", "Adults", "After", "school", "Answers", "Anxiety", "Assembly", "Assignments", "Attire", "Auditorium", "Awards", "Backpack", "Ballpoint", "Baseball", "Basketball", "Bikes", "Birthdays", "Bookmarks", "Books", "Boosters", "Bulletin", "board", "Calendar", "Change", "Charter", "Charts", "Cheering", "Chinese", "Choices", "Classes", "Cleats", "Clique", "Clothing", "Clubs", "Colds", "College", "Columbus", "Day", "Community", "college", "Competition", "Computers", "Confrontation", "Counselor", "December", "Detention", "Dictionary", "Directory", "Doctor", "Drama", "Dress", "code", "Editing", "Education", "Elementary", "English", "Eraser", "Events", "Excel", "Excellence", "Fail", "Fall", "Fear", "Felt", "tip", "pen", "Females", "Field", "hockey", "First", "day", "Flash", "drive", "Flashcards", "Flunk", "Football", "Foreign", "Language", "French", "Friends", "Games", "German", "Girls", "Goals", "Grades", "Grammar", "Graph", "paper", "Grounds", "Group", "Guidance", "Habits", "Health", "Highlighters", "History", "Homework", "Individuals", "Influenza", "Injection", "Instruct", "Janitor", "Junior", "high", "Kickoff", "Language", "Arts", "Latin", "Learning", "Leaves", "Library", "Literature", "Location", "Locker", "Markers", "Mathematics", "Meaning", "Meetings", "Memorization", "Messy", "Middle", "Novel", "Numbers", "Nurse", "Objectives", "Observe", "On", "time", "Open", "house", "Organization", "Outside", "Painting", "Paper", "Paper", "clip", "Paper", "punch", "Parochial", "Pencil", "Performance", "Phones", "Planning", "Playground", "Principal", "Private", "Public", "Quarterback", "Quizzes", "Readiness", "Reading", "Records", "Reunion", "Roll", "call", "School", "Science", "Scissors", "Scribble", "Seats", "Secondary", "Shoes", "Snack", "Soccer", "Social", "Studies", "Spanish", "Sports", "Squirrels", "Stapler", "Students", "Studies", "Subjects", "Supplies", "Support", "Swimming", "Teaching", "Tennis", "shoes", "Topics", "Tournaments", "Understanding", "University", "Victories", "Water", "fountain", "Watercolors", "Weather", "Weddings", "Weekends", "Woodworking", "Words", "World", "Series", "Writing", "Absolute", "Acclaim", "Achievement", "Admiration", "agreeable", "Adorable", "Amazing", "Appealing", "Awesome", "Beautiful", "beneficial", "Bountiful", "Brave", "Bravo", "Brilliant", "Celebrate", "Champion", "Charming", "Cheerful", "Clean", "Constant", "creative", "Dazzling", "Delight", "Divine", "Earnest", "Easy", "Ecstatic", "Efficient", "Elegant", "Encouraging", "Enthusiastic", "Esteem", "Ethical", "Exciting", "Exquisite", "Fabulous", "Famous", "Fantastic", "Favorable", "Finest", "Flourish", "Fortunate", "Fresh", "Friendly", "Generous", "Genius", "Genuine", "Giving", "Glowing", "Good", "Great", "Handsome", "Happy", "Harmony", "Healthy", "Honorable", "Ideal", "Impressive", "Innovative", "Intelligent", "Jubilant", "Knowledgeable", "Legendary", "Lively", "Lovely", "Lucky", "Marvelous", "Meaningful", "Miraculous", "Motivating", "Natural", "Nurturing", "Nutritious", "Optimistic", "Perfect", "Phenomenal", "Plentiful", "Popular", "Positive", "Powerful", "Productive", "Prominent", "Quick", "Reassuring", "Refreshing", "Respected", "Rewarding", "Skilled", "Sparkling", "Special", "Stunning", "Stupendous", "Super", "Supreme", "Terrific", "Thrilling", "Thriving", "Tranquil", "Truthful", "Upbeat", "Upstanding", "Valued", "Vibrant", "Victorious", "Virtuous", "Vivacious", "Wealthy", "Welcoming", "Wholesome", "Wonderful", "Yummy", "Zealous"],

    reset: function () {
    lettersInput = [];
    guessesRemaining = 6;
    wordArray = [];
    guessedWordArray = [];
    wordToGuess.textContent = "";
    
    numberOfGuesses.textContent = guessesRemaining;
    hangmanImage.setAttribute("src", "assets/images/" + guessesRemaining +".png");
    guessedLetters.textContent = lettersInput;
}
}

var startButtonElem = document.getElementById("start-game");
var gameScreenElem = document.getElementById("game-screen");
var winsElem = document.getElementById("wins");
var lossesElem = document.getElementById("losses");
var wordToGuessElem = document.getElementById("word-to-guess");
var numberOfGuessesElem = document.getElementById("number-of-guesses");
var guessedLettersElem = document.getElementById("guessed-letters");
var hangmanImage = document.getElementById("hangman-image");