// prompt : takes number and returns array with single integer at each index
// input: 142
// output: [1, 4, 2]

// pseudocode 
// create a function
// input: a number 
// process: take in the number, turn number into string
// output: array

const numberArray = (number) => {
    let numberString = number.toString()
    return numberString.split("").map((value) => {
        return parseInt(value)
    })
}
console.log(numberArray(142))