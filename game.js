var Word = require("./Word.js");
var inquirer = require("inquirer");
var isLetter = require('is-letter');

// The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

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
            
            // These are returning undefined
            console.log("xxx", newWord);

            // Push guess into the guessedLetters array
            //This is not working, console logs an empty array
            
            this.guessedLetters.push(userGuess);
                console.log("Guessed LEtters: ", this.guessedLetters);

            if (chosenWord.split("").indexOf(userGuess) != -1) {
                console.log("Yeah! " + userGuess + " was correct!");
                
                //This returnString isn't updated with the letter revealed
                newWord.returnString();
            } else {
                console.log("Nope. Guess again!");
                // show updated number of guessesRemaining
               newWord.returnString()
                // show the array of letters guessed
                //call the promptForLetters again if guessesRemaining > 0
            }
        }.bind(this));
            // if isLetter === true
                // give them feed back
                // guessesRemain--
                // push guess into guessedLetters array
                // console.log guessedLetter array for user to see
                // run the checkGuess function to update the underscores
            //else ask the user for one letter at a time
    },

        //then I prompt them to guess a letter

}
// console.log(hangman.wordsArray);

hangman.startGame();

// chosenWord.splitWord();
// console.log(chosenWord.splitWord());
    

    // //Boolean if the entire word was revealed, default set to false
    // this.entireWordGuessed = false,



