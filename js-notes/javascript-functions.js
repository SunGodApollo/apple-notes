// JavasScript Functions 3/17/2023
// Functions- gives you control over when an action happens, functions are reusable
// encapsulation - code machine that has self contained logic

//----------------------------------------------------------------------------

// ARROW FUNCTIONS - the particular style of function that is the best way to write a function for our stack

// ANATOMY OF FUNCTION
// variable declaration
// function name - camelCase, communicate intent
// assignment operator
// function syntax - parentheses and arrow
// curly braces - wraps the executable code
// return (every function must have a return)
// function invocation

//----------------------------------------------------------------------------

//  const coffeeMaker = () => {
//     return "coffee is made"
//  }

// console.log(coffeeMaker())
// --> undefined
// --> coffee is made when return is added

//----------------------------------------------------------------------------

// input (PARAMETER)- goes in the parentheses, variable called a parameter (parameters are only available inside of the function)
// const coffeeMaker = (coffeeType) => {
//     return `${coffeeType} is made`
// }

// console.log(coffeeMaker())
// --> undefined
// console.log(coffeeMaker("latte"))
// --> latte is made

//----------------------------------------------------------------------------

//  const coffeeMaker = (coffeeType, coffeeSize) => {
//     return `Your ${coffeeSize} ${coffeeType} is made`
//  }
//  console.log(coffeeMaker("latte", "large"))
//  let sizeSmall = "small"
// console.log(coffeeMaker("irish coffee", sizeSmall))
// one more level of abstraction
// --> your small irish coffee is made 

//----------------------------------------------------------------------------

// PSEUDO CODE - writing out your code in plain english

// prompt: create a function that takes in a coffee type and coffee size and returns the price of the coffee based on the size
// small - $3, med - $4, large - 5

// pseudo coding the problem: 
// gonna need a conditional statement - if statement
// evaluation on the size - equality evaluation ===
// string interpolation on the return

// const coffeeMaker = (coffeeType, coffeeSize) => {
//     if(coffeeSize === "small") {
//         return `${coffeeType} is $3.`
//     } else if(coffeeSize === "medium") {
//         return `${coffeeType} is $4.`
//     } else if(coffeeSize === "large") {
//         return `${coffeType} is $5.`
//     } else {
//         return "Please try again"
//     }
// }

// let sizeSmall = "small"
// let sizeArray = ["small", "medium", "large"]

// console.log(coffeeMaker("irish coffee", sizeSmall))
// console.log(coffeeMaker("irish coffee", "small"))
// console.log(coffeeMaker("irish coffee", "medium"))
// console.log(coffeeMaker("irish coffee", "large"))


//----------------------------------------------------------------------------

// Handling edge cases: what if something else happens? 
// what if user doesn't type size in all lowercase? 

const coffeeMaker = (coffeeType, coffeeSize) => {
    let coffeeSizeLower = coffeeSize.toLowerCase()
    if(coffeeSizeLower === "small") {
        return `${coffeeType} is $3.`
    } else if(coffeeSizeLower === "medium") {
        return `${coffeeType} is $4.`
    } else if(coffeeSizeLower === "large") {
        return `${coffeeType} is $5.`
    } else {
        return "Please try again"
    }
}


// let sizeArray = ["small", "medium", "large"]

// console.log(coffeeMaker("irish coffee", sizeArray[1]))
// console.log(coffeeMaker("irish coffee", sizeArray[2]))
// console.log(coffeeMaker("irish coffee", "Small"))




// -----------------------------------------------------------------------------------------------



// Write a function named marco that returns "polo".

// PSEUDOCODE: 
    /*
        -no parameter needed
        -return the string polo by console.logging the string itself.
    */
const marco = () => {
    return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// PSEUDOCODE:
    /* 
        -parameter will be name
        -create variable that contains person's name
        -return concatenated string with variable of person's name inserted.
    */
let personName = "Apolonio"
const greeting = (name1) => {
    return `Welcome, ${personName}!`
}
console.log(greeting(personName))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// PSEUDOCODE
    /*
        -name of function oddOrEven
        -will have a parameter number1
        -will need conditional statement, if else
        -will need to use modulo to determine odd or even number %
        -equality operator ===
    */

let numberUsed = 5
const oddOrEven = (numberOne) => {
    if(numberUsed % 2 === 0) {
        return `${numberUsed} is even.`
    } else if(numberUsed % 2 === 1) {
        return `${numberUsed} is odd.`
    } else {
        return "Something's not right."
    }
}
console.log(oddOrEven(numberUsed))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.