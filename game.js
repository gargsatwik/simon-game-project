var start = false;
var patternList = [];
var userEnteredPattern = [];
var coloursList = ["#blue", "#red", "#green", "#yellow"];

function generatePattern(){
    var randomNumber = Math.floor(Math.random()*4);
    patternList.push(coloursList[randomNumber]);
}

function showPattern(){
    addEffects(patternList[patternList.length-1], effect);
}

function addEffects(id, effect){
    $(id).addClass(effect);
    setTimeout(function(){
        $(id).removeClass(effect);
    }, 100);
    if (effect==='pressed'){
        var audio = new Audio("sounds/"+id.slice(1)+".mp3");
        audio.play();
    } else if (effect==='game-over') {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
    }
    
}
