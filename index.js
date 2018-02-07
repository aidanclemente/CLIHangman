var Word = require("./Word.js");

// The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
var hangman = {
    guessesRemaining: 13,

    wordsArray: ["DAHLIA", "HYACINTH", "BUTTERCUP", "LARKSPUR", "ANEMONE", "HYDRANGEA", "ORCHIDS", "BEGONIA", "PEONY", "MARIGOLD"],

    randomNumber: Math.floor(Math.random()* this.wordsArray.length),

    chosenWord: this.wordsArray[randomNumber],
// console.log("Chosen Word: ", chosenWord),

    chooseWord: function () {
        var newWord = new Word(this.chosenWord);
        console.log(newWord.splitWord());
    }


}
// chosenWord.splitWord();
// console.log(chosenWord.splitWord());
    
    // // An empty array to store guessed letters
    // this.guessedLetters = [],

    

    // //Boolean if the entire word was revealed, default set to false
    // this.entireWordGuessed = false,


    // //Guesses Remaining
    // this.guessesRemaining = 13,


