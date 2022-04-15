// This generates a random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

// This will output the images within the images folder from dice1.png-dice6.png
var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource);

// This also generates a random number between 1-6 but is used for the second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

// This is a if statement for if player 1 or player 2 wins or draws

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player one wins!"
} 

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player two wins!"
} 

else {
    (randomNumber1 == randomNumber2) 
    document.querySelector("h1").innerHTML = "Its a draw!"
}