var Letter = require("./Letter.js");

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

// Word Constructor
function Word(chosenWord) {

    // Needs to store the selected word from wordsArray
    this.chosenWord = chosenWord,
    
    //   * An array of `new` Letter objects representing the letters of the underlying word
    // Populating the array
    this.arrayOfLetterObjects = chosenWord.split("").map(function(char) {
        return new Letter(char);
    });

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    
    // Create a function that returns a string representing the word
    this.returnString = function() {
        var strWord = "";
            for (var i = 0; i < this.arrayOfLetterObjects.length; i++) {
                strWord += this.arrayOfLetterObjects[i].showLetter();
            }
        
        // This prints the dashes or updates with letters
        console.log(strWord);

        // console.log("xxx", this.arrayOfLetterObjects);
    };

    // Create a function that 
        // Takes a character as an argument
        // Calls the checkLetter function on each letter object
    this.guess = function(letterGuessed) {
        console.log("Guess is running");
        for (var i = 0; i < this.arrayOfLetterObjects.length; i++) {
            this.arrayOfLetterObjects[i].checkLetter(letterGuessed);
        }   
    };

};

module.exports = Word;