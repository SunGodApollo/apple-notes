## Ruby classes and objects 

# class - keyword used to define Class
# naming convention for class names = PascalCase
# every class has an end - defines the scope of the class

class AppleTv
end

## create new instance of the class
# p AppleTv.new
# outputs: #<AppleTv:0x00000001047d2238> - new instance of the class, unique instance => object

## saving object to variable
# appleTV = AppleTv.new 
# p appleTV


## Classes need something to do 
    # 1. Hold data in class
    # 2. Retrieve data that has been set



## Getting and Setting

# Setters
    # allow us to pass in values using parameters and store them to variables

# instance variable - a variable that belongs to a class @; @ is like "this" in JS
# class AppleTv
#     def set_show_data(title, actor)
#         @title = title
#         @actor = actor
#     end
# end

# appleTV = AppleTv.new
# appleTV.set_show_data('Ted Lasso', 'Jason Sudekis')
# p appleTV
# output: #<AppleTv:0x0000000100be10a8 @title="Ted Lasso", @actor="Jason Sudekis">



# Getters
    # retrieve data from the class

# class AppleTv
#     def set_show_data(title, actor)
#         @title = title
#         @actor = actor
#     end

#     def get_title
#         @title
#     end

#     def get_actor
#         @actor
#     end
# end

# show = AppleTv.new
# show.set_show_data('Fantasy Island', 'Eva Mendez')
# p show
# p show.get_title
# p show.get_actor

# output:
# #<AppleTv:0x00000001056305a0 @title="Fantasy Island", @actor="Eva Mendez">
# "Fantasy Island"
# "Eva Mendez"


# Initializer - special kind of setter method that takes parameters - allows .new to take parameters
class AppleTv
    def initialize(title, actor)
        @title = title
        @actor = actor
        @watched = false # default value therefore doesn't have to be passed in parameters
    end

    def get_title
        @title
    end

    def get_actor
        @actor
    end

    def has_watched # defining a method to update the @watched value to true
        @watched = true
    end

    def show_data
        if @watched
            "You have watched #{@title} starring #{@actor}"
        else
            "You have not watched #{@title} starring #{@actor}"
        end
    end

end

show = AppleTv.new('Fantasy Island', 'Eva Mendez')
p show.get_title
p show.get_actor
# Output:
# "Fantasy Island"
# "Eva Mendez"

new_show = AppleTv.new('I love Lucy', 'Lucille Ball')
p new_show.has_watched
p new_show.show_data
# output:
# "You have watched I love Lucy starring Lucille Ball"

show3 = AppleTv.new('SpongeBob', 'Patrick')
p show3.has_watched
p show3.show_data
# output:
# "You have watched SpongeBob starring Patrick"



# Attribute Accessor
# attr_accessor - makes more methods by passing a symbol of our instance variable, we get a getter and setter for variable


class AppleTv
    attr_accessor :title, :actor, :watched  # <= these are not parameters, they are symbols of instance variables
    def initialize(title, actor)
        @title = title
        @actor = actor
        @watched = false # default value therefore doesn't have to be passed in parameters
    end

    # def get_title
    #     @title
    # end

    # def get_actor
    #     @actor
    # end

    # def has_watched # defining a method to update the @watched value to true
    #     @watched = true
    # end

    def show_data
        if @watched
            "You have watched #{@title} starring #{@actor}"
        else
            "You have not watched #{@title} starring #{@actor}"
        end
    end

end

show4 = AppleTv.new('Insecure', 'Issa Rae')
p show4.title
show4.title = 'Living Single'
p show4.title
p show4.show_data
show4.watched= true
p show4.show_data

#---------------------------------------------------------------------------------------------------------------
# ❤️ Challenges
# For the following Task challenge use initialize, setter, and getter methods for your class.

# As a developer, I can create a class called Task.
# As a developer, I can create three instances (objects) of class Task. e.g laundry = Task.new
# As a developer, I can initialize each instance of class Task with a title.
class Task
    def initialize(title)
        @title = title
        @completed = false
    end

    def get_title
        @title
    end

    def is_complete
        @completed = true
    end

    def chore_status
        if @completed
            "You have completed #{@title}. Good work!"
        else
            "You have not completed #{@title}. Get to work."
        end
    end

end

laundry = Task.new("wash clothes")

dishes = Task.new("buy soap")

vacuuming = Task.new("clean carpet")


# As a developer, I can see the title of each instance of class Task.
p laundry.get_title
p dishes.get_title
p vacuuming.get_title

# As a developer, I can initialize each instance of class Task with a status that has a default value of 'incomplete'.
p laundry.get_title
p laundry.chore_status

# As a developer, I can update the status of each instance of class Task when the task has been completed.
p laundry.get_title
p laundry.is_complete
p laundry.chore_status



# For the following ColorPalette challenge use initialize and attr_accessor methods in your class.

# As a developer, I can create a class called ColorPalette.
class ColorPalette
    attr_accessor :color1, :color2, :color3
    def initialize(color1, color2, color3)
        @color1 = color1
        @color2 = color2
        @color3 = color3
    end

    def all_green_colors
        "The three colors of green palette are #{@color1}, #{@color2}, and #{@color3}"
    end
    
    def all_orange_colors
        "The three colors of orange palette are #{@color1}, #{@color2}, and #{@color3}"
    end

    def all_brown_colors
        "The three colors of brown palette are #{@color1}, #{@color2}, and #{@color3}"
    end

end
# As a developer, I can create three instances (objects) of class ColorPalette.
# e.g green = ColorPalette.new
# As a developer, I can initialize each instance of the class ColorPalette with three colors.
# e.g. green = ColorPalette.new('Chartreuse', 'Kelly', 'Seafoam')
green = ColorPalette.new('seafoam','forest','grass')
orange = ColorPalette.new('tangerine', 'tigerseye', 'coral')
brown = ColorPalette.new('chocolate', 'burnt umber', 'smokey topaz')

# As a developer, I can print the value of each individual color.
p green.color1
p green.color2
p green.color3


# As a developer, I can create a method called all_colors that when called will print a sentence telling me the three colors of a given palette.
p green.all_green_colors
p orange.all_orange_colors
p brown.all_brown_colors

# As a developer, I can change one or more colors of a given palette.
green.color1 = 'puke'
p green.all_green_colors

orange.color2 = 'hot sauce'
p orange.all_orange_colors

brown.color1 = 'crap'
p brown.all_brown_colors