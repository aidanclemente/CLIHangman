var Letter = require("./Letter.js");

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

function Word() {
    //needs to store the selected word from wordsArray

    //create a function that
        //use the Letter constructor to create a new Letter object for each letter of the selected word

        //stores the objects in an array

        //concatenate the letters/underscores together to form a string and return the string to the console

    //create a function that 
        //takes a character as an argument
        //calls the checkLetter function on each letter object

}

module.exports = Word;