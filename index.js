var Word = require("./Word.js");
var inquirer = require("inquirer");
var isLetter = require('is-letter');

var hangman = {

    numOfLetterFound: 0,
    guessedLetters: [],
    guessesRemaining: 10,

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
        var that = this;

        inquirer.prompt([
            {
                name: "startGame",
                type: "confirm",
                message: "Are you ready to get your Hangman on?"
            }
        ]).then(function(answer) {
            if(answer.startGame) {
                this.guessedLetters = [];
                this.guessesRemaining = 10;

                that.newGame();
            } else {
                console.log("Whenever you're ready, I'll be waiting for you!");
            }
        });
    },

    newGame: function() {

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
    if(this.guessesRemaining > 0) {
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
            
            // Check if the userGuess is in the guessedLetters array
            if (that.guessedLetters.indexOf(userGuess) != -1) {

                console.log("\nYou've already guessed ", userGuess + ". Please guess a new letter.\n")
                that.promptForLetters();

            } else if (chosenWord.split("").indexOf(userGuess) != -1) {

                that.guessedLetters.push(userGuess);
                that.numOfLetterFound++;

                console.log("Yeah! " + userGuess + " was correct!");

                console.log("Number of letters Found: ", that.numOfLetterFound);
                console.log("Chosen word length: ", chosenWord.length);

         // XXXXXXXXXXXX    This isn't working!!!!  XXXXXXXXXXXXXXXXX
                if (that.numOfLetterFound == chosenWord.length) {
                    // If guessed alert the user they won
                        // Ask the user if they want to play again
                            //if yes, then startGame
                            //else thank you for playing

                    newWord.returnString();

                    console.log("\nCongratulations!!!! You Won!");

                } else {

                    that.guessesRemaining--;
                    console.log("Guessed Letters: ", that.guessedLetters);
                    console.log("\nGuesses Left: ", that.guessesRemaining + "\n");
                    console.log("* * * * * * * * * * * * * * * * * *\n\n")

                    newWord.returnString()
                    that.promptForLetters();
                }

                // Continue game if not won else game over
                // && chosenWord === that.strWord
                // if (that.guessesRemaining > 0) {
                //     that.promptForLetters();
                // } else{
                //     console.log("Game Over!\n")
                //     console.log("The word you were guessing was ", chosenWord);
                //     console.log("\nBetter luck next time!");
                //     that.startGame();
                // }


            } else {
                that.guessesRemaining--;
                that.guessedLetters.push(userGuess);
                console.log("Guessed Letters: ", that.guessedLetters);
                console.log("Nope! Guess again.\n");
                console.log("You have ", that.guessesRemaining + " more guesses. So choose wisely!\n")
                

                newWord.returnString()

                that.promptForLetters();
            }

         });

    } else {
        console.log("\nGame Over!\n")
        console.log("The word you were guessing was ", chosenWord);
        console.log("\nBetter luck next time!\n");
        //This isn't working right
        //that.startGame();
    }
    } 
}

hangman.startGame();