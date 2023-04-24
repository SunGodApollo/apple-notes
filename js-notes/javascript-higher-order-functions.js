// Higher Order Functions 3/20/2022

// built-in method: premade function that is easily invocable.
    // exmplaes: .join(""); .toUpperCase()

    // console.log(true.toUpperCase())
    // output ---> ERROR: ture.toUpperCase is not a function because wrong data type

    // 2. function: set of code that always returns some data
                    // default output is undefined.
    
    // Anonymous function => this is a function without a name
    // Syntax: () => {}

    // 3. Parameter - required input by function. Placeholder for the data being passed into the function

    // 4. Argument - actual data that gets passed into the function

    // Pneumonic Tool:
    /*
        - P - parameter / placeholder
        - A - argument/ actual data
    */

    // 5. Iteration: set of instructions executed over and over again until a condition is met
        // - arrays
        // - strings

    // Syntactical Sugar - large concepts of code in easy to use syntax. Does the heavy-lifting so we don't have to.



// HIGHER ORDER FUNCTIONS (HOFs)
    // - a function that takes a function as an argument
    // - used by calling built-in methods
    // - more efficient than for loops
    // BUT used in very specific circumstances

// .forEach(), .map(), .filter()  - specifically ARRAY methods

// const showsArray = ["Mayor of Kingstown", "Ted Lasso", "Your Honor", "You", "Married at First Sight", "The Last of Us"]
// const numsArray = [5, 8, 15, 36, 42]



// .FOREACH

    // .forEach
    //  - will execute action once per item in the array
    //  - will take an anonymous function as argument

    // showsArray.forEach(() => {
    //     console.log("Hello")
    // })

    // prints:
    // Hello
    // Hello
    // Hello
    // Hello
    // Hello
    // Hello


    // The anonymous function also takes an argument

    // "value is required"
    // "value of the element at the current index"
    // showsArray[i] in terms of for loop

    // showsArray.forEach((value) => {
    //     console.log(`You like the show ${value}`)
    // })

    // // anonymous function can take a second argument - "index"
    // // -current index in iteration (think of i in terms of terms of for loop)
    // showsArray.forEach((value, index) => {
    //     console.log(`You like the show ${value}. Its index is ${index}`)
    // })

    // // anonymous function can take a THIRD argument - "array"
    // showsArray.forEach((value, index, array) => {
    //     console.log(`You like the show ${value}. Its index is ${index} in the array that contains ${array}`)
    // })


// REMEMBER THIS: there are three basic parameters in HOFS
// -value - only value is always required
// -index
// -array
// these are always in the same order

// numsArray.forEach((value, index, array) => {
//     console.log("value:", value)
//     console.log("index:", index)
//     console.log("array:", array)
// })

// .forEach doesn't return anything. if return is added it will be undefined.
// no way to stop or break a foreach() loop other than by throwing an exception. If you need to stop or break the loop. Then .forEach is the wrong tool.




// .MAP - a FOR loop

// - iterates over each element and returns a new array that has the same length of the original array
// - great for transforming or displaying each of the values in an array

const numberArray = [1, 2, 3, 4]

// hard coded structure; not recommended to use this factoring since it can only take one specific array
const multiplyByThree = numberArray.map((value) => {
    return value * 3
})
console.log(multiplyByThree)
// ---> [ 3, 6, 9, 12 ]

// can also be written in one line:
// const multiplyByThree = numberArray.map(value => value * 3)
// console.log(multiplyByThree)



// this format is more dynamic since it allows for other stuff to be used
const numsArray = [5, 8, 15, 36, 42]

const evenOrOdd = (array) => {
    return array.map((value) => {
        if(value % 2 === 0) {
            return "even"
        } else if (value % 2 !== 0) {
            return "odd"
        } else {
            return "oops! something went wrong"
        }
    })
}
console.log(evenOrOdd(numsArray))



// .FILTER - a for loop WITH a conditional statement

// It returns a new array that is a subset of the original array based on condition
// - we must assign our .filter statement to a new variable

const showsArray = ["Mayor of Kingstown", "Ted Lasso", "Your Honor", "You", "Married at First Sight", "The Last of Us"]


const searchT = showsArray.filter(value => {
    return value.includes("t") || value.includes("T")
})
console.log(searchT) //returns shows from the array that contain the letter T.






// Prompt: Create a function that takes in an array of mixed data and returns array of only odd numbers

const mixedDataArray = [3, "hi", true, "yo", 42, null, "Bravo", false, 15]

