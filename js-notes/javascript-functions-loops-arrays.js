// JavaScript Functions Loops and Arrays 3/20/2023


// ARRAYS
// Arrays - data type
// const myArray = [3, 4, 5, 6]
// index - arrays are organized by index; zero indexed.
// element - the thing that lives at the index
// value -  the properties and behavior of each element.

// const myArray = [3, 4, 5, 6] * 4
// console.log([3, 4, 5, 6] * 4)
// outputs NaN ---> ARRAYS do not have mathematical properties

// console.log(["hello, "yo"].toUpperCase())
// ---> outputs toUpperCase is not a function

// console.log(["hello", "yo"][0].toUpperCase())
// -----> HELLO
// console.log(["hello", "yo"][1].toUpperCase())
// -----> YO
// to get an element out of an array, use square brackets, and then reference the index.




// LOOPS
// ITERATION - repeating an action a given number of times or until a condition is met.
// for loops - really good for counting

// an effective for loop has 3 things.
// define variable: Index or i
// assign index to 0 because that's the starting point  A LOOP HAS NOTHING TO DO WITH ARRAYS, it just counts
// state the range you want to loop up to, in this case, up to ten
// state how you want to loop, in this case; we want to add one each time

// for(let index = 0; index < 10; index = index + 1)
for(let index = 0; index < 10; index++) {
    console.log(index)
}
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

const myArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(myArray.length) // data type - number since it will state the length of the array : 10

// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index])
// }




// FUNCTIONS

// parameter - the variable that bleongs to the function
// string interpolation - allows you to drop JS variables into the text
// const coffeeMaker = (coffeeType) => {
//     return `Your ${coffeeType} is ready!`
// }

// call, invoke, create a function invocation
// console.log(coffeeMaker("americano"))
// ---> Your undefined is ready
// argument - a value must be given to the parameter



const coffeeOrder1 = ["americano", "black coffee", "hot chocolate", "espresso"]
const coffeeOrder2 = ["breve", "best drink ever", "cappuccino", "flat white"]

// when looking at coding prompts, look for key words that tell you what you have to do 
// lists or collections - array
// each, every - iteration

// prompt: create a function that takes in a list of coffee orders and returns a list of the coffee order with a pleasant statement.
// input - array
// iteration, for loop
// string interpolation
// output - array

// only gets us one order, not working yet
// const coffeeMaker = (array) => {
//     for(let index = 0; index < array.length; index++) {
//         return `Your ${array[index]} is ready!`
//     }
// }
// console.log(coffeeMaker(coffeeOrder1))


const coffeeMaker = (array) => {
    let coffeeOrderList = [] // this will be storage for our for loop output
    for(let index = 0; index < array.length; index++) {
        coffeeOrderList.push(`Your ${array[index]} is ready!`)
    }
    return coffeeOrderList
}
console.log(coffeeMaker(coffeeOrder1))
/* outputs:
[
  'Your americano is ready!',
  'Your black coffee is ready!',
  'Your hot chocolate is ready!',
  'Your espresso is ready!'
]
*/
console.log(coffeeMaker(coffeeOrder2))
/* 
[
  'Your breve is ready!',
  'Your best drink ever is ready!',
  'Your cappuccino is ready!',
  'Your flat white is ready!'
]
*/



//------------------------------------------------------------------------------------------------------------------
// Challenges

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

//PSEUDOCODE: 
/* 
    -dealing with arrays
    -name function and parameter 
    -need empty array to store new array
    -need loop to multiply each item in array by 3
    
*/

const testArr1 = [3, 9, 15, 4, 10]

const multArr = (array) => {
    let newArray = []
    for(let index = 0; index < array.length; index++) {
        newArray.push(array[index] * 3)
    }
    return newArray
}
console.log(multArr(testArr1))
// output: [9, 27, 45, 12, 30]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

//PSEUDOCODE: 
/* 
    -have to make empty array
    -have to loop through to look for only odd numbers
    -need conditional statement featuring equality operator ===
    -return array with only odd numbers
*/

const oddArray = (array) => {
    let newArray2 = []
    for(let index = 0; index < array.length; index++) {
        if(array[index] % 2 !== 0) {
            newArray2.push(array[index])
        }
    }
    return newArray2
}
console.log(oddArray(testArr2))
// output: [-7, 3, 5, 13]



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]

const lettersArray = (array) => {
    let newArray3 = []
    for(index = 0; index < array.length; index++) {
        if(array[index] === typeof "string") {
            newArray3.push(array[index])
        }
    }
    return newArray3
}
console.log(lettersArray(comboArr))

// output: "nicework"