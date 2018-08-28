//variable declarations

    var tries = 5;      //# of incorrect guesses, when reaches 0 you lose comrade.
    var score = 0;      //# of successfully guessed words.
    var letters = [];   //Ivana White turns these
                        //List of words.
    var wordBank = ["TOLSTOY","MOSCOW","STALIN","LENNIN","STALINGRAD","LENNINGRAD","KALISHNAKOV","YAKOLEV","VODKA","TOKAREV","GREGARIN","TERESHKOVA","COSMONAUT","SPUTNIK","RASPUTIN","CATHERINE","DOSTOEVSKY","PASTERNAK","URAL","MIKOYAN","TUPOLOV","POTEMKIN","BAKUNIN","DRAGO","IVAN","SHARAPOVA","GLASNOST","TZAR","SOYUZ","MIR","BABAYAGA"];
    var target;         //when word is picked, target will reference element of array.
    var choice;         //represents letter for onkeyp event..a.k.a what player picks.
    var word = "Letters: ";     //String for tracking letters that have already been guessed += used to concat choices.
    var playing = true;         //boolean to use in case I need to stop game
    var scoreBox = ["left", "middle", "right"];     //array for scorebox visibilty change...


//math function to get random int for worBank[target]
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//Function to initialize actions on game start
function gameSetup(){
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("start").style.display = "none";
    document.getElementById("restart").style.display = "inline-block";
    document.getElementById("tries").innerHTML = "Tries: " + tries;
    document.getElementById("score").innerHTML = "Score: " + score;
    letters = [];
    document.getElementById("letters").innerHTML = "Letters: ";
    document.getElementById("guessMe").innerHTML ="";
    target = getRandomInt(28);
    
    console.log(wordBank[target]);

    for(var i = 0; i < scoreBox.length; i++){
        document.getElementById(scoreBox[i]).style.visibility = "visible";
    }

    for(var blanks = 0; blanks <= wordBank[target].length; blanks++){
                
        document.getElementById("guessMe").innerHTML += "_";

    }
}

//GameStart is my MAIN function.
//on click game begins, start button is now a restart button.  

function gameStart(){
    gameSetup();

    document.onkeyup = function(event) {
                
        //Change guessMe to one of the words in the wordbank.
        
        //display letters when pressed.    
        choice = event.key;    
        letters.push(choice);
        document.getElementById("letters").innerHTML = word + letters;
        document.getElementById("tries").innerHTML = "Tries: " + tries;
    

}

    //display score board and change start button to restart button tag.
    
    
    //pick a random number 1-28 to that corresponds to a letter from var wordbank.
    
   
                

    //update scorebox array and loop for making it visible.
    

    
    //set initial score and tries. Create letters array and word bank array.
    

   
    
    
    
    
    
    //math random function to get wordbank word and assign to target in game word choice loop.
    
   
    
   
}