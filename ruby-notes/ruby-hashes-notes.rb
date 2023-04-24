# Hashes 

# Hashes are a collection of unique key:value pairs

    # Key is a unique identifier that is the data type of a symbol
    # value is associated with key/symbol and can be any datatype recognized by ruby

# 2 ways to write ruby hashes
# 1st way to make hashes
crystal_gem= {gem1: "Pearl", gem2: "Garnet", gem3: "Amethyst", gem4: "Bismuth"}
p crystal_gem # output: {:gem1=>"Pearl", :gem2=>"Garnet", :gem3=>"Amethyst", :gem4=>"Bismuth"}
                # => Hash rocket


#2nd way to write hashes
# fusions = Hash.new
# p fusions  #output: {} empty hash


# CRUD - Create, Read, Update, and Delete

## Create - we can create new content
    # crystal_gem= {gem1: "Pearl", gem2: "Garnet", gem3: "Amethyst", gem4: "Bismuth"}
    # fusions = Hash.new

## Read - return data, specific values
    # p crystal_gem
    # p crystal_gem[:gem2] # Output: "Garnet"

## Update - we can add or modify the data
    # add data
    crystal_gem[:gem5] = "Malakite"
    p crystal_gem # output: {:gem1=>"Pearl", :gem2=>"Garnet", :gem3=>"Amethyst", :gem4=>"Bismuth", :gem5=>"Malakite"}

    # updating existing key
    crystal_gem[:gem3] = "Amethyst"
    p crystal_gem  # output: {:gem1=>"Pearl", :gem2=>"Garnet", :gem3=>"Amethyst", :gem4=>"Bismuth", :gem5=>"Malakite"}

    # deleting a key:value pair and giving it new name:
    # give it new name, :fusion, and delete the old name, :gem2
    crystal_gem[:fusion] = crystal_gem.delete(:gem2)
    p crystal_gem  # output: {:gem1=>"Pearl", :gem3=>"Amethyst", :gem4=>"Bismuth", :gem5=>"Malakite", :fusion=>"Garnet"}

## Delete - removing content
    crystal_gem.delete(:gem5)



# MODULES - grouping of things based on their similar properties

    ## Enumerables - grouping of things that are iterable
        # arrays, ranges, hashes



# Blocks can be used on Hashes; to iterate and do things to them 
stevens_life = {dad: "Greg", mom: "Rose Quartz", bestie: "Connie", home: "Beach City"}

stevens_life.each do |key, value|
    p "#{value} is Steven's #{key}"
end 
# output: 
# "Greg is Steven's dad"
# "Rose Quartz is Steven's mom"
# "Connie is Steven's bestie"
# "Beach City is Steven's home"

def steven_uni(hash)
    hash.map do |key, value|
        "#{value} is Steven's #{key}"
    end 
end
p steven_uni(stevens_life)