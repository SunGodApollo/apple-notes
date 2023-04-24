## Ruby Blocks and Iterables 4/5/2023

# Iteration - repeating a process until a condition is met


# Types of iteration
# while
# Blocks
    # Times
    # Each
    # Map
# Range


# WHILE 
 # Requires a starting value and runs until a condition is met

 # Structure:
    # starting point
    # while method with the condition
        # the value you want to be printed
        # the order of the value
    # end

#  number = 1
#  while number < 8
#     p number
#  end

 # output: infinite loops of 1 because the only instructions to execute are to print the number that is assigned the integer of 1 which is always < 8
 
 # to prevent infinite loop, give the instructions of an incrementation.
 number = 1
 while number < 8
    p number
    number = number + 1
 end
 # output
# 1
# 2
# 3
# 4
# 5
# 6
# 7


nums_array = []
num = 1
while num <= 23
    nums_array << num
    # num = num + 2 --> long hand way, same as line 53
    num += 2
end
p nums_array
# Output: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]


## BLOCKS
# Blocks - code functionality that gets passsed to a method
    # defined with do and end
    # can also define with {}, reserved for one line of code

    ## Structure
    # object.method do ---> start of the block
        # code statement ---> what will be executed
    # end ---> end of the block

    


# TIMES
# times - a method that will repeat the code a certain number of times

my_number = 8

my_number.times do
    p 'Polyglots!' 
end 
# Output:
# "Polyglots!"
# "Polyglots!"
# "Polyglots!"
# "Polyglots!"
# "Polyglots!"
# "Polyglots!"
# "Polyglots!"
# "Polyglots!"

# same as do but on a single line:
my_number.times {p 'Polyglots!'}




# EACH
# each - method requires a list such as an object or array to determine the ending condition
    # to access the elements of the list you will need to use pipes | |

emojis = ['pineapple', 'coconut', 'palmtree']

emojis.each do |value|
    p value
end
# Output:
# "pineapple"
# "coconut"
# "palmtree"
p emojis
# Output: ['pineapple', 'coconut', 'palmtree']

emojis.each do |value|
    p "The #{value} emoji has been passed to the block"
end
# output 
# "The pineapple emoji has been passed to the block"
# "The coconut emoji has been passed to the block"
# "The palmtree emoji has been passed to the block"





# MAP 
jump_start = ['Will', 'Gene', 'Nicole']

jump_start.map do |value|
    value + "🏆"
end

p jump_start
# output: ["Will", "Gene", "Nicole"]

# To see new array, store the map operation ina a new variable
reward = jump_start.map do |value|
    value + "🏆"
end
p reward 
# Output: ["Will🏆", "Gene🏆", "Nicole🏆"]

# Or use bang operator to mutate the original array 
jump_start.map! do |value|
    value + "🏆"
end

p jump_start




#-----------------------------------------------------------------------------------------------------------------------

# ❤️ Challenges
# Create a loop that prints the numbers 1 to 20.
 number = 0
 while number <= 20
    p number
    number += 1
 end

# Create a loop that prints the numbers 1 to 20 using a different approach than previously used.
(1..20).each do |value|
    p value
end

# Create a loop that prints only even numbers from 20 to 0.
my_number = 20
while my_number >= 0 
    p my_number
    my_number -= 2
end
# Create a method that takes in an array of numbers and returns a new array with all the numbers multiplied by 5.
my_array = [3, 45, 69, 78, 98]
def mult_array(array)
    array.map do |value|
        value * 5
    end
end
p mult_array(my_array)

# Create a method that takes in an array of lowercase words and capitalizes all of the words, permanently modifying the original array.
lowercase_array = ['deez', 'nutz', 'is', 'the', 'best']
def cap_array(array)
    array.map! do |value|
        value.upcase
    end
end
p cap_array(lowercase_array)

# Create a method that takes in an array of numbers and returns the largest number in the array.
nums_array = [45, 100, 32, 43, 98, 69]
def largest_num(array)
    array.max
end
p largest_num(nums_array)


# Create a method that takes in an array of words and returns the word with the least number of characters.
words_array = ['all', 'deez', 'hoes', 'wowza']
def smallest_word(array)
    array.min_by do |value|
        value.length
    end
end
p smallest_word(words_array)

# Create a method that takes in an array of numbers and returns only the odd numbers sorted from least to greatest.
another_nums_array = [35, 66, 99, 41, 13, 35, 100]
def odds_sorted(array)
    array.select do |value|
        value.odd?
    end.sort
end
p odds_sorted(another_nums_array)


# Create a method that takes in an array of strings and returns all the strings in reverse casing. All uppercase letters should be returned lowercased and all lowercased letters should be returned in uppercase letters.
array_strings = ['HELLO', 'how', 'ARE', 'you']
def reverse_cap(array)
    array.map do |value|
        value.swapcase!
    end
end
p reverse_cap(array_strings)



# Create a method that will take in an array of numbers and return an array with the remainder of each number when divided by 2.
array_nums = [12, 66, 69, 95, 100]
def remainder_nums(array)
    array.map do |value|
        value % 2
    end
end
p remainder_nums(array_nums)

# Create a method that will take in a range of letters and return an array with all the letters capitalized.
range_array = ('a'..'z').to_a
def range_capd(array)
    array.each do |value|
        value.capitalize!
    end
end
p range_capd(range_array)
