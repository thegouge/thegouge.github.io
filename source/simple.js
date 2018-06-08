//Checks to see if the inputted string is a palindrome
function palindrome(){
    var x = document.getElementById('palindrome-input').value;
    x = x.replace(/[\W_]/g, '').toUpperCase();
    
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
        new Contestant('Angela', 0),
        new Contestant('Bradley', 0),
        new Contestant('Brendan', 0),
        new Contestant('Chelsea', 0),
        new Contestant('Chris', 0),
        new Contestant('Desiree', 0),
        new Contestant('Domenick', 0),
        new Contestant('Donathan', 0),
        new Contestant('James', 0),
        new Contestant('Jenna', 0),
        new Contestant('Kellyn', 0),
        new Contestant('Laurel', 0),
        new Contestant('Libby', 0),
        new Contestant('Michael', 0),
        new Contestant('Sebastian', 0),
        new Contestant('Stephanie', 0),
        new Contestant('Wendell', 0)
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