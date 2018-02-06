var Letter = require("./Letter.js");

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

function Word(chosenWord) {
    //Guesses Remaining
    this.guessesRemaining = 13;
    
    //needs to store the selected word from wordsArray
    this.chosenWord = chosenWord,

    //an empty array to store guessed letters
    this.guessedLetters = [],

    //Boolean if the entire word was revealed, default set to false
    this.entireWordGuessed = false,

    //needs to create an object representing the word to guess
    this.makeWord = function() {
        var strWord;
        for (var i = 0; i < this.chosenWord[i].length; i++) {

        };
    }
    
    //create a function that
        //use the Letter constructor to create a new Letter object for each letter of the selected word

        //stores the objects in an array

        //concatenate the letters/underscores together to form a string and return the string to the console

    //create a function that 
        //takes a character as an argument
        //calls the checkLetter function on each letter object

}

module.exports = Word;