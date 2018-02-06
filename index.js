var Word = require("./Word.js");

// The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

function hangMan() {
    this.wordsArray = ["DAHLIA", "HYACINTH", "BUTTERCUP", "LARKSPUR", "ANEMONE", "HYDRANGEA", "ORCHIDS", "BEGONIA", "PEONY", "MARIGOLD"],
    this.randomNumber = Math.floor(Math.random()* wordsArray.length),
    this.chosenWord = wordsArray[randomNumber],
}


