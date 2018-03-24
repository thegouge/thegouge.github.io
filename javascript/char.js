// jshint esversion: 6
// Fills out the DnD character sheet on the Page

// Puts data from the 'skills' JSON into an object
var skills = {
    "savingThrows": [],
    "skills": []
};
$.getJSON('../javascript/data/skills.json', function(data) {
        data.savingThrows.map(function(save) {
            skills.savingThrows.push(save);
        });
        data.skills.map(function(skill) {
            skills.skills.push(skill);
        });
    });

// Puts data from the 'races' JSON into an Array
var races;
$.getJSON("../javascript/data/races.json", function(json) {
    races = json;

    // Populates datalist for race selection
    races.forEach(element => {
        var item = document.createElement("option");
        item.setAttribute('value', element.name);
        item.setAttribute('id', element.name);
        item.setAttribute('class', 'race');
        document.getElementById('race-list').appendChild(item);
    });
});

// Puts Data from the Classes JSON into an Array
var classes;
$.getJSON("../javascript/data/classes.json", function(json) {
    classes = json;

    //Populates datalist for class selection
    classes.forEach(element => {
        var item = document.createElement("option");
        item.setAttribute('value', element.name);
        item.setAttribute('id', element.name);
        item.setAttribute('class', 'class');
        document.getElementById('class-list').appendChild(item);
    });
});

var backgrounds;
$.getJSON("../javascript/data/backgrounds.json", function (json) {
    backgrounds = json;

    // Populates datalist for background selection
    backgrounds.forEach(element => {
        var item = document.createElement("option");
        item.setAttribute('value', element.name);
        item.setAttribute('id', element.name.replace(/' '/g, '-'));
        item.setAttribute('class', 'background');
        document.getElementById('background-list').appendChild(item);
    });
});


// Creation of the Ability Score Object
function Stat(name, score){
    this.name = name;
    this.abilityScore = score;
    this.mod = modGen(score);
}

