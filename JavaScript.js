// Change the color of the Hero Title by Clicking
var myTitle = document.getElementById("hero-title");

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

// New JavaScript app I'm adding Per Ben's Assignment
// Fills out the DnD character sheet on the Page

//creation of the Ability Score Object
function Stat(score){
    this.abilityScore = score;
    this.mod = modGen(score);
}

function submitStats() {
    var str = new Stat(document.getElementById('str').value);
    var dex = new Stat(document.getElementById('dex').value);
    var con = new Stat(document.getElementById('con').value);
    var int = new Stat(document.getElementById('int').value);
    var wis = new Stat(document.getElementById('wis').value);
    var cha = new Stat(document.getElementById('cha').value);

    document.getElementById('strMod').innerHTML = str.mod;
    document.getElementById('dexMod').innerHTML = dex.mod;
    document.getElementById('conMod').innerHTML = con.mod;
    document.getElementById('intMod').innerHTML = int.mod;
    document.getElementById('wisMod').innerHTML = wis.mod;
    document.getElementById('chaMod').innerHTML = cha.mod;
}

//Calculates the Ability Modifier
function modGen(s) {

    return Math.floor((s-10)/2);

}

submitStats()
