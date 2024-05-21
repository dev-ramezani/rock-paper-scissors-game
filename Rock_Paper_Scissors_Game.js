var Y_Score = 0;
var S_Score = 0;

var Rock = function(event) {
    let random = Math.random() * 3;
    document.getElementById('result').style.display = "block";
    document.getElementById('SScore').style.display = "inline";
    document.getElementById('UScore').style.display = "inline";
    document.getElementById('UChoice').innerHTML = "Rock";
    if( random <= 1 ) {
        document.getElementById('SChoice').innerHTML = "Rock";
        document.getElementById('result').innerHTML = "Result is tied";}
    else if ( random > 1 && random <= 2) {
        document.getElementById('SChoice').innerHTML = "Paper";
        document.getElementById('result').innerHTML = "Result: computer wins"; 
        S_Score++;
        document.getElementById('ScoreS').innerHTML = S_Score; }
    else if ( random > 2 && random <= 3) {
     document.getElementById('SChoice').innerHTML = "Scissors";
        document.getElementById('result').innerHTML = "Result: You wins"; 
        Y_Score++;
        document.getElementById('ScoreU').innerHTML = Y_Score; }
}

var Paper = function(event) {
    let random = Math.random() * 3;
    document.getElementById('result').style.display = "block";
    document.getElementById('SScore').style.display = "inline";
    document.getElementById('UScore').style.display = "inline";
    document.getElementById('UChoice').innerHTML = "Paper";
    if( random <= 1 ) {       
        document.getElementById('SChoice').innerHTML = "Rock";
        document.getElementById('result').innerHTML = "Result: You wins"; 
        Y_Score++;
        document.getElementById('ScoreU').innerHTML = Y_Score; }
    else if ( random > 1 && random <= 2) {         
       document.getElementById('SChoice').innerHTML = "Paper";
       document.getElementById('result').innerHTML = "Result is tied"; }
    else if ( random > 2 && random <= 3) {         
       document.getElementById('SChoice').innerHTML = "Scissors";
       document.getElementById('result').innerHTML = "Result: computer wins"; 
       S_Score++;
       document.getElementById('ScoreS').innerHTML = S_Score; }
}

var Scissors = function(event) {
    let random = Math.random() * 3;
    document.getElementById('result').style.display = "block";
    document.getElementById('SScore').style.display = "inline";
    document.getElementById('UScore').style.display = "inline";
    document.getElementById('UChoice').innerHTML = "Scissors";
    if( random <= 1 ) {         
        document.getElementById('SChoice').innerHTML = "Rock";
        document.getElementById('result').innerHTML = "Result: computer wins"; 
        S_Score++;
        document.getElementById('ScoreS').innerHTML = S_Score; }
    else if ( random > 1 && random <= 2) { 
        document.getElementById('SChoice').innerHTML = "Paper";
        document.getElementById('result').innerHTML = "Result: You wins"; 
        Y_Score++;
        document.getElementById('ScoreU').innerHTML = Y_Score; }
    else if ( random > 2 && random <= 3) {
        document.getElementById('SChoice').innerHTML = "Scissors";
        document.getElementById('result').innerHTML = "Result is tied"; }
}