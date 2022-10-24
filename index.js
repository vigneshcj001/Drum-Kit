var numOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var wAudio = new Audio("sounds/crash.mp3");
      wAudio.play();

      break;

    case "e":
      var eAudio = new Audio("sounds/kick-bass.mp3");
      eAudio.play();
      break;

    case "r":
      var rAudio = new Audio("sounds/snare.mp3");
      rAudio.play();
      break;

    case "t":
      var tAudio = new Audio("sounds/tom-1.mp3");`1`
      tAudio.play();
      break;

    case "y":
      var yAudio = new Audio("sounds/tom-2.mp3");
      yAudio.play();
      break;

    case "u":
      var uAudio = new Audio("sounds/tom-3.mp3");
      uAudio.play();
      break;

    case "i":
      var iAudio = new Audio("sounds/tom-4.mp3");
      iAudio.play();
      break;
      default: console.log(key);
  }
}

function buttonAnimation(currentKey){
  var activeButton =document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

