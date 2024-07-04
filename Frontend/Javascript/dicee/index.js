var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSource1 = "./images/dice" + randomNumber1 + ".png";
var randomDiceSource2 = "./images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceSource1);
image2.setAttribute("src", randomDiceSource2);

// judgement
if (randomNumber1 == randomNumber2) {
    var result = document.querySelector("h1").innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Play 1 Wins!";
} else {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}