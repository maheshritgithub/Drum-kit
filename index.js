let len = document.querySelectorAll(".drum").length;

for (let i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clic);
}

function clic() {
    let innerContent = this.innerHTML;
    makeSound(innerContent);
    animation(innerContent);
   
}

document.addEventListener("keypress", myfunc)

function myfunc(event){
    makeSound(event.key);
    animation(event.key);
}

function makeSound(val){

    switch (val) {
        case "w": {
            let audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
           
        }

        case "a": {
            let audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        } 

        case "s": {
            let audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        }

        case "d": {
            let audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        }

        case "j": {
            let audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        }

        case "k": {
            let audio7 = new Audio("sounds/crash.mp3");
            audio7.play();
            break;
        }

        case "l": {
            let audio8 = new Audio("sounds/kick-bass.mp3");
            audio8.play();
            break;
        }
    }

}

function animation(value) {
    // Get the drum element with the corresponding class name
    let drumElement = document.querySelector("." + value);
 
    // Check if the drum element exists
    if (drumElement) {
       // Add the "pressed" class to create the visual effect
       drumElement.classList.add("pressed");
 
       // Remove the "pressed" class after a short delay to reset the effect
       setTimeout(function() {
          drumElement.classList.remove("pressed");
       }, 100); // You can adjust the delay as needed
    }
 }
 