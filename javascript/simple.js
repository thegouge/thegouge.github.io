//Checks to see if the inputted string is a palindrome
function palindrome(){
    var x = document.getElementById('palindrome-input').value;
    x = x.replace(/\W/g, '').toUpperCase();

    var rev = x.split('').reverse().join('');

    if (x == rev){
        document.getElementById('palindromeOutput').innerHTML = `the string "${document.getElementById('palindrome-input').value}" is a palindrome!`;
    }
    else {
        document.getElementById('palindromeOutput').innerHTML = "Not a Palindrome!"
    }
}

//outputs the user's birth year
function birthday() {
    var age = document.getElementById('age').value;
    var today = new Date();
    today = today.getFullYear();
    var birthYear = today - age;
    document.getElementById('birthOutput').innerHTML = `You were born in ${birthYear}!`;
}

// Randomly assigns all the Survivor Contestants point rankings
var run = false;
function survivor() {

    // contestant constructor function
    function Contestant(name, points) {
        this.name = name;
        this.points = points;
    }

    // creating the contestant objects in an array
    var contestants = [
        new Contestant('angela', 0),
        new Contestant('bradley', 0),
        new Contestant('brendan', 0),
        new Contestant('chelsea', 0),
        new Contestant('chris', 0),
        new Contestant('desiree', 0),
        new Contestant('domenick', 0),
        new Contestant('donathan', 0),
        new Contestant('james', 0),
        new Contestant('jenna', 0),
        new Contestant('kellyn', 0),
        new Contestant('laurel', 0),
        new Contestant('libby', 0),
        new Contestant('michael', 0),
        new Contestant('sebastian', 0),
        new Contestant('stephanie', 0),
        new Contestant('wendell', 0)
    ];

    var rankings = [];

    var result = [];

    for (var i = 0; i < contestants.length; i++) {
        rankings[i] = i + 1;
    }

    // assigning unique point values to each contestant
    contestants.map(function (person) {
        var random = Math.floor(Math.random() * rankings.length);
        person.points = rankings[random];
        rankings.splice(random, 1);
        result[person.points - 1] = person;
    });

    // Grabs the List Output DOM element
    var list = document.getElementById('conList');

    // Checks to see if there's already a list, and removes it if there is
    if(run == true) {
        result.forEach(function(person) {
            var item = document.getElementById(person.name);
            list.removeChild(item);
        });
    }
    run = true;

    // prints out the list of contestants in order
    return result.forEach(function (person) {
        var item = document.createElement("li");
        item.setAttribute("class", "contestant");
        item.setAttribute("id", person.name);
        var name = document.createTextNode(person.name);
        item.appendChild(name);
        list.appendChild(item);
    });
}