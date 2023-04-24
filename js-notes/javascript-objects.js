// Javascript Objects 3/22/23

// Objects - a collection of key:value pairs stored in curly braces, interesection of data and behavior
    // key - datatype of symbol
    // value - any valid datatype of JavaScript


// Creating an object
// const favSong = {
//     artist: "Aretha Franklin", // separate values with commas
//     song: "Day Dreaming"
// }

// keys are artist and song
// values are "Aretha Franklin" and "Day Dreaming"


// accessing object properties with dot notation
    // nameOfTheObject.nameOfTheKey
// console.log(favSong.artist) //Output: "Aretha Franklin"
// console.log(favSong.song) //Output: "Day Dreaming"


// creating an object with a method (behavior)
    // functions bring in behavior. A function that belongs to an object is referred to as a method.

// const favSong = {
//     artist: "Aretha Franklin", // separate values with commas
//     song: "Day Dreaming",
//     displaySong: function() {
//         return `Sip on tea and listen to "${favSong.song}" by ${favSong.artist}.`
//         }   
//     }


// Because the method belongs to the object, the object can be referenced using the keyword this.
const favSong = {
    artist: "Aretha Franklin", // separate values with commas
    song: "Day Dreaming",
    displaySong: function() {
        return `Sip on tea and listen to "${this.song}" by ${this.artist}.` // .this can be used when there's a method(function) in an object, because it belongs to "this" object
        }   
    }




// to reference the method, nameOfObject.nameOfTheKey()
console.log(favSong.displaySong())
    // output: "Sip on tea and listen to "Day Dreaming" by Aretha Franklin.""



// how to destructure an object
    // referencing multple keys from the same object, destructure by assigning the names of the object.
const { artist, song, displaySong } = favSong

// accessing an object's value by it's destructured key
console.log(artist)
console.log(song)
console.log(displaySong())


// iterating through array of objects using a higher-order function
const favList = [
    { artist: "Aretha Franklin", song: "Day Dreaming"},
    { artist: "The Mamas and the Papas", song: "California Dreamin'"},
    { artist: "The Police", song: "Roxanne"},
    { artist: "The Eagles", song: "Hotel California"}
]

// print out the songs that include California
// store a filter method in a variable named getSong
// filter method will create a subset of the original array by iterating across each value in the array and checking for the conditions set, 

const getSong = favList.filter((value) => {
    return value.song.includes("California")
})

console.log(getSong)
// returns
// [
//     { artist: 'The Mamas and the Papas', song: "California Dreamin'" },
//     { artist: 'The Eagles', song: 'Hotel California' }
// ]



//--------------------------------------------------------------------------------------------------------------

// 💻 Challenges


// Consider this variable:
// const person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }

// Write the code that accesses the first name of the person object.
// console.log(person.firstName)

// Write the code that accesses the last name of the person object.
// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth"
// }

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
const person = {
    firstName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    newFunction: function() {
        return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}.`
    }
}
console.log(person.newFunction())


// Consider this variable:
// const product = {
//   name: "chair",
//   price: 24.99
// }

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
const product = {
    name: "chair",
    price: 24.99,
    describeProduct: function() {
        return `The product is a ${this.name}. It costs ${this.price}.`
    }
  }
  console.log(product.describeProduct())

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
const totalWithTax = (object) => {
    return `The total cost of the ${object.name} is ${(object.price * .07 + object.price).toFixed(2)}`
}

console.log(totalWithTax(product))


// Consider this variable:
const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  newMethod: function() {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}`
  }
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const lunchIngredients = (object) => {
    return `The ingredients for ${object.name} ${object.type} are ${object.ingredients}`
}
console.log(lunchIngredients(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.newMethod())



// Consider this variable:
const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const animalObjects = (array) => {
    let onlyCats = array.filter((value) => {
        return value.type.includes("cat")
    })
    return onlyCats
}
console.log(animalObjects(animals))

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const animalNames = (array) => {
    let onlyNames = array.filter((value) => {
        return value.name
    })
    return onlyNames
}
console.log(animalNames(animals))

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const animalAge = (array) => {
    let olderThanTen = array.filter((value) => {
        return value.age > 10
    })
    return olderThanTen
}
console.log(animalAge(animals))
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

const animalSentences = (array) => {
    let newSentences = array.map((value) => {
        return value = `New sentence about ${value.type}`
    })
    return newSentences
} 
console.log(animalSentences(animals))


// Consider this variable:
const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}

const {name, genre} = author
// Write the code that destructures the author object so that the following code snippet will run successfully:
console.log(`${name} is a ${genre} author`)

// // output: "H. G. Wells is a science fiction author"



// Consider this variable:
// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }
// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"




// Consider this variable:
// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.



