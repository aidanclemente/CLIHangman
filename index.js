var Word = require("./Word.js");
var inquirer = require("inquirer");
var isLetter = require('is-letter');

var hangman = {

    guessedLetters: [],
    guessesRemaining: 13,

    wordsArray: ["DAHLIA", "HYACINTH", "BUTTERCUP", "LARKSPUR", "ANEMONE", "HYDRANGEA", "ORCHIDS", "BEGONIA", "PEONY", "MARIGOLD"],

    // Chooses a word randomly, splits the word, creates Letter objects and stores them in an array
    chooseWord: function () {
        var randomNumber = Math.floor(Math.random()* this.wordsArray.length);
        chosenWord = this.wordsArray[randomNumber];

            //This console is showing the chosen word
            console.log("Chosen Word: ", chosenWord);

        newWord = new Word(chosenWord);

        newWord.returnString();
        console.log("\n");
    },

    startGame: function() {

        inquirer.prompt([
            {
                name: "startGame",
                type: "confirm",
                message: "Are you ready to get your Hangman on?"
            }
        ]).then(function(answer) {
            if(answer.startGame) {
                this.newGame();
            } else {
                console.log("Whenever you're ready, I'll be waiting for you!");
            }
        }.bind(this));
    },

    newGame: function() {
        guessedLetters = [];
        guessesRemaining = 13;

        console.log("\n* * * * * * * * * * * * * * * * * *");
        console.log("     The catagory is flowers");
        console.log("* * * * * * * * * * * * * * * * * *\n\n");
        console.log("Number of Guesses: ", this.guessesRemaining + "\n");
        this.chooseWord();
        this.promptForLetters();
        
    },

    promptForLetters: function() {
        var that = this;
        //prompt the user for letters
        inquirer.prompt([
            {
                name: "letterGuessed",
                type: "input",
                message: "Guess a letter",
                validate: function(value) {
                    if(isLetter(value)) {
                        return true;
                    }

                    return "Please enter a letter, one at time"
                }
            }
        ]).then(function(answer) {
            var userGuess = answer.letterGuessed.toUpperCase();
            console.log("User Guess: ", userGuess);

            newWord.guess(userGuess);
            
            // Check if the userGuess is in the this.guessedLetters array
            if (that.guessedLetters.indexOf(userGuess) != -1) {
                console.log("\nYou've already guessed ", userGuess + ". Please guess a new letter.\n")
                this.promptForLetters();
            } else if (chosenWord.split("").indexOf(userGuess) != -1) {
                this.guessedLetters.push(userGuess);
                console.log("Yeah! " + userGuess + " was correct!");

         // XXXXXXXXXXXX    This isn't working!!!!  XXXXXXXXXXXXXXXXX
                if (newWord.returnString() == chosenWord) {
                    // If guessed alert the user they won
                        // Ask the user if they want to play again
                            //if yes, then startGame
                            //else thank you for playing

                    newWord.returnString();

                    console.log("\nYou Won!");
                } else {
                    that.guessesRemaining--;
                    console.log("Guessed Letters: ", that.guessedLetters);
                    console.log("\nGuesses Left: ", that.guessesRemaining + "\n");
                    console.log("* * * * * * * * * * * * * * * * * *\n\n")

                    newWord.returnString()
                }

                // Continue game if not won else game over
                if (this.guessesRemaining > 0 && newWord.won === false) {
                    this.promptForLetters();
                } else{
                    console.log("Game Over!\n")
                    console.log("The word you were guessing was ", chosenWord);
                    console.log("\nBetter luck next time!");
                }


            } else {
                that.guessesRemaining--;
                console.log("Nope. Guess again!\n");
                console.log("You have ", that.guessesRemaining + " so choose wisely!\n")
                // show updated number of guessesRemaining
                newWord.returnString()
                // show the array of letters guessed
                
            }

         }.bind(this));

    },

}

hangman.startGame();