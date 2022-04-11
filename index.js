
// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I am Clicked");


// using the anonymous function 
// document.querySelector("button").addEventListener("click",function() {
// alert("I got Clicked");
// });



// var numberOfButtons = document.querySelectorAll(".drum").length;


// for (var i=0;i<numberOfButtons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         // var audio = new Audio('sounds/tom-1.mp3');
//         // audio.play();;
//     })
// }


// var numberOfButtons = document.querySelectorAll(".drum").length;


// for (var i = 0; i < numberOfButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         console.log(this);
// this.style.color="white";
//     });

// USING SWITCH  AND CASE STATEMENTS 
var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            
            var buttonInnerHTML = this.innerHTML;
            makeSound(buttonInnerHTML);

            buttonAnimation(buttonInnerHTML);
            
        });

}
// key parameter of the event-- keypress
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key){
    switch (key) {
        case "w":
            var audiotom1 = new Audio("sounds/tom-1.mp3");
            audiotom1.play();
            break;
        case "a":
            var audiotom2 = new Audio("sounds/tom-2.mp3");
            audiotom2.play();
            break;
        case "s":
            var audiotom3 = new Audio("sounds/tom-3.mp3");
            audiotom3.play();
            break;
        case "d":
            var audiotom4 = new Audio("sounds/tom-4.mp3");
            audiotom4.play();
            break;
        case "j":
            var audiocrash = new Audio("sounds/crash.mp3");
            audiocrash.play();
            break;
        case "k":
            var audiokickbass = new Audio("sounds/kick-bass.mp3");
            audiokickbass.play();
            break;
        case "l":
            var audiosnare = new Audio("sounds/snare.mp3");
            audiosnare.play();
            break;
    
        default: console.log(button.innerHTML);
            break;
    }
    


}
function buttonAnimation (currentKey){
    var activeButton =  document.querySelector("."+ currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
 }




    

