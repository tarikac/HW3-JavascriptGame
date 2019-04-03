//variables to store initial values
var wins = 0;
var losses = 0;
var presses = 9;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = [];

//initial run of random letters
var randomLetters = letters[Math.floor(Math.random() * letters.length)];

//getting reference to the id's 
var storeWins = document.getElementById("number-wins");
var storeLoss = document.getElementById("number-loss");
var attempts = document.getElementById("guess-left"); 
var tries = document.getElementById("letters-guessed");


// need to send presses to display in the guess-left span
//attempts.textContent = presses;

document.onkeyup = function(event) {
    //may need to add this to a for loop? 
    var entries = String.fromCharCode(event.keyCode);  //https://www.w3schools.com/jsref/jsref_fromcharcode.asp
    guesses.push(entries);
    tries.textContent = guesses;


    
    // tries.appendChild=(event.key);
    
    // was trying to figure out how best to treat the decrease
    if(event.key = true){
        presses--;
        attempts.textContent = presses;
    }

   

    // if(guesses.length > 8 || event.key == randomLetters){
    //         guesses = [];
    // }

    //want to make sure once it is set to 0, it resets
    //not clean and needs to simplified better
    if(presses<1){
       // attempts.textContent = presses;
        presses = 9;
        randomLetters = letters[Math.floor(Math.random() * letters.length)];
        losses++;
        guesses = []; //looks like this resets the array!
       //tries.empty(guesses); //this did not work..i also tried keeping it has empty();
       
    }
//do this if key pressed matches the number from randomly generated
//this also needs to reset the counter when pressed switched from forloop to just using ifs
    else if (event.key == randomLetters) {
        randomLetters = letters[Math.floor(Math.random() * letters.length)];
        guesses = [];
        presses = 9;
        attempts.textContent = presses;
        wins++;
        alert("You won a point!");
    }
    //sending results back to the html page
    storeWins.textContent = wins;
    storeLoss.textContent = losses;
    attempts.textContent = presses;

        
        
       
    };
    
  









