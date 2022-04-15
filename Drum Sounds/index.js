// This targets/finds all the elements that have the class name .drum. The length is for showing/counts how many elements we got with the class drum.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


// This for loop block of code loops through each of the class drums untill it reaches/searches through each of the drums and will run the function for each of the buttons.
for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { // the word click is the event that we're detecting, which is the first input.
        
    var buttonInnerHTML = this.innerHTML; // this is the button that triggers the event.

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    });
}

// This section detects when the keyboard has been pressed

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {


    switch (key) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break; // this breaks out of the code if the w button isn't pressed.
        
            case "a":
                var kickBase = new Audio("sounds/kick-bass.mp3");
                kickBase.play();
                break;

            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            
            default: console.log(buttonInnerHTML) // this is like else. in this case, if none of the buttons are clicked on, then it will just go back to its default.
                
        }
}

// This section is used to animate the buttons

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
// This part of the code will remove the animation of the css pressed class in roughly 0.1 seconds, reverting it back to it original look.
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}