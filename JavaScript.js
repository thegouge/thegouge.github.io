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

// Array of skills
var skills = [
    'str-st', 'str',
    'dex-st', 'dex',
    'con-st', 'con',
    'int-st', 'int',
    'wis-st', 'wis',
    'cha-st', 'cha',
    'acro', 'dex',
    'anim', 'wis',
    'arca', 'int',
    'athl', 'str',
    'dece', 'cha',
    'hist', 'int',
    'insi', 'wis',
    'inti', 'cha',
    'inve', 'int',
    'medi', 'wis',
    'natu', 'int',
    'perc', 'wis',
    'perf', 'cha',
    'pers', 'cha',
    'reli', 'int',
    'hand', 'dex',
    'stea', 'dex',
    'surv', 'wis'
]

// Creation of the Ability Score Object
function Stat(name, score){
    this.name = name;
    this.abilityScore = score;
    this.mod = modGen(score);
}

// Creating all the ability scores
var str = new Stat('str', document.getElementById('str').value);
var dex = new Stat('dex', document.getElementById('dex').value);
var con = new Stat('con', document.getElementById('con').value);
var int = new Stat('int', document.getElementById('int').value);
var wis = new Stat('wis', document.getElementById('wis').value);
var cha = new Stat('cha', document.getElementById('cha').value);

// Putting the Ability Scores into an Array
var stats = [str, dex, con, int, wis, cha];


// Calculates the Ability Modifier
function modGen(s) {
    return Math.floor((s-10)/2);
}

// Sets Saving Throw and Skill Bonuses
function addPro(nam, sta) {
    var pro = document.getElementById('pro-bonus').value;
    pro = parseInt(pro.replace('+', ''));

    var box = document.getElementById(nam);

    var sta = sta + '.mod';
    var bon = eval(sta);

    if (box.checked == true) {
        bon = bon + pro;
        if (bon >= 0){
            bon = String(+ bon);
        }
        else {
            bon = String(bon);
        }
    }
    else {
        if (bon >= 0){
            bon = String(+ bon);
        }
        else {
            bon = String(bon);
        }
    }
    document.getElementById(nam + '-mod').innerHTML = bon;
}

// function that resolves calculations
function submitStats() {

    // Calcualte Ability Modifiers
    for(var i = 0; i < stats.length; i++){
        stats[i].abilityScore = document.getElementById(stats[i].name).value;
        stats[i].mod = modGen(stats[i].abilityScore);
        document.getElementById(stats[i].name + 'Mod').innerHTML = stats[i].mod;
    }

    // Calculate Skill Modifiers
    for(var i = 0; i < skills.length; i += 2){
        addPro(skills[i], skills[i+1]);
    }

    // Calculating initiative Mod
    document.getElementById('initiative').innerHTML = dex.mod;

    // calculate Passive Perception
    var perception = document.getElementById('perc');
    if(perc.checked == true){
        var pro = document.getElementById('pro-bonus').value;
        pro = parseInt(pro.replace('+', ''));
    }
    else {
        var pro = 0;
    }
    document.getElementById('pasPer').innerHTML = 10 + wis.mod + pro


}

submitStats()
