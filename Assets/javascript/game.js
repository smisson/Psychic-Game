var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var randomLetter;


var newLetter = function() {
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

var soFar = function() {
    document.getElementById("guesses").innerHTML = "Total # of guesses so far: " + guessesSoFar.join(", ");
};

// how many guesses are left
var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Number of Guesses Left: " + left;
};

// calling for the start of a new game
var newGame = function() {
    guessedLetters = [];
    guessesSoFar = [];
    left = 9;
    newLetter();
    guessesLeft();
    soFar();
    console.log(randomLetter);
}

// Game Start
newGame();

// code below is how the game works


document.onkeyup = function() {
    // var userGuess = event.key;
    // key listener for which key user presses other than a-z
    var userGuess = event.key.toLowerCase();
        var regex = /[a-zA-Z]/g;
        userGuess.match(regex);
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {
        if (userGuess == randomLetter) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins: " + wins;
            newGame();
        }
    } else if (left == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses: " + losses;
        newGame();
    }
};

