// Javascript Intro Lecture Notes 3/15/2023

//CMD + '/' comments out code

// Data Types - how JS is broken down

// Primitive Data Types:
    // Numbers
    // Booleans 
    // Strings
    // Undefined
    // Null
    // Symbol


// NUMBERS - perform math: add, subtract, multiply, divide, and modulo

console.log(5+3) // 8
console.log(5/3) // 1.66666666667 (float)

// Modulo the percent sign % - divides numerator by denominator, displays remainder

console.log(6 % 2) // 0
console.log(5 % 2) // 1


//STRINGS - text that is defined and wrapped by quotes

// console.log(hello world) -this will throw an error 

console.log("hello world")
console.log('hello world')


// String concatenation
console.log("hello" + "world")
console.log("Hello " + "World")
console.log("36" + 36) // 3636 - converts number to 36 to a string and then concats strings

// type coercion - force changes the data type to fulfill process

//----------------------

//BOOLEANS
// - true or false values

console.log(true) // true
console.log(false) // false

// ---------------------------

// UNDEFINED - declared value that has not yet been assigned
var name 
console.log(name) //prints undefined because name does not have a value yet
// Null - has no value

//Symbol - used for accessing keys in a JS objects

//--------------------------

//VARIABLES
// var - a global variable, it can be reassigned
// preferred variable declarations are let and const

// let - can be reassigned
// const - cannot be reassigned

// Name variable - use descriptive names in camelCase

// Assignment operator - single equal sign, assigns value to a variable
// Assigned value - value used when variable is called
var myFavoriteNumber = 42
console.log(myFavoriteNumber) // 42
console.log(myFavoriteNumber + 10) // 52


// reassigning variables 
myFavoriteNumber = 15
console.log(myFavoriteNumber) // outputs 15 because it was changed

var yourFavoriteNumber = 18
console.log(myFavoriteNumber + yourFavoriteNumber) // 33


// String Properties and Built-in Methods

var message = "Hello Bravo!"

// length property - tells us how many characters the value of the variable is
console.log(message.length) // 12

// index - tells us the location of each character with the string - returns a number 
// computers use zero-indexing, so the first character starts at 0 
// to access a character at a specific index, we use bracket notation

console.log(message(0)) // H
console.log(message(7)) // r

// charAt() - return value at a specific index
console.log(message.charAt(4)) // 

//includes() - checks for subset of characters and returns a Boolean
console.log(Message.includes("lo")) // true

// slice() - returns a subnet of characters. takes 2 arguments: start index of subset, end index of subset
console.log(message.slice(0, 5)) // hello