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

// Event Listeners
document.getElementById('classes').addEventListener('change', function() {classBonus(document.getElementById('classes').value);})
document.getElementById('races').addEventListener('change', function() {raceBonus(document.getElementById('races').value);})
document.getElementById('backgrounds').addEventListener('change', function() {backgroundBonus(document.getElementById('backgrounds').value);})

// Parse Class Selection
function classBonus(c) {

    switch(c){
        case 'Barbarian':
            document.getElementById('hit-type').innerHTML = "1d12"
            document.getElementById('max-hp').innerHTML = 12 + con.mod;
            document.getElementById('hp').innerHTML = 12 + con.mod;
            document.getElementById('').innerHTML;
            break;
        case 'Bard':

            break;
        case 'Cleric':

            break;
        case 'Druid':

            break;
        case 'Fighter':

            break;
        case 'Monk':

            break;
        case 'Paladin':

            break;
        case 'Ranger':

            break;
        case 'Rogue':

            break;
        case 'Sorcerer':

            break;
        case 'Warlock':

            break;
        case 'Wizard':

            break;
    }
}

// Parse Race Selection
function raceBonus(r) {
    switch(r) {
        case 'Aarakocra':
            document.getElementById('dex').value = parseInt(document.getElementById('dex').value) + 2;
            document.getElementById('wis').value = parseInt(document.getElementById('wis').value) + 1;
            document.getElementById('speed').innerHTML = '25ft';
            document.getElementById('wn1').value = 'Talons'
            document.getElementById('ab1').value = document.getElementById('pro-bonus').value.replace('+', '');
            document.getElementById('dt1').value = '1d4 slashing';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Languages: Common, Aarakocra, Auran
                Abilities: 50ft speed while flying`;
            break;
        case 'Dragonborn':
            document.getElementById('cha').value = parseInt(document.getElementById('cha').value) + 1;
            document.getElementById('str').value = parseInt(document.getElementById('str').value) + 2;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Languages: Common, Draconic
                Abilities: Breath Weapon`;
            break;
        case 'Dwarf':
            document.getElementById('con').value = parseInt(document.getElementById('con').value) + 2;
            document.getElementById('speed').innerHTML = '25ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Dwarvis
            Abilities: Darkvision, "Dwarven Resilience", "Stonecunning"  weapons: Battleaxe, handaxe, light hammer, and warhammer`;
            break;
        case 'Elf':
            document.getElementById('dex').value = parseInt(document.getElementById('dex').value) + 2;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('perc').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Elvish
            Abilities: Darkvision, "Fey Ancestry", "Trance"`;
            break;
        case 'Genasi':
            document.getElementById('con').value = parseInt(document.getElementById('con').value) + 2;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Primordial
            Abilities: `;
            break;
        case 'Gnome':
            document.getElementById('int').value = parseInt(document.getElementById('int').value) + 2;
            document.getElementById('speed').innerHTML = '25ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Gnomish
            Abilities: Darkvision, "Gnome Cunning"`;
            break;
        case 'Goliath':
            document.getElementById('str').value = parseInt(document.getElementById('str').value) + 2;
            document.getElementById('con').value = parseInt(document.getElementById('con').value) + 1;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('athl').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Giant
            Abilities: "Stone\'s Endurance", "Powerful Build", "Mountain Born"`;
            break;
        case 'Half-Elf':
            document.getElementById('cha').value = parseInt(document.getElementById('cha').value) + 2;
            window.alert('you can assign two more ability points!  and gain proficiency in two skills!')
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Elvish, one extra
            Abilities: Darkvision, "Fey Ancestry"`;
            break;
        case 'Halfling':
            document.getElementById('dex').value = parseInt(document.getElementById('dex').value) + 2;
            document.getElementById('speed').innerHTML = '25ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Halfling
            Abilities: "Lucky", "Brave", "Halfling Nimbleness"`;
            break;
        case 'Half-Orc':
            document.getElementById('str').value = parseInt(document.getElementById('str').value) + 2;
            document.getElementById('con').value = parseInt(document.getElementById('con').value) + 1;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('inti').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Orc
            Abilities: "Darkvision", "Relentless Endurance", "Savage Attacks"`;
            break;
        case 'Human':
            document.getElementById('str').value = parseInt(document.getElementById('str').value) + 1;
            document.getElementById('dex').value = parseInt(document.getElementById('dex').value) + 1;
            document.getElementById('con').value = parseInt(document.getElementById('con').value) + 1;
            document.getElementById('int').value = parseInt(document.getElementById('int').value) + 1;
            document.getElementById('wis').value = parseInt(document.getElementById('wis').value) + 1;
            document.getElementById('cha').value = parseInt(document.getElementById('cha').value) + 1;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, one of your choice  Abilities: `;
            break;
        case 'Tiefling':
            document.getElementById('int').value = parseInt(document.getElementById('int').value) + 1;
            document.getElementById('cha').value = parseInt(document.getElementById('cha').value) + 2;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, infernal
            Abilities: "Darkvision", "Hellish Resistance", "Infernal Legacy"`;
            break;
    }
}

// Parse Background Selection
function backgroundBonus(b) {
    switch(b) {
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
        case '':
            break;
    }
}

// Putting the Ability Scores into an Array
var stats = [str, dex, con, int, wis, cha];

updateStats()

for (var i = 0; i < stats.length; i++) {
    document.getElementById(stats[i].name).addEventListener("change", function(event){
        updateStats();
    })
}

// Calculates the Ability Modifier
function modGen(s) {
    return Math.floor((s-10)/2);
}

// Calculates Saving Throw and Skill Bonuses
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
function updateStats() {

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
