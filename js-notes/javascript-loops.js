// JAVASCRIPT LOOPS BRAVO 3/16/2023

// Iteration: repeating action over and over a certain number of times until condition is met

// Scope and Variable Declarations

// 1. Global - accessed/seen anywhere in the program 
// 2. Local (aka block scope)- only available inside block in which it's defined 

// -variable
// var - global
// let - local scope, can be re-assigned, but not re-declared
// const - global, cannot be reassigned or redeclared 


// SCOPE -------------------------------------------------------------------------
// if(true) {
//     var myName= "Trish"
//     console.log(myName) // This will work
// } 

// if(true) {
//     var myName= "Trish"
// }
// console.log(myName) // This will work

// if(true) {
//     let myName= "Trish"
// }
// console.log(myName) // this will not work because let is not global

//-------------------------------------------------------------------------

// FOR LOOP

// To set up a FOR loop:
    // 1. where to start counting
    // 2. where to stop counting
    // 3. how to get from the start to the stop (increment)
    
    // index as the variable (i) - index is needed to store the numbers

    // 1. let index = 0 --> (i = 0) starting point
    // 2. let index < 10 --> (i < 10) ending point
    // 3. index = index + 1 --> (i++) incrementing by 1


    let numsArray = [3, 5, 11, 4, 2, 1]
    console.log(numsArray.length)

    for(let i=0; i<numsArray.length; i++){
        console.log("index: ", i, "value", numsArray[i])
    }
// output
// index:  0 value 3
// index:  1 value 5
// index:  2 value 11
// index:  3 value 4
// index:  4 value 2
// index:  5 value 1

    let nameArray = ["James", "Valeria", "DeMario", "Evelyn"]

    for (let i=0; i<nameArray.length; i++) {
        console.log(nameArray[i])
    }
    // output:
    // James
    // Valeria
    // DeMario
    // Evelyn


    for (let i=0; i<10; i++) {
        console.log(i)
    }
    // output:
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9


    const nArray = [4,5,6,7,8,9]

    for(let i=0; i<nArray.length; i++) {
        if(nArray[i] % 2 === 0) {
            console.log(`${nArray[i]} is an even number!`)
        } else if(nArray[i] % 2 === 1) {
            console.log(`${nArray[i]} is an odd number!`)
        } else {
            console.log("Hey, this is not a number foo.")
        }
    }
    // output:
    // 4 is an even number!
    // 5 is an odd number!
    // 6 is an even number!
    // 7 is an odd number!
    // 8 is an even number!
    // 9 is an odd number!

//------------------------------------------------------------------------------------------------

// loops challenges on gitHub

    // Create a for loop that logs each number from 1 - 20.
    for(let i=0; i < 21; i++) {
        console.log(i)
    }

    // Create a for loop that logs every other number from 1 - 20.
    for(let i = 0; i < 21; i += 2) {
        console.log(i)
    }


    // Create a for loop that logs the result of each number from 1 - 20 tripled.
    for(let i = 0; i < 21; i++) {
        console.log(i * 3)
    }

    // Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
    for(let i = 0; i < 21; i++) {
        if(i % 2 === 1) {
            console.log("ODD")
        } else if(i % 2 === 0) {
            console.log(i)
        }
    }


    // Consider this variable:

    const nums = [3, 57, -9, 20, 67]
    let largest = [0]
    // Create the code that will log the largest number from the array.
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i]
        }
    }
    console.log(largest)

    // Create the code that will log the smallest number from the array. 
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] < largest) {
            largest = nums[i]
        }
    }
    console.log(largest)

    // Create the code that will log the remainder of each number when divided by 2. 
    let arrayOfRemainders = []
    for(let i = 0; i < nums.length; i++) {
        let remainder = nums[i] % 2
        arrayOfRemainders.push(remainder)
    }
    console.log(arrayOfRemainders)


    // Consider this variable:
    const myString = "learn student"

    // Create the code that will log the number of times the letter "e" occurs in the string.
    let count = 0
    for(let i = 0; i < myString.length; i++) {
        if(myString[i] === "e"){
            count++
        }
    }
    console.log(count)

    // Create the code that will log every other character in the string.