// PSEUDOCODE
// create a function named onlyOdds
// Parameter is an array of mixed data types
// evaluate data type of each element --> typeof
// create a new variable that will hold numbers
// use filter to get out odds
// return final variable

const onlyOdds = (array) => {
    let numbers = array.filter((value) => {
        return typeof value === "number"
    })
    let odds = numbers.filter(value => {
        return value % 2 !== 0
    })
    return odds
}
console.log(onlyOdds(mixedDataArray))

//REFACTOR

const onlyOdds2 = (array) => {
    let odds = array.filter(value => typeof value === "number" && value % 2 !==0)
    return odds
}
console.log(onlyOdds2(mixedDataArray))





//------------------------------------------------------------------------------------------------------------------

// MAP is used in the return statement
// FILTER is used in a variable that is assigned, then the filter method is applied inside that variable






// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]

// This format will take input from one specific array. DO NOT USE THIS WAY; make funtion first
// const multipliedByTen = arr1.map((value) => {
//     return value * 10
// })
// console.log(multipliedByTen)

// This format is more dynamic, allows more than one array to be used as input data
const multipliedByTen = (array) => {
    return array.map((value) => {
        return value * 10
    })
    return array
}
console.log(multipliedByTen(arr1))

// output: [30, 90, 150, 40, 100]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]

//make a function
const oddNumbers = (array) => {
    let onlyOddNumbers = array.filter((value) => {
        return value % 2 !== 0
    })
    return onlyOddNumbers
}
console.log(oddNumbers(arr2))
// output: [7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const onlyLetters = (array) => {
    let letters = array.filter((value) => {
        return typeof value === "string"
    })
    return letters
}
console.log(onlyLetters(comboArr).join(""))
// output: "nicework"



// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]

// PSEUDO code:
// create empty array 
// create a function named theRealOnes
// check for falsy values; want to return truthy
// use filter method
// output: return new array with only truthy values

const theRealOnes = (array) => {
    let arrayNew = array.filter((value) => {
        return value !== 0 && value !== "" && value !== null && value !== false
    })
    return arrayNew
}
console.log(theRealOnes(filterArrayValues))

// output: [58, "abcd", true]



// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"

// Pseudo code: 
// create function called noVowels
// data input type: string
// return: new string without vowels
// turn string into array and assignt to variable stringToArray
// filter out vowels
// turn new array into string

const noVowels = (str) => {
    let array = str.split("")
    return array.filter((value) => {
        if (value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u") {
            return value
        }
    }).join("")
    return array
}
console.log(noVowels(str))
// output: "jvscrpt s wsm"




// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr3 = [3, 7, 10, 5, 4, 3]
const arr4 = [7, 8, 2, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]



// practice 
 const randomArray = [25, 100, 47, 69, 55]
const doubleNumbers = (array) => {
    return array.map((number) => {
        return number * 2
    })
}
console.log(doubleNumbers(randomArray))

const stringsArray = ['cat', 'dog', 'lizard', 'dog', 'whale', 'cat']

const removeDuplicates = (array) => {
    return array.filter((string, index) => {
        return array.indexOf(string) === index
    })
}
console.log(removeDuplicates(stringsArray))



let squaredArr = [2, 5, 6, 8, 10, 12]

const squareArray = (array) => {
    let filteredArray = array.filter((value) => {
        return value % 2 === 0
    })
    let squaredEvens = filteredArray.map((value) => {
        return Math.pow(value, 2)
    })
    let sumOfSquaredEvens = squaredEvens.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0)
    return sumOfSquaredEvens
}

console.log(squareArray(squaredArr))



const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const sumCubed = (array) => {
  let cubedNums = array.map((value) => {
    return Math.pow(value, 3)
  })
    return cubedNums.reduce((accumulator, current) => {
        return accumulator + current
  }, 0)
}
console.log(sumCubed(cubeAndSum2))



const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ] 

const remainderNums = (array) => {
    let onlyNums = array.filter((value) => {
        return typeof value === 'number'
    })
    return onlyNums.map((value) => {
        return value % 3
  })
}
console.log(remainderNums(hodgepodge1))


const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]


const sentenceArr = (array) => {
    let arrSentence = array.map((value) => {
        let capWords = value.name.split(" ")
        for(let index= 0; index< capWords.length; index++) {
            capWords[index] = capWords[index].charAt(0).toUpperCase() + capWords[index].slice(1)
        }
        let name = capWords.join(" ")
        return `${name} is ${value.occupation}`
    })
    return arrSentence
}
console.log(sentenceArr(people))