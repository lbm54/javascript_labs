//too tired to write a lot of comments
var name = "Lee Martin";
const numStates = 50;
var sum = 5 + 4;
if (name.charCodeAt(0) > 76) {
    alert("Back of the line");
} else {
    alert("Next!");
}

var sayHello = function() {
    alert("Hello, World!");
}

sayHello();

var checkAge = function(name, age) {
    if (age < 21) {
        alert(`Sorry ${name}, you aren\'t old enough to view this page!`);
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

var vegetables = ['a', 'b', 'c', 'd'];
for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

var arrayOfObjects = [
    {
        name: 'a',
        age: 1
    },
    {
        name: 'b',
        age: 22
    },
    {
        name: 'c',
        age: 3
    },
    {
        name: 'd',
        age: 24
    },
    {
        name: 'e',
        age: 3
    }
];

for (var i = 0; i < arrayOfObjects.length; i++) {
    checkAge(arrayOfObjects[i].name, arrayOfObjects[i].age);
}

var getLength = function(word) {
    return word.length;
}

var result = getLength("Hello World");
if (result % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}