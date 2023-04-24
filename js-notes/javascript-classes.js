// Javascript classes 3/23/2023

// const car = {
//     make: "Toyota",
//     model: "Tacoma",
//     year: 2004,
//     color: "pink"
// }

// to create a class, use keyword "class"
// class names use PascalCase - first letter is capitalized as well as all subsequent words

// recipeBook RecipeBook

// class + NameOfClass {

// }

// class Car {
//     cosntructor() {
//         this.make = "Toyota",
//         this.model = "Tacoma",
//         this.year = 2004,
//         this.color = "pink"
//     }
// }

// instantiation - creating an instance of a class(object)
// new - reserved keyword allows us to make a new object from the class
// variable = new Class()

// let pinkCar = new Car()
// console.log(pinkCar)

// constructors can take parameters - to make class dynamic and allow input from user
// class Car {
//     constructor(makeString, modelString, yearNumber, colorString) {
//         this.make = makeString,
//         this.model = modelString,
//         this.year = yearNumber,
//         this.color = colorString
//     }
// }

// let myDreamCar = new Car("Prosche", "Boxer", 2023, "Silver")
// console.log(myDreamCar)

// let yourDreamCar = new Car("Audi", "S4", 2023, "Navy")
// console.log(yourDreamCar)


class Car {
    constructor(makeString, modelString, yearNumber, colorString) {
        this.make = makeString,
        this.model = modelString,
        this.year = yearNumber,
        this.color = colorString,
        this.isOperational = true
    } // can make method after inside curly braces
    carBoasting() {
        return `My ${this.make} ${this.model} is super cool!`
    }
    brokeDown() {
        this.isOperational = false
    }
}
let yourDreamCar = new Car("Audi", "S4", 2023, "Navy")
console.log(yourDreamCar.carBoasting())

console.log(yourDreamCar.brokeDown())
console.log(yourDreamCar)


//-----------------------------------------------------------------------------------------

// 💻 Challenges
// Coffee marker: copy the given Coffee class into a text editor

class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }


// Write the code that makes a black coffee object
let blackCoffeeObject = new Coffee("black", 0, 0)

// Write the code that outputs the black coffee's profile
console.log(blackCoffeeObject.coffeeProfile())
// Write the code that makes a coffee object with 1 cream and 2 sugars
let sweetCreamCoffee = new Coffee("sweet", 1, 2)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(sweetCreamCoffee.coffeeProfile())




// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
class Latte {
    constructor(flavor, milkType, numberOfShots) {
        this.flavor = flavor.toLowerCase()
        this.milk = milkType
        this.shot = numberOfShots
    }
    latteProfile() {
        return `A ${this.flavor} latte with ${this.milk} milk and ${this.shots()}.`
    }
    shots() {
        if(this.shot > 1) {
            return `${this.shot} shots`
        } else {
            return `${this.shot} shot`
        }
    }
}

// Write the code that makes a regular, single shot latte
let regularLatte = new Latte("regular", "2%", 1)
// Log the regular, single shot latte's profile
console.log(regularLatte.latteProfile())
// Write the code that makes a double shot, hazelnut latte with almond milk.
let doubleHazelnutLatte = new Latte("hazelnut", "almond", 2)
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(doubleHazelnutLatte.latteProfile())


// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
class Cylinder {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }
    cylinderVolume() {
        return `A cylinder with a height of ${this.height} and a raidus of ${this.radius}, has a volume of ${this.areaCalculation()}`
    }
    areaCalculation() {
        let pi = 3.14
        let totalVolume = pi * this.radius * (this.height * 2) 
        return totalVolume.toFixed(4)
    }
}

// Write the code that rounds the volume of the cylinder to four decimal places
let volumeOfCylinder = new Cylinder(20, 10)
console.log(volumeOfCylinder.cylinderVolume())
// Write the code that creates three unique cylinder objects

