//variables to store initial values
var wins = 0;
var losses = 0;
var presses = 9;
var test = "";
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//initial run of random letters
var randomLetters = letters[Math.floor(Math.random() * letters.length)];

//getting reference to the id's 
var storeWins = document.getElementById("number-wins");
var storeLoss = document.getElementById("number-loss");
var attempts = document.getElementById("guess-left"); 
var tries = document.getElementById("letters-guessed");

document.onkeyup = function(event) {
    tries.textContent = (event.key);//need to come back append
   
    
    // was trying to figure out how best to treat the decrease
    if(event.key=true){
        presses--;
    }

    //want to make sure once it is set to 0, it resets
    //not clean and needs to simplified better
    if(presses==0){
        presses = 0;//0  wasn't showing so added this line
        attempts.textContent = presses;
        presses = 10;
        randomLetters = letters[Math.floor(Math.random() * letters.length)];
        losses++;
        tries.empty();
    }
//do this if key pressed matches the number from randomly generated
//this also needs to reset the counter when pressed switched from forloop to just using ifs
    else if (event.key == randomLetters) {
        wins++;
    }
    //sending results back to the html page
    storeWins.textContent = wins;
    storeLoss.textContent = losses;
    attempts.textContent = presses;//i have this in the if statement

        
        
       
    };
    
  








