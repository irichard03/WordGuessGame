

//on click game begins, start button is now a restart button.
function gameStart(){
    
    //display score board and change button tag.
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("start").innerHTML = "Restart";
    document.getElementById("start").id = "restart";
    

    //update scorebox with a loop instead of 3 statements. 
    var scoreBox = ["left", "middle", "right"];

    for(var i = 0; i < scoreBox.length; i++){
        document.getElementById(scoreBox[i]).style.visibility = "visible";
    }

    //set initial score and tries. Create letters array and word bank array.
    var tries = 5;
    var score = 0;
    var letters = [];
    //21 entries 
    var wordBank = ["TOLSTOY","MOSCOW","STALIN","LENNIN","STALINGRAD","LENNINGRAD","KALISHNAKOV","YAKOLEV","VODKA","TOKAREV","GREGARIN","TERESHKOVA","COSMONAUT","SPUTNIK","RASPUTIN","CATHERINE","DOSTOEVSKY","PASTERNAK","URAL","MIKOYAN","TUPOLOV","POTEMKIN","BAKUNIN","DRAGO","IVAN","SHARAPOVA","GLASNOST","TZAR","SOYUZ","MIR","BABAYAGA"];
    var target;
    var choice;
    var word = "Letters: ";
    var playing = true;

    document.getElementById("tries").innerHTML = "Tries: " + tries;
    document.getElementById("score").innerHTML = "Score: " + score;
    
    //math random function to get wordbank word and assign to target in gamw word choice loop.
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    document.onkeyup = function(event) {
                
                //Change guessMe to one of the words in the wordbank.
                target = getRandomInt(28);
                document.getElementById("guessMe").innerHTML = wordBank[target];    

               
                    
                choice = event.key;    
                letters.push(choice);
                document.getElementById("letters").innerHTML = word + letters;
                document.getElementById("tries").innerHTML = "Tries: " + tries;
            
        
    }
    
   
}