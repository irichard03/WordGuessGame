

//on click game begins, start button is now a restart button.
function gameStart(){
    
    //display score board and change start button to restart button tag.
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("start").style.display = "none";
    document.getElementById("restart").style.display = "inline-block";
    target = getRandomInt(28);
                

    //update scorebox with a loop instead of 3 statements, mostly because I couldn't figure out foreach.
    var scoreBox = ["left", "middle", "right"];

    for(var i = 0; i < scoreBox.length; i++){
        document.getElementById(scoreBox[i]).style.visibility = "visible";
    }

    //set initial score and tries. Create letters array and word bank array.
    var tries = 5;
    var score = 0;
    var letters = [];
    //21 entries apparently all I know about russia is from WW2, their Space program, Counterstrike and literature I haven't red.""
    var wordBank = ["TOLSTOY","MOSCOW","STALIN","LENNIN","STALINGRAD","LENNINGRAD","KALISHNAKOV","YAKOLEV","VODKA","TOKAREV","GREGARIN","TERESHKOVA","COSMONAUT","SPUTNIK","RASPUTIN","CATHERINE","DOSTOEVSKY","PASTERNAK","URAL","MIKOYAN","TUPOLOV","POTEMKIN","BAKUNIN","DRAGO","IVAN","SHARAPOVA","GLASNOST","TZAR","SOYUZ","MIR","BABAYAGA"];
    var target;
    var choice;
    var word = "Letters: ";
    var playing = true;

    document.getElementById("tries").innerHTML = "Tries: " + tries;
    document.getElementById("score").innerHTML = "Score: " + score;
    
    //math random function to get wordbank word and assign to target in game word choice loop.
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    document.onkeyup = function(event) {
                
                //Change guessMe to one of the words in the wordbank.
                
                for(var blanks = 0; blanks <= wordBank[target].length; blanks++){
                
                document.getElementById("guessMe").innerHTML = wordBank[target];

                }
                
                
                


               
                    
                choice = event.key;    
                letters.push(choice);
                document.getElementById("letters").innerHTML = word + letters;
                document.getElementById("tries").innerHTML = "Tries: " + tries;
            
        
    }
    
   
}