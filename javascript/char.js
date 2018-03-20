// jshint esversion: 6
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
];

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
document.getElementById('classes').addEventListener('change', function() {classBonus(document.getElementById('classes').value);});
document.getElementById('races').addEventListener('change', function() {raceBonus(document.getElementById('races').value);});
document.getElementById('backgrounds').addEventListener('change', function() {backgroundBonus(document.getElementById('backgrounds').value);});

// Initialize Class
function classBonus(c) {

    switch(c){
        case 'Barbarian':
            document.getElementById('hit-type').innerHTML = "1d12";
            document.getElementById('max-hp').value = 12 + con.mod;
            document.getElementById('hp').value = 12 + con.mod;
            document.getElementById('str-st').checked = true;
            document.getElementById('con-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Armor: Light, Medium, Shields
                Weapons: Simple, Martial `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Rage", "Unarmored Defense" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `either a greataxe or any martial melee weapon, two handaxes or any simple weapon, an explorer's pack, javelins x4 `;
            window.alert(`choose two:
                Animal Handling
                Athletics
                Intimidation
                Nature
                Perception
                Survival`);

            break;
        case 'Bard':
            document.getElementById('hit-type').innerHTML = "1d8";
            document.getElementById('max-hp').value = 8 + con.mod;
            document.getElementById('hp').value = 8 + con.mod;
            document.getElementById('dex-st').checked = true;
            document.getElementById('cha-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Armor: light armor
                Weapons: simple weapons, hand crossbows, longswords, rapiers, shortswords
                Tools: three musical instruments `;
            document.getElementById('otherAtks').innerHTML = document.getElementById('otherAtks').innerHTML +
                `Cantrips: 2
                Known Spells: 4 - first level `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `Spellcasting, "Bardic inspiration" (d6) `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `a rapier/longsword/simple weapon, a diplomat's/entertainer's pack, a musical instrument, leather armor, a dagger `;
            window.alert('choose any three skills!');
            break;
        case 'Cleric':
            document.getElementById('hit-type').innerHTML = "1d8";
            document.getElementById('max-hp').value = 8 + con.mod;
            document.getElementById('hp').value = 8 + con.mod;
            document.getElementById('wis-st').checked = true;
            document.getElementById('cha-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Armor: light & medium armor, shields
                Weapons: simple weapons `;
            document.getElementById('otherAtks').innerHTML = document.getElementById('otherAtks').innerHTML +
                `Cantrips: 3
                Known Spells: ???`;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `spellcasting, "divine domain" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `a mace/warhammer (if proficient), a scale mail/leather armor/chain mail (if proficient), a light Xbow with bolts 20x/any simple weapon, a priest's/explorer's pack, a shield, a holy symbol `;
            window.alert(`choose two:
                    history
                    insight
                    medicine
                    persuasion
                    religion`);
            break;
        case 'Druid':
            document.getElementById('hit-type').innerHTML = "1d8";
            document.getElementById('max-hp').value = 8 + con.mod;
            document.getElementById('hp').value = 8 + con.mod;
            document.getElementById('int-st').checked = true;
            document.getElementById('wis-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Armor: light, medium, shields
                Weapons: clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears
                Tools: Herbalism kit `;
            document.getElementById('otherAtks').innerHTML = document.getElementById('otherAtks').innerHTML +
                `Cantrips:
                Known Spells:  `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `Spellcasting, "Druidic", Won't wear armor or shields made of metal `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `A Wooden Shield/Simple Weapon, a Scimitar/Simple Weapon, Leather Armor, Explorer's pack, druidic focus `;
            window.alert(`choose two:
                Arcana
                Animal Handling
                Insight
                medicine
                Nature
                Perception
                Religion
                Survival`);
            break;
        case 'Fighter':
            document.getElementById('hit-type').innerHTML = "1d10";
            document.getElementById('max-hp').value = 10 + con.mod;
            document.getElementById('hp').value = 10 + con.mod;
            document.getElementById('str-st').checked = true;
            document.getElementById('con-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Armor: all armor, sheilds
                Weapons: Simple weapons, martial weapons `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Fighting Style", "Second Wind" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                'Chain Mail/leather armor with longbow and 20x arrows,';
                'a martial weapon with a shield or two martial weapons,';
                'a light crossbow and 20x bolts or two hand axes';
                'a dungeoneer\'s pack or an explorer\'s pack ';
            window.alert(`choose two:
                Acrobatics
                Animal Handling
                Athletics
                History
                Insight
                Intimidation
                Perception
                Survival`);
            break;
        case 'Monk':
            document.getElementById('hit-type').innerHTML = "1d8";
            document.getElementById('max-hp').value = 8 + con.mod;
            document.getElementById('hp').value = 8 + con.mod;
            document.getElementById('str-st').checked = true;
            document.getElementById('dex-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Weapons: Simple Weapons, shortswords
                Tools: either a type of artisan's tools or a musical instrument `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Unarmored Defense", "Martial Arts" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `a shortsword/any simple weapon, a dungeoneer's/explorer's pack, darts x10`;
            window.alert(`choose two:
                Acrobatics
                Athletics
                History
                Insight
                Religion
                Stealth`);
            break;
        case 'Paladin':
            document.getElementById('hit-type').innerHTML = "1d10";
            document.getElementById('max-hp').value = 10 + con.mod;
            document.getElementById('hp').value = 10 + con.mod;
            document.getElementById('wis-st').checked = true;
            document.getElementById('cha-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Armor: All armor, shields
                Weapons: simple weapons, martial weapons `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Divine Sense", "Lay on Hands" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `a martial weapon and a shield or two martial weapons, javelins x5 or any simple weapon, a priest's pack or an explorer's pack, chain mail, holy symbol`;
            window.alert(`Choose Two:
                Athletics
                Insight
                Intimidation
                Medicine
                Persuasion
                Religion`);
            break;
        case 'Ranger':
            document.getElementById('hit-type').innerHTML = "1d10";
            document.getElementById('max-hp').value = 10 + con.mod;
            document.getElementById('hp').value = 10 + con.mod;
            document.getElementById('str-st').checked = true;
            document.getElementById('dex-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Armor: light, medium, shields
                Weapons: simple weapons, martial weapons `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Favored Enemy", "Natural Explorer" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `Scale Mail or leather armor, two shorswords or two simple weapons, a dungeoneer's/explorer's pack, a longbow and 20x arrows`;
            window.alert(`choose three:
                Animal Handling
                Athletics
                Insight
                Investigation
                Nature
                Perception
                Stealth
                Survival`);
            break;
        case 'Rogue':
            document.getElementById('hit-type').innerHTML = "1d8";
            document.getElementById('max-hp').value = 8 + con.mod;
            document.getElementById('hp').value = 8 + con.mod;
            document.getElementById('dex-st').checked = true;
            document.getElementById('int-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Armor: light
                Weapons: simple, hand crossbows, longswords, rapiers, shortswords
                Tools: Thieve's tools `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Expertise", "Sneak Attack", "Thieve's Cant" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `a rapier or shortword, a shortbow and 20x arrows or a shortsword, a burglar's/dungeoneer's/explorer's pack, leather armor, two daggers, theive's tools`;
            window.alert(`Choose four:
                Acrobatics
                Athletics
                Deception
                Insight
                Intimidation
                Investigation
                Perception
                Performance
                Persuasion
                Sleight of Hand
                Stealth`);
            break;
        case 'Sorcerer':
            document.getElementById('hit-type').innerHTML = "1d6";
            document.getElementById('max-hp').value = 6 + con.mod;
            document.getElementById('hp').value = 6 + con.mod;
            document.getElementById('con-st').checked = true;
            document.getElementById('cha-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Weapons: daggers, darts, slings, quarterstaffs, light Xbows `;
            document.getElementById('otherAtks').innerHTML = document.getElementById('otherAtks').innerHTML +
                `Cantrips: 4
                Known Spells: 2 - 1st level `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Spellcasting", "Sorcerous Origin" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `a light Xbow and x20 bolts or any simple weapon, a component pouch or an arcane focus, a dungeoneer's/explorer's pack, two daggers`;
            window.alert(`choose two:
                Arcana
                Deception
                Insight
                Intimidation
                Persuasion
                Religion`);
            break;
        case 'Warlock':
            document.getElementById('hit-type').innerHTML = "1d8";
            document.getElementById('max-hp').value = 8 + con.mod;
            document.getElementById('hp').value = 8 + con.mod;
            document.getElementById('wis-st').checked = true;
            document.getElementById('cha-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Armor: light
                Weapons: simple weapons `;
            document.getElementById('otherAtks').innerHTML = document.getElementById('otherAtks').innerHTML +
                `Cantrips: 2
                Known Spells: 2 - first level `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Otherworldly Patron", "Pact Magic" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `a light Xbow and x20 bolts or any simple weapon, a component pouch or an arcane focus, a scholar's/dungeoneer's pack, leather armor, any simple weapon, two daggers `;
            window.alert(`Choose two:
                Arcana
                Deception
                History
                Intimidation
                Investigation
                Nature
                Religion`);
            break;
        case 'Wizard':
            document.getElementById('hit-type').innerHTML = '1d6';
            document.getElementById('max-hp').value = 6 + con.mod;
            document.getElementById('hp').value = 6 + con.mod;
            document.getElementById('int-st').checked = true;
            document.getElementById('wis-st').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Weapons: daggers, darts, slings, quarterstaffs, light Xbows `;
            document.getElementById('otherAtks').innerHTML = document.getElementById('otherAtks').innerHTML +
                `Cantrips: 3
                Known Spells: 6 - first level `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Spellcasting", "Arcane Recovery" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
                `a quarterstaff or a dagger, a component pouch or arcane focus, a scholar's/explorer's pack, a spellbook`;
            window.alert(`Choose Two:
                Arcana
                History
                Insight
                Investigation
                Medicine
                Religion`);
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
            document.getElementById('wn1').value = 'Talons';
            document.getElementById('ab1').value = document.getElementById('pro-bonus').value.replace('+', '');
            document.getElementById('dt1').value = '1d4 slashing';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Languages: Common, Aarakocra, Auran `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `50ft speed while flying `;
            break;
        case 'Dragonborn':
            document.getElementById('cha').value = parseInt(document.getElementById('cha').value) + 1;
            document.getElementById('str').value = parseInt(document.getElementById('str').value) + 2;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
                `Languages: Common, Draconic `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `Breath Weapon  `;
            break;
        case 'Dwarf':
            document.getElementById('con').value = parseInt(document.getElementById('con').value) + 2;
            document.getElementById('speed').innerHTML = '25ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Dwarvis
            weapons: Battleaxe, handaxe, light hammer, and warhammer `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Darkvision", "Dwarven Resilience", "Stonecunning"  `;
            break;
        case 'Elf':
            document.getElementById('dex').value = parseInt(document.getElementById('dex').value) + 2;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('perc').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Elvish `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Darkvision", "Fey Ancestry", "Trance"  `;
            break;
        case 'Genasi':
            document.getElementById('con').value = parseInt(document.getElementById('con').value) + 2;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Primordial `;
            break;
        case 'Gnome':
            document.getElementById('int').value = parseInt(document.getElementById('int').value) + 2;
            document.getElementById('speed').innerHTML = '25ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Gnomish `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Darkvision", "Gnome Cunning"  `;
            break;
        case 'Goliath':
            document.getElementById('str').value = parseInt(document.getElementById('str').value) + 2;
            document.getElementById('con').value = parseInt(document.getElementById('con').value) + 1;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('athl').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Giant `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                ` "Stone's Endurance", "Powerful Build", "Mountain Born" `;
            break;
        case 'Half-Elf':
            document.getElementById('cha').value = parseInt(document.getElementById('cha').value) + 2;
            window.alert('you can assign two more ability points!  and gain proficiency in two skills!');
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Elvish, one extra `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                ` "Darkvision", "Fey Ancestry" `;
            break;
        case 'Halfling':
            document.getElementById('dex').value = parseInt(document.getElementById('dex').value) + 2;
            document.getElementById('speed').innerHTML = '25ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Halfling `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Lucky", "Brave", "Halfling Nimbleness"  `;
            break;
        case 'Half-Orc':
            document.getElementById('str').value = parseInt(document.getElementById('str').value) + 2;
            document.getElementById('con').value = parseInt(document.getElementById('con').value) + 1;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('inti').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, Orc `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Darkvision", "Relentless Endurance", "Savage Attacks" `;
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
            `Languages: Common, one of your choice `;
            break;
        case 'Tiefling':
            document.getElementById('int').value = parseInt(document.getElementById('int').value) + 1;
            document.getElementById('cha').value = parseInt(document.getElementById('cha').value) + 2;
            document.getElementById('speed').innerHTML = '30ft';
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `Languages: Common, infernal `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Darkvision", "Hellish Resistance", "Infernal Legacy" `;
            break;
    }
}

// Parse Background Selection
function backgroundBonus(b) {
    console.log(b);
    switch(b) {
        case 'Acolyte':
            document.getElementById('insi').checked = true;
            document.getElementById('reli').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `add two languages `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Shelter of the faithful"  `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
            `Holy Sumbol, incense x5, vestments, common clothes `;
            document.getElementById('gold').value = String(parseInt(document.getElementById('gold').value) + 15);
            break;
        case 'Criminal/Spy':
            document.getElementById('dece').checked = true;
            document.getElementById('stea').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `One Type of Gaming Set, Thieve's Tools `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Criminal Contact" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
            `Crowbar, dark common clothes `;
            document.getElementById('gold').value = String(parseInt(document.getElementById('gold').value) + 15);
            break;
        case 'Folk Hero':
            document.getElementById('anim').checked = true;
            document.getElementById('surv').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `One Artisan's tools type, land Vehicles `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Rustic Hospitality" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
            `Artisan's tools, shovel, iron pot, common clothes `;
            document.getElementById('gold').value = String(parseInt(document.getElementById('gold').value) + 10);
            break;
        case 'Haunted':
            window.alert(`Choose one:
                Arcana
                Investigation
                Religion
                Survival`);
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `One Exotic Language `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
            `Monster Hunter's Pack, one trinket of special significance `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Heart of Darkness" `;
            break;
        case 'Noble':
            document.getElementById('hist').checked = true;
            document.getElementById('pers').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `One Type of Gaming Set, add a language `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
            `fine clothes, Signet ring, Scroll of Pedigree `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Position of Privilege" `;
            document.getElementById('gold').value = String(parseInt(document.getElementById('gold').value) + 25);
            break;
        case 'Sage':
            document.getElementById('arca').checked = true;
            document.getElementById('hist').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `add two languages `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
                `"Researcher" `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
            'bottle of black ink, a quill, a small knife, a letter from a dead collegue posing a question you can\'t answer, common clothes ';
            document.getElementById('gold').value = String(parseInt(document.getElementById('gold').value) + 10);
            break;
        case 'Soldier':
            document.getElementById('athl').checked = true;
            document.getElementById('inti').checked = true;
            document.getElementById('otherPro').innerHTML = document.getElementById('otherPro').innerHTML +
            `One Type of Gaming Set, Land Vehicles `;
            document.getElementById('traits').innerHTML = document.getElementById('traits').innerHTML +
            ` `;
            document.getElementById('equip').innerHTML = document.getElementById('equip').innerHTML +
            `an insignia of rank, a trophy from a fallen enemy (), either dice or a deck of cards, common clothes `;
            document.getElementById('gold').value = String(parseInt(document.getElementById('gold').value) + 10);
            break;
    }
}

// Putting the Ability Scores into an Array
var stats = [str, dex, con, int, wis, cha];

updateStats();


for (var i = 0; i < stats.length; i++) {
    document.getElementById(stats[i].name).addEventListener("change", function(event){
        updateStats();
    });
}

// Calculates the Ability Modifier
function modGen(s) {
    return Math.floor((s-10)/2);
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
    x++;
    document.getElementById("char-level").value = x;
    proficiencyChecker(document.getElementById("char-level").value);
}

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

// function that resolves calculations
function updateStats() {

    proficiencyChecker(document.getElementById("char-level").value);

    // Calcualte Ability Modifiers
    for(var i = 0; i < stats.length; i++){
        stats[i].abilityScore = document.getElementById(stats[i].name).value;
        stats[i].mod = modGen(stats[i].abilityScore);
        document.getElementById(stats[i].name + 'Mod').innerHTML = stats[i].mod;
    }

    // Calculate Skill Modifiers
    for(var q = 0; q < skills.length; q += 2){
        addPro(skills[q], skills[q+1]);
    }

    // Calculating initiative Mod
    document.getElementById('initiative').innerHTML = dex.mod;

    // calculate Passive Perception
    var perception = document.getElementById('perc');
    if(perc.checked == true){
        pro = document.getElementById('pro-bonus').value;
        pro = parseInt(pro.replace('+', ''));
    }
    else {
        pro = 0;
    }
    document.getElementById('pasPer').innerHTML = 10 + wis.mod + pro;



}