// Calculates the Ability Modifier
function modGen(s) {
    return Math.floor((s - 10) / 2);
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

// Event Listeners
for (var i = 0; i < stats.length; i++) {
    document.getElementById(stats[i].name).addEventListener("change", function (event) {
        updateStats();
    });
}
document.getElementById('classes').addEventListener('change', function()
                    {classBonus(document.getElementById('classes').value);});
document.getElementById('races').addEventListener('change', function()
                    {raceBonus(document.getElementById('races').value);});
document.getElementById('backgrounds').addEventListener('change', function()
                    {backgroundBonus(document.getElementById('backgrounds').value);});

// Parse Class Selection
// TODO: add a skill choosing popup
function classBonus(c) {

    // initializes class selection from json
    var cl = classes.find(function(item){return item.name == c;});
    
    // Placeholder for skill choosing popup window
    var skillList = cl.skills.choice.map(function(option){return option.name;});
    window.alert(`Choose ${cl.skills.number} of any of the following skills: ${skillList}`);

    // Set each element to an easier to read variable
    var saves = cl.throws;
    var otherPro = document.getElementById('otherPro').innerHTML;
    var spells = document.getElementById('otherAtks').innerHTML;
    var equip = document.getElementById('equip').innerHTML;
    var traits = document.getElementById('traits').innerHTML;

    // Update elements based on json info
    document.getElementById('hit-type').innerHTML = cl.hitDice;
    document.getElementById('max-hp').value = cl.hp + con.mod;
    document.getElementById('hp').value = cl.hp + con.mod;
    cl.throws.forEach((item) => {
        document.getElementById(item.id).checked = true;
    });
    otherPro = otherPro + cl.proficiencies;
    spells = spells + cl.altAttacks;
    equip = equip + cl.equipment;
    traits = traits + cl.other;

    // Apply updated info to DOM
    document.getElementById('otherPro').innerHTML = otherPro;
    document.getElementById('otherAtks').innerHTML = spells;
    document.getElementById('equip').innerHTML = equip;
    document.getElementById('traits').innerHTML = traits;
}

// Parse Race Selection
function raceBonus(r) {

    // initialize race choice from json
    var race = races.find(function(item){return item.name == r;});

    // Set each element to an easier to read variable
    var bonuses = race.stats;
    var otherPro = document.getElementById('otherPro').innerHTML;
    var traits = document.getElementById('traits').innerHTML;

    // Update elements based on json info
    for(var i = 0; i < bonuses.length; i++) {
        document.getElementById(bonuses[i].name).value =
        parseInt(document.getElementById(race.stats[i].name).value) + race.stats[i].bonus;
    }
    document.getElementById('speed').innerHTML = race.speed;
    otherPro = otherPro + race.languages;
    traits = traits + race.other;

    // Apply Updated info to DOM
    document.getElementById('otherPro').innerHTML = otherPro;
    document.getElementById('traits').innerHTML = traits;   
}

// Parse Background Selection
function backgroundBonus(b) {

    // initialize background selection from json
    var background = backgrounds.find(function (item) { return item.name == b; });

    // Set each element to an easier to read variable
    var otherPro = document.getElementById('otherPro').innerHTML;
    var traits = document.getElementById('traits').innerHTML;
    var equip = document.getElementById('equip').innerHTML;
    var gold = document.getElementById('gold').value;

    // Exception for 'Haunted' Background
    if (background.name == "Haunted"){
        window.alert(`Choose one:
                Arcana
                Investigation
                Religion
                Survival`);
    } else {
        // update skill proficiencies
        background.skills.forEach(function(element) {
            document.getElementById(element.id).checked = true;
        });
    }
    // Update elements based on json info
    gold = String(parseInt(gold + background.gold));
    otherPro = otherPro + background.pros;
    equip = equip + background.equip;
    traits = traits + background.other;

    // Apply Updates to DOM
    document.getElementById('otherPro').innerHTML = otherPro;
    document.getElementById('traits').innerHTML = traits;
    document.getElementById('equip').innerHTML = equip;
    document.getElementById('gold').value = gold;

}

// Calculates Saving Throw and Skill Bonuses
function addPro(nam, sta) {
    var pro = document.getElementById('pro-bonus').innerHTML;
    pro = parseInt(pro.replace('+', ''));

    var box = document.getElementById(nam);

    sta = sta + '.mod';
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

// Level up function
function levelUp() {
    x = parseInt(document.getElementById("char-level").value);
    if(x != 20) {
        x++;
        document.getElementById("char-level").value = x;
        proficiencyChecker(document.getElementById("char-level").value);
    } else if (x == 20) {
        alert("You're Already Max Level!");
    }
}

// Updates Proficiency bonus based on character level
function proficiencyChecker(lvl) {
    if(lvl < 5) {
        document.getElementById('pro-bonus').innerHTML = "+2";
    }
    else if(lvl >= 5 && lvl < 9) {
        document.getElementById('pro-bonus').innerHTML = "+3";
    }
    else if(lvl >= 9 && lvl < 12) {
        document.getElementById('pro-bonus').innerHTML = "+4";
    }
    else if(lvl >= 12 && lvl < 16) {
        document.getElementById('pro-bonus').innerHTML = "+5";
    }
    else if(lvl >=16 && lvl <= 20) {
        document.getElementById('pro-bonus').innerHTML = "+6";
    }
}

// function that updates page calculations
function updateStats() {

    // Calls Proficiency updating funciton
    proficiencyChecker(document.getElementById("char-level").value);

    // Calcualte Ability Modifiers
    stats.map(function(s) {
        s.abilityScore = document.getElementById(s.name).value;
        s.mod = modGen(s.abilityScore);
        document.getElementById(s.name + 'Mod').innerHTML = s.mod;
    });

    // Calculate Saving Throw Modifiers
    skills.savingThrows.map(function(save) {
        addPro(save.id, save.stat);
    });

    //Calculate Skill Modifiers
    skills.skills.map(function(skill) {
        addPro(skill.id, skill.stat);
    });

    // Calculating initiative Mod
    document.getElementById('initiative').innerHTML = dex.mod;

    // Calculate Passive Perception
    var perception = document.getElementById('perc');
    if(perc.checked == true){
        pro = document.getElementById('pro-bonus').innerHTML;
        pro = parseInt(pro.replace('+', ''));
    }
    else {
        pro = 0;
    }
    document.getElementById('pasPer').innerHTML = 10 + wis.mod + pro;
}

// Initialization of Page Values
updateStats();
