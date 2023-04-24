# Ruby Conditionals and Methods 4/5/2023

# conditionals
# if - keyword
# end - keyword
# every if statement has an end

# if 7 + 8 == 15
#     p 'the answer is 15'
# end

# # else - keyword - catchall / does not take an evaluation like javascript

# if 7 + 8 == 16
#     p 'the answer is 16'
# else
#     p 'no conditions evaluated to true'
# end 

# # elsif - keyword - takes an evaluation // we can as many elsif as we need

# if 7 + 8 == 16
#     p 'the answer is 16'
# elsif
#     7 + 8 == 17
#     p 'the answer is 17'
# elsif
#     p 'the answer is 15'
# else 
#     p 'no conditions evaluated to true'
# end 


# ## User inputs 
# my_name = 'Raymond'

# if my_name == 'Apple'
#     p 'Hey there Apple'
# else 
#     p "Hey there, #{my_name}"
# end 


# # gets - allows for user input in the terminal - can assign a variable to gets

# # my_name = gets
# # p my_name
# # => "Kevin\n" means new line break

# # chomp - remove any additional characters at the end of a string

# p 'What is your name'
# your_name = gets.chomp
# p "Thank you for being a polyglot, #{your_name}!"

# my_name = gets.chomp
# p my_name

# if my_name == 'Trish'
#     p 'Hi there Trish'
# else 
#     p "Hey there, #{my_name}"
# end 



# ## Methods
# # A Method is a function in ruby.

# # def creates method
# # end every def needs an end

# def greeter
#     'hello bravo'
# end

# ## function invocation - p name of function
# p greeter 

# # implicit return - ruby automatically returns the last line, therefore, return is not needed

# ## method with a parameter: name
# def greeter name
#     "Hello #{name}"
# end

# ## function invocation - p name of function
# p greeter "Mark"


# ## mulitply nums together: parameters can be encased in parentheses; user preference
# def multiply (num1, num2)
#     num1 * num2
# end
# p multiply(3, 5)


# ## methods with conditionals inside of them 

# def bigger_number(num1, num2)
#     if num1 > num2
#         "#{num1} is bigger than #{num2}"
#     elsif num1 < num2
#         "#{num2} is bigger than #{num1}"
#     else 
#         "#{num1} and #{num2} are equal!"
#     end
# end
# # p is no needed inside of methods(functions); only when invoking them

# p bigger_number(36, 49)



# ## Methods with user inputs

# puts 'Enter your name:'
# user_name = gets.chomp
# p user_name

# puts 'Enter your age:'
# user_age = gets.chomp.to_i ## to_i changes string to integer
# p user_age

# def can_you_vote(name, age)
#     if age >= 18
#         "Hi #{name}! #{age} is old enough to vote!"
#     else 
#         "Hi #{name} #{age} is not old enough to vote!"
#     end
# end

# p can_you_vote(user_name, user_age) 


# ------------------------------------------------------------------------------------------------------------------


# ✅ Challenge: Password Checker
# As a developer, you have been tasked with creating the user registration for a secure web site. To test your code, enter the user ID and password in the terminal to find out if they are acceptable. The user ID and password must adhere to the to following criteria:

# User ID and password cannot be the same.
# User ID and password must be at least six characters long.
# User ID cannot contain the following characters: !#$ or spaces
# Password must contain at least one of: !#$
# Password cannot be the word "password".
# User password must contain at least one number.

puts 'Enter your user name'
user_id = gets.chomp
p user_id
puts 'Enter you desired password'
user_pw = gets.chomp
p user_pw

# check for failure of creation in if statement
# elsif if username and password include, then return they are valid

def user_registration(user_name, password)
    if user_name == password
        "Your username and password cannot be the same"
    elsif user_name.include?('!') || user_name.include?('#') || user_name.include?('$')
        "Your username contains invalid characters"
    elsif user_name.length < 6 || password.length < 6
        "Your username or password is too short"
    elsif password.include?('password')
        "Your password cannot contain the word 'password'"
    elsif !password.include?('!') || !password.include?('#') || !password.include?('$')
        "Your password must contain at least one of the following characters: '!', '#', or '$' "
    elsif !password.match(/\d/)
        "Your password must contain at least one number"
    else 
        "Your username and password meet the criteria"
    end
end

p user_registration(user_id, user_pw)
