//variable declarations

    var tries = 5;      //# of incorrect guesses, when reaches 0 you lose comrade.
    var score = 0;      //# of successfully guessed words.
    var guessThis;      //Word to be guessed
    var letters = [];   //stores letters that have been picked
                        //List of words.
    var guessThis;
    var wordBank = ["TOLSTOY","MOSCOW","STALIN","LENNIN","STALINGRAD","LENNINGRAD","KALISHNAKOV","YAKOLEV","VODKA","TOKAREV","GREGARIN","TERESHKOVA","COSMONAUT","SPUTNIK","RASPUTIN","CATHERINE","DOSTOEVSKY","PASTERNAK","URAL","MIKOYAN","TUPOLOV","POTEMKIN","BAKUNIN","DRAGO","IVAN","SHARAPOVA","GLASNOST","TZAR","SOYUZ","MIR","BABAYAGA"];
    var target;         //when word is picked, target will reference element of array.
    var choice;         //represents letter for onkeyp event..a.k.a what player picks.
    var word =  [];     //fills in with letters player picks, match them all and get points added to score.
    var playing = true;         //boolean to use in case I need to stop game
    var scoreBox = ["left", "middle", "right"];     //array for scorebox visibilty change...


//math function to get random int for worBank[target]
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//Function to initialize actions on game start, adds scoreboard by making it visible and creating inner html. Also resets values for letters array/picks a word.
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
    guessThis = wordBank[target];
   
    
    console.log(guessThis); //GAME GENIE ONLY NECESSARY FOR FAT AMERICANS.

    for(var i = 0; i < scoreBox.length; i++){
        document.getElementById(scoreBox[i]).style.visibility = "visible";
    }

    //Sets up the blanks equal to length of the word.
    for(var blanks = 0; blanks <= wordBank[target].length - 1; blanks++){
        word[blanks] = "_"
    
    }
    
    document.getElementById("guessMe").innerHTML =  word;
}


//Updates score
function updateScore(){
    document.getElementById("letters").innerHTML = "Letters: " + letters;
    document.getElementById("tries").innerHTML = "Tries: " + tries;
    document.getElementById("guessMe").innerHTML = word;
}


//GameStart is my MAIN function.
function gameStart(){
    gameSetup();
    
    //get input from player and track letters player picks by pushing in letters array.
    document.onkeyup = function(event) {
        choice = event.key;    
        letters.push(choice);
        //loop through wordbank target checking for match to choice.
        for(var x = 0; x <= wordBank[target].length - 1;x++){
            if(guessThis.charAt(x) === choice.toUpperCase()){
                console.log(x)  //debug my for loop contents.
                word[x] = choice;
            }
        }
        updateScore();
        console.log(word);
        //Update Score
    }

}