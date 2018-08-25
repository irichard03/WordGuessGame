

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

    //set initial score and tries.
    var tries = 5;
    var score = 0;
    var letters = ["","","","",""];
    
    document.getElementById("tries").innerHTML = "Tries: " + tries;
    document.getElementById("score").innerHTML = "Score: " + score;
   
    document.onkeyup = function(event) {
    
        for(var x = 0; x <= tries; x++ ){
        letters[x] = event.key;
        }
        
        document.getElementById("letters").innerHTML = "Letters: " + letters[0] + " " + letters[1] + " " + letters[2] + " " + letters[3] + " " + letters[4];
    }
    
   
}

