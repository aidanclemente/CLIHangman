var Letter = require("./Letter.js");

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)


// Word Constructor
function Word(chosenWord) {
    console.log("Yeah!! Word constructor is working!");
    //needs to store the selected word from wordsArray
    this.chosenWord = chosenWord,

    
    //   * An array of `new` Letter objects representing the letters of the underlying word
    this.arrayOfLetterObjects = [];

    //Now I need a function to break down the chosenWord so I can use array notation 

    //populating the array
    this.splitWord = function() {
        console.log("split word function has been run!");
        // Splitting chosen word and then populating the array
        for (var i = 0; i < this.chosenWord.length; i++) {
            var currentLetter = new Letter(chosenWord[i]);
            this.arrayOfLetterObjects.push(currentLetter);
        
            //Check to make sure what's being pushed
            console.log(this.arrayOfLetterObjects); 
        };
        
    };

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    
    //create a function that
    this.returnString = function() {
        var strWord = "";
            for (var i = 0; i < this.arrayOfLetterObjects.length; i++) {
                strWord += this.arrayOfLetterObjects[i].showLetter();
            }

        return strWord;
    };

    //create a function that 
        //takes a character as an argument
        //calls the checkLetter function on each letter object
    this.guess = function(letterGuessed) {
        for (var i = 0; i < arrayOfLetterObjects.length; i++) {
            this.arrayOfLetterObjects[i].checkLetter(letterGuessed);
        }   
    };

};


module.exports = Word;





// var piece = this.chosenWord;

// // Splitting chosen word and then populating the array
// for (var i = 0; i < piece.length; i++) {
    
//     this.arrayOfLetterObjects.push(piece[i]);

//     //Check to make sure what's being pushed
//     console.log(this.arrayOfLetterObjects); 
// };