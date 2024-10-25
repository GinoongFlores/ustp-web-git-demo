
// Variables and Data Types
let name = "Chan";
let age = 20;
const PI = 3.14; // Constant variable
let isStudent = true;

// Functions Declaration

// Function Expression

// Arrow Function

// If-Else Statement

// For Loop

// While Loop

// Array

// Object

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
