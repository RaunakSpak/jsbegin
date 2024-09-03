
// using let keyword to declare variables
function exampleLet() {
    let x = 10;
    console.log(x);

    if (x > 5) {
        let y = 20; // y is block-scoped
        document.getElementById('demo').innerHTML = y; // Output: 20
    }

    // console.log(y); // Uncaught ReferenceError: y is not defined, because y is only accessible within the block above

    x = 15; // Reassignment is allowed with let
    document.getElementById('demo1').innerHTML = x; // Output: 15
}


// using const keyword to declare variables
function exampleConst() {
    const z = 30;

    // z = 40; // Uncaught TypeError: Assignment to constant variable, because const variables cannot be reassigned

    const myArray = [1, 2, 3];
    myArray.push(4); // This is allowed because we are not reassigning the variable, only modifying the array's contents
    console.log(myArray); // Output: [1, 2, 3, 4]

    const myObject = { name: "Alice", age: 25 };
    myObject.age = 26; // Allowed, because the reference to the object does not change
    console.log(myObject); // Output: { name: "Alice", age: 26 }
}


// using var keyword to declare variables

function exampleVar() {
    var x = 10;

    if (x > 5) {
        var y = 20; // y is function-scoped, not block-scoped
        document.getElementById('demo').innerHTML = y; // Output: 20
    }

    document.getElementById('demo1').innerHTML = y; // Output: 20, because y is accessible outside the block

    var x = 30; // Reassignment is allowed with var
    document.getElementById('demo2').innerHTML = y; // Output: 30
}


// if condition
function myFunction() {
    let age = 20;

    if (age > 18) {
        document.getElementById('age').innerHTML = "Vote";
    }
    else {
        document.getElementById('age').innerHTML = "don't Vote";
    }
}

// else if condition

function checkList() {
    let name = "rawan";

    if (name == "Aiman") {
        document.getElementById('name').innerHTML = 'Hello';
    }
    else if (name == 'rawan') {
        document.getElementById('name').innerHTML = 'Hellu';
    }
    else if (name == 'ak') {
        document.getElementById('name').innerHTML = 'shit';
    }
    else {
        document.getElementById('name').innerHTML = 'muje nahi pata';
    }
}

// for loops

function forLoop() {

    for (var i = 0; i < 10; i++) {
        document.getElementById('for').innerHTML += i + ' ';
    }
}

// while loop 
function whileLoop() {
    var i = 0;
    while (i < 10) {
        document.getElementById('while').innerHTML += i + ' ';
        i++;
    }
}


// objects 
const person = {
    firstName: "Raunak",
    lastName: "Vishwakarma",
    age: 25
};

document.getElementById('demo5').innerHTML =
    person.firstName + " " + person.lastName + " " + person.age + " ";



function multi(a, b) {
    return a * b;
}

let result = multi(34, 35);
document.getElementById('demo5').innerHTML = result;
