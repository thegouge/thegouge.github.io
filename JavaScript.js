<<<<<<< HEAD
var myTitle = document.getElementById("hero-title");
=======
var myTitle = document.getElementById("heor-title");
>>>>>>> 67f270e89c691ae61108989b6f42978bc0370035

myTitle.addEventListener("click", function (event) {
  event.target.style.color = randomColor();
});

// Return a random number between 0 and 255.
function randomColorNumber() {
  return Math.round(Math.random() * 255);
}

// Return a string in the format of `rgb(256,256,256);`
function randomColor() {
  var red = randomColorNumber();
  var green = randomColorNumber();
  var blue = randomColorNumber();

  return "rgb(" + red + "," + green + "," + blue + ")";
}
