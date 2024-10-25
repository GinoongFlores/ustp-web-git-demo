
// Variables and Data Types
let name = "Chan";
let age = 20;
const PI = 3.14; // Constant variable
let isStudent = true;

console.log("Variables and Data Types\nOutput:\n");
console.log(name); // Output: Chan
console.log(age); // Output: 20
console.log(isStudent); // Output: true
console.log("")

// Functions Declaration
console.log("Functions Declaration\nOutput:\n");
function greet(name) {
    return `Hello, ${name}!`;
    // `` - This is called template literals
}

console.log(greet("Chan")) // Output: Hello, Chan!

// Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3)); // Output: 5

// Arrow Function
const multiply = (a, b) => a * b;
const oldMultiply = (a, b) => {
    return a
}
console.log(multiply(2, 3)); // Output: 6

console.log("");

// If-Else Statement
console.log("If-Else Statement\nOutput:\n");
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

// For Loop
console.log("For Loop\nOutput:\n");
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}
console.log("");

// While Loop
console.log("While Loop\nOutput:\n");
let count = 0;
while (count < 5) {
    console.log(count); // Output: 0 1 2 3 4
    count++;
}
console.log("");

// Array
console.log("Array\nOutput:\n");
let fruits = ["Apple", "Banana", "Cherry"];
// Adding Elements
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]
// Removing Elements
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
console.log("");

// Object
console.log("Object\nOutput:\n");
let student = {
    name: "Chan",
    age: 22,
    course: "Information Technology"
};
console.log("student name" + student.name)
// Adding Properties
student.isStudent = false;
console.log(student);
// Removing Properties11
delete student.isStudent;
console.log(student);

// DOM Manipulation
console.log("DOM Manipulation\nOutput:\n");
let title = document.querySelector(".change-text");
title.textContent = "Welcome to JavaScript";

let button = document.querySelector("#dom-manipulation");
button.addEventListener("click", () => {
    // adds-on: make title turn red by clicking and turn it back to normal after clicking again
    title.style.color = "red"
});

console.log("DOM manipulation example executed. Check the webpage for changes.\n");

// Fetch API
fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json()).then(data => {
        console.log("Fetch API\nOutput:\n" + JSON.stringify(data) + "\n");
    }).catch(error => {
        console.log("Error fetching data:", error)
    })
