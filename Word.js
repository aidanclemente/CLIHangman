var Letter = require("./Letter.js");

var chosenWord = "AIDAN";
var start = new Word(chosenWord);
console.log(start.chosenWord);

// Word Constructor
function Word(chosenWord) {

    //This is to check if word has been completely guessed
    this.won = false;

    this.chosenWord = chosenWord,

    // Populating the array
    this.arrayOfLetterObjects = chosenWord.split("").map(function(char) {
        return new Letter(char);
    });
    
    // Create a function that returns a string representing the word
    this.returnString = function() {
        strWord = "";
            for (var i = 0; i < this.arrayOfLetterObjects.length; i++) {
                strWord += this.arrayOfLetterObjects[i].showLetter();
            }
        
        // This prints the dashes or updates with letters
        console.log(strWord);
    };

    // this.displayWord = chosenWord.strWord.trim();
    // console.log("DXXL: ", this.displayWord);

    this.guess = function(letterGuessed) {

        for (var i = 0; i < this.arrayOfLetterObjects.length; i++) {
            this.arrayOfLetterObjects[i].checkLetter(letterGuessed);
        }   
    };

};

module.exports = Word;