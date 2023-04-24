// Javascript Conditionals 3/15/23

// conditionals - decision trees, if/else statements, conditional statements allow the code to determine the outcome of an evaluation based on a true or false value
    // need two elements - a condition and code block

// Boolean - true or false value

// Conditions can be created by three catergories of operators
    // equality operator
    // logical operators
    // relational operators

        // EQUALITY operators - are these two values the same?
                // == loose, looks only at the value
                console.log(42 == 42) // output: true
                console.log(42 == "42") //output: true
                // === strict, looks at both the value and datatype
                console.log(42 === 42) // output: true
                console.log(42 === "42") // output: false

        // LOGICAL operators -Are these evaluations the same?
            // && And - all conditions have to be true to get a true value 
                console.log(45 === 45 && "Charlean".length === 8) //output: true
                    // if any condition is false, the output will be false
                    console.log(45 === 45 && "Charlean".length === 7) // output: false

            // || Or - only requires one condition to be true to get a true output
                console.log(45 === 45 || "Charlean".length === 7) // output: true


            // ! Bang, Not, Negation, Opposite
                console.log(42 === 42) //output: true
                console.log(!42 === 42) //output: false

        //RELATIONAL operators - Arithmetic evaluations
            // > greater than
            // < less than
            // >= greater than or equal to
            // <= less than or equal to
            let favNum = 18
            let myName = "Borja"
            console.log(favNum > 2 * 10) //output: false
            console.log(favNum > myName.length + 11) //output: true



// CONDITIONAL STATEMENT STRUCTURE
    // if - first key word that takes in a condition and produces an output based 
        // if(condition) {
        //     code block that conatins the action to take
        // }
        // let joke = 'bees'
        // joke = 'school'
        // if(joke === 'bees'){
        //     console.log("Can bees fly in the rain? Not without their yellow jackets")
        // } 
        // When reassigning the value to school, no output is produced because the conditional statement does not cover a condition for school.

    // else if(condition) {
        //     code block that contains the action to take
        // }
        // else if - keyword that allows you to provide additional conditional statements


        // let joke = 'bees'
        // joke = 'school'
        // if(joke === 'bees'){
        //     console.log("Can bees fly in the rain? Not without their yellow jackets")
        // } else if(joke === 'school') {
        //     console.log('Luke comes home from his first day of school, and his mother asks, "What did you learn today?"Not enough," Luke replies. They said I have to go back tomorrow')
        // }

    // else {
        // code block that contains the action to take 
    // }
        // else - catchall, if all other conditions are false, else will produce the default output 

        let joke = "bees"
        joke = "school"
        joke = "stairs"
        if(joke === "bees"){
            console.log("Can bees fly in the rain? Not without their yellow jackets")
        } else if(joke === "school") {
            console.log("Luke comes home from his first day of school, and his mother asks, 'What did you learn today?'Not enough,' Luke replies. They said I have to go back tomorrow")
        } else {
            console.log("I don't trust the stairs. They're always up to something.")
        } 
