# Ruby Intro 4/4/2023

- Matz - MINASWAN
- Dynamic Language - dyncamically typed
- Interpreted language - read line by line through an interpreter
- Open-source - available for free and modifiable
- Scripting - code that creates logic
- OOP - object-oriented programming language; everything is an object, everything is an instance of a class
ruby version: ruby -v

irb - interactive ruby; drops into ruby console
exit - exits the ruby console

Ruby console: REPL - sandbox environemt that doesn't save

## Ruby data types
- integers: 1, 2, 3
- floats: 3.5
- strings: use single quotes, unless using punctuation. 
    'hello everyone'
    "hello how y'all doin"
- booleans:
    - Equality operator: == 
    - relational operators: >, <, >=, <=
    - negation operators: !=
    - logical AND: && 
    - logical OR: ||
- nil: javascript's null
- Symbols: 

## Variables
variables require no declarations; use snake case: everything is lower case and words are separated by underscores
    my_name = Apolonio

String interpolation: use double quotes
    "Hey there, #{my_name}!"


## Methods
- ruby methods doen't require parentheses; unless passing in method, it is best to add parentheses for readability
- ruby methods do not modify original data; accessors by default
- to assign variable to new value, 
    - my_name = my_name.reverse
    - my_name.reverse!

- my_name.length
- my_name.upcase
- my_name.capitalize
- my_name.reverse
- my_name.delete('h')
- 4.to_s - to string
- '9'.to_i - to integer
- any time a method has a question mark at the end of it, it will return a boolean.
    - my_name.include?('S')

How to check what class something is a part of, type class at the end. 
- my_name.class
- => String  - string is capitalized, meaning it is a class



## Arrays
 - inside square brackets, also comma separated
 - my_array = [3, 4, 5, 6, 7]

 - zero indexed

 ## array methods
  - my_array.length
  - my_array[-1] => 7 
    -counts from the back of the array
  - my_array.first => 3
  - my_array.last => 7
  - my_array.reverse => reverses array, this method works for arrays and strings
  - Methods can be chained, and will be executed in order
    - my_array.reverse.first => 7

  - to permanently modify an array:
    - my_array[2] = 9
    - use shovel operator << acts as push method
    - my_array << 77  adds 77 to end of array