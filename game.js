var start = false;
var patternList = [];
var userEnteredPattern = [];
var coloursList = ["#blue", "#red", "#green", "#yellow"];
var level = 0;

$(document).keypress(function(){
    if (!start){
        start = true;
        $("#level-title").text("Press A key to start.");
        generatePattern();
    }
});

$(".btn").click(function(){
        handler(this.id);
});

function handler(colour){
    userEnteredPattern.push("#"+colour);
    addEffects("#"+colour, "pressed");
    checkPattern(userEnteredPattern.length-1);
}    

function checkPattern(lastUserEnteredIndex){
    if (userEnteredPattern[lastUserEnteredIndex]===patternList[lastUserEnteredIndex]){
        console.log("success");
        if (userEnteredPattern.length===patternList.length){
            setTimeout(function(){
                generatePattern();
            }, 1000);
        }
    } else {
        endGame();
    }
}

function endGame(){
        start = false;
        level = 0;
        patternList = [];
        userEnteredPattern = [];
        $("h1").text("Game Over, press any key to restart.");
        addEffects("body", "game-over");
}

function generatePattern(){
    userEnteredPattern = [];
    level++;
    $("h1").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    patternList.push(coloursList[randomNumber]);
    addEffects(patternList[patternList.length-1], "pressed");
}

function addEffects(id, effect){
    $(id).addClass(effect);
    setTimeout(function(){
        $(id).removeClass(effect);
    }, 100);
    if (effect==="pressed"){
        var audio = new Audio("sounds/"+id.slice(1)+".mp3");
        audio.play();
    } else if (effect==='game-over') {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
    }
}
