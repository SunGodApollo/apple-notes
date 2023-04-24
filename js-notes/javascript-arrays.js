// JavaScript Arrays 3.16.2023

// data types - predefine classification of information 
// every data type has properties

// 1
// "1"

// behaviour

// 5 + 8
// "hello".toUpperCase()
// true.toUpperCase() doesn't work


// "hello" + "!" concatenation

// console.log("hello" + "!")
// --> hello!

// console.log("hello".concat("!"))
// --> hello!


// DATA TYPES: boolean, number, sysmbols, null, undefined, string
//  primitive data types - cannot be broken down

//------------------------------------------------------------------------

// array - data types that holds sets of information
// [] - defined by square brackets

    // [5]
    // [true]
    // ["hello"]
    // [4, 5, 6, "hello", true, "yo!"]
    // console.log([].length)
    // --> 0

    // console.log([3].length)
    // --> 1

    // console.log([4, 5, 6, "hello", true, "yo!"].length)
    // --> 6

    // [4, 5, 6, "hello", true, "yo!"]        // array
    // [4, 5, 6, "hello", true, "yo!"].length // number

    // let myArray = [4, 5, 6, "hello", true, "yo!"]
    // console.log([4, 5, 6, "hello", true, "yo!"])
    // console.log(myArray.length)

    // to access stuff inside of the array
    // console.log(myArray[0])
    // --> 4
    // console.log(myArray[5])
    // --> yo!

    //to get the last item in the array without knowing how long the array is:
    // console.log(myArray[myArray.length - 1])
    // the length will always be the length -1

    // console.log(myArray[100])
    // --> undefined


    // changes 3rd index to the new assigned string below
    // myArray[3] = "Hello Bravo class!"
    // console.log(myArray)


// BUILT IN METHODS
    // mutator - ermanently modify the thing it is called on 
    // accessor - will not

    let myArray = [4, 5, 6, "hello", true, "yo!"]


    myArray.push("hello world!") // .push is a mutator; built in method; adds to the end of the array
    console.log(myArray)
    // -->

    myArray.pop()  // removes last item in array
    console.log(myArray) 

    myArray.reverse()  // reverses the complete array
    console.log(myArray)


    myArray.slice(2,4)
    console.log(myArray) 
    // --> won't output anything because .slice is not a mutator, it's an accessor
    console.log(myArray.slice(2, 4))
    // --> ['hello', 6]

    let subsetArray = myArray.slice(2, 4)
    console.log("slice:", subsetArray)



    // console.log(myArray.join())
    // --> yo!,true,hello,6,5,4

    // console.log(myArray.join(""))
    // --> yo!truehello654

    // console.log(myArray.join("*"))
    // ---> yo!*true*hello*6*5*4


    let bravo = "hello bravo class"
    // console.log(bravo.reverse())
    // --> bravo.reverse is not a function, reverse method ONLY applies to arrays
    //      you are calling the function on the wrong data type

    console.log(bravo.split())
    // --> [ 'hello bravo class!' ] makes the string into a array

    console.log(bravo.split("")) // makes each letter into an index in an array
    // [
    //     'h', 'e', 'l', 'l', 'o',
    //     ' ', 'b', 'r', 'a', 'v',
    //     'o', ' ', 'c', 'l', 'a',
    //     's', 's'
    //   ]

    console.log(bravo.split("").reverse())
    // [
    //     's', 's', 'a', 'l', 'c',
    //     ' ', 'o', 'v', 'a', 'r',
    //     'b', ' ', 'o', 'l', 'l',
    //     'e', 'h'
    //   ]
      
    console.log(bravo.split("").reverse().join(""))
    // ssalc ovarb olleh

    //------------------------------------------------------------------------------------

    //Consider the variable:
    var groceryList = ["chips", "dip", "cookies"]

    // Write the code that will add "soda" to the end of the original array.
    console.log(groceryList.push("soda"))
    console.log(groceryList)

    // Write the code that will add "granola" to the end of array without altering the original array.
    console.log(groceryList.concat("granola"))
    
    // Write the code that will return a subset of the array containing only "chips" and "dip".
    let subArray = groceryList.slice(0,2)
    console.log(subArray)
    
    // Write the code that will add "beans" to the "chips" and "dip" array.
    console.log(subArray.concat("beans"))

    

    // Consider the variable:
    var numbers = [2, 4, 6, 8, 10]

    // Write the code that will add the number 0 to the beginning of the array.
    console.log(numbers.unshift(0))
    console.log(numbers)

    // Write the code that will add the number 12 to the end of the array.
    console.log(numbers.push(12))
    console.log(numbers)

    // Write the code that will remove the first number from the array.
    console.log(numbers.shift())
    console.log(numbers)

    // Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
    let newNumber = [0].concat(numbers)
    console.log(newNumber)



    //Consider the variable:
    var numSet = [2, 13, 6, 8, 4, 2]

    // Write the code that finds the index of the first appearance of the number 2.
    console.log(numSet.indexOf(2))

    // Write the code that finds the index of the last appearance of the number 2.
    console.log(numSet.lastIndexOf(2))

    // Write the code that returns the number at the third index.
    console.log(numSet[3])



    // Consider the variable:
    var characters = ["y", "a", "r", "r", "a"]

    // Write the code that brings all the letters in the characters array together into a string.
    console.log(characters.join(""))
    // Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
    let charsReversed = characters.reverse()
    console.log(charsReversed)

    // Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
    console.log(charsReversed.join("*"))

    // Write the code that brings all the letters in the charsReversed array together into a string without separators.
    console.log(charsReversed.join(""))
    
    // Create two arrays consisting of three first names of your cohort members in each.
    let myArray1 = ["Nikki", "Jake", "Dre"]
    let myArray2 = ["Mark", "Ray", "Borja"]
    // Write the code that sorts the names in alphabetical order.
    let newNameArray = myArray1.concat(myArray2)
    newNameArray.sort()
    console.log(newNameArray)

    // Write the code that sorts the names in reverse alphabetical order.
    newNameArray.sort().reverse()
    console.log(newNameArray)

    // Write the code that sorts all the names in alphabetical order in a single array.
    


    
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true

    const fullHouse = (array) => {
        const counts = {}
        for(const num of array) {
            if (counts[num]) {
                counts[num]++
            } else {
                counts[num] = 1
            }
        }
    
        let hasPair = false
        let hasThreeOfAKind = false
        for (const count of Object.values(counts)) {
            if (count === 2) {
                hasPair = true
            } else if (count === 3) {
                hasThreeOfAKind = true
            }
        }
        return hasPair && hasThreeOfAKind
    }
    console.log(fullHouse(hand1))