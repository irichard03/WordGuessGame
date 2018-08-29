//variable declarations sorry for so many.

    var tries = 5;      //# of incorrect guesses, when reaches 0 you lose comrade.
    var score = 0;      //# of successfully guessed words.
    var guessThis;      //Word to be guessed
    var letters;        //stores letters that have been picked
                        //List of words.
    var guessThis;      //the word player tries to find
    var myMessage;      //message string that changes with score
    var failCheck;      //holds result of search, if negative letter wasn't found and score tries should decrement
    var checker;        //stores position from .search method, if -1 score drops
    var wordBank = ["TOLSTOY","MOSCOW","STALIN","LENNIN","STALINGRAD","LENNINGRAD","KALISHNAKOV","YAKOLEV","VODKA","TOKAREV","GREGARIN","TERESHKOVA","COSMONAUT","SPUTNIK","RASPUTIN","CATHERINE","DOSTOEVSKY","PASTERNAK","URAL","MIKOYAN","TUPOLEV","POTEMKIN","BAKUNIN","DRAGO","IVAN","SHARAPOVA","GLASNOST","TZAR","SOYUZ","MIR","BABAYAGA"];
    var target;         //when word is picked, target will reference element of array.
    var choice;         //represents letter for onkeyp event..a.k.a what player picks.
    var word     //fills in with letters player picks, match them all and get points added to score.
    
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
    
    word = [];
    letters = [];
    document.getElementById("letters").innerHTML = "Letters: ";
    
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
    
    document.getElementById("guessMe").innerHTML =  word.toString().replace(/,/g,"");
    
}

//changes text based on score.
function textChange(){
    if(score ===1){
        myMessage = "We are winning друзья!"
    }

    if(score ===2){
        myMessage = "You want a prize? Get to 5 Давай!"
    }

    if(score ===3){
        myMessage = "You will see Montana очень."
    }

    if(score ===4){
        myMessage = "I hope you like техно."
    }
}


//Updates score
function updateScore(){
    
    //successful guess!
    if(failCheck === guessThis){
        score++;
        textChange();
        document.getElementById("message").innerHTML = myMessage;
        tries = 5;
        if(score === 5){
            document.getElementById("message").innerHTML = "You train with спецна́з now!";
            document.getElementById("guessMe").style.visibility = "hidden";
            document.getElementById("guessMe").style.display = "none";
            document.getElementById("reward").style.visibility = "visible";
            document.getElementById("reward").style.display = "inline-block";



        }
        gameSetup();

    }

    //unsuccessful guess!
    if(checker === -1){
        tries --;
        if(tries === 0){
            
            document.getElementById("message").innerHTML = "You have lost подводная лодка!";
            document.getElementById("message").style.fontSize = "2em";
            score =0;
            tries =5;
            gameSetup();
        }
    }

    document.getElementById("letters").innerHTML = "Letters: " + letters;
    document.getElementById("tries").innerHTML = "Tries: " + tries;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("guessMe").innerHTML = failCheck;

    
}


//GameStart is my MAIN function.
function gameStart(){
    gameSetup();
    
    //get input from player and track letters player picks by pushing in letters array.
    document.onkeyup = function(event) {
        choice = event.key;    
        letters.push(choice.toUpperCase());
        //loop through wordbank target checking for match to choice, checking each character of string
        for(var x = 0; x <= wordBank[target].length - 1;x++){
            
            if(guessThis.charAt(x) === choice.toUpperCase()){
                //console.log(x)  //debug my for loop contents.
                word[x] = choice.toUpperCase();
            }
            
        
        }
        failCheck = word.toString().replace(/,/g,"").toUpperCase();
        checker = failCheck.search(choice.toUpperCase());
        console.log(failCheck);
        console.log(checker);


        //console.log(tries)
        updateScore();
        //console.log(word);
        
    }

}