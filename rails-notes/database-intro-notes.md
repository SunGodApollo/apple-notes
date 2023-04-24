# Database Intro 4.12.2023

class Student
    def initialize(name, cohort)
        @name = name
        @cohort = cohort
    end
end

Student.new('Felix', 'Bravo')
Student.new('James', 'Bravo')


# Databases
structured to recognize relationships between items
- rows and columns
- model is a class 
- each row is an object because each row is an instance of a class
-PK = primary key - a unique identifier for each row


# PostgreSQL
- talks to databases
- open-source 
- Object Relational Database Mgmt System (ORDMS)
- OOP

- psql , \l 


# SELECT, FROM
- keywords are uppercase - use splat to select all
    - SELECT * FROM country
    - SELECT name, continent
        FROM country
    - SELECT name, continent, population 
        FROM country
        

    # WHERE clause is a comparison operator and accepts the following: =, !=, >, <, >=, <=, BETWEEN, LIKE, and IN, NOT, AND, OR.

    SELECT name, population, surfacearea
    FROM country
    WHERE surfacearea < 100000;

    # The IN operator refers to a set of values.

    SELECT name, population, governmentform
    FROM country
    WHERE governmentform
    IN ('Republic', 'Monarchy');

    # For the LIKE operator the % is a wildcard, meaning it can stand for any number of any characters rather than matching the characters exactly.

    SELECT name, population, governmentform
    FROM country
    WHERE governmentform
    LIKE '%onarchy';

    # The NOT operator excludes a set of values.

    SELECT *        <-- means all columns
    FROM country
    WHERE
    NOT(continent = 'North America');


    # The OR operator allows for values that meet either condition.

    SELECT code, name, population, gnp
    FROM country
    WHERE population > 1e+8
    OR gnp > 1e+6;


    # The AND operator allows for only the values that meet both conditions.

    SELECT code, name, population, gnp
    FROM country
    WHERE population > 1e+8
    AND gnp > 1e+6;

    SELECT name, population, surfacearea
    FROM country
    WHERE surfacearea
    BETWEEN 100000
    AND 500000;


# ORDER BY
You can order the result set of a query by adding an ORDER BY clause after the WHERE clause.

    SELECT name, population, governmentform
    FROM country
    WHERE governmentform IN ('Republic', 'Monarchy')
    ORDER BY population;

# You can append ASC or DESC to make the order ascending or descending.

    SELECT name, population, governmentform
    FROM country
    WHERE governmentform IN ('Republic', 'Monarchy')
    ORDER BY population DESC;
    

# LIMIT
A SELECT will always return all the items that meet a particular condition. To reduce the number of items that are returned you can pass the LIMIT clause after the WHERE clause.

The following examples limits the number of rows in the result set to ten:

    SELECT name, population, governmentform
    FROM country
    WHERE population < 100000
    LIMIT 10;

# AS
The AS clause will create an additional column for the query. The AS clause requires a name for the alias of the column.

    SELECT name, population,
    gnp / population AS gnp_per_capita   <-- alias
    FROM country
    WHERE population > 1e+8;


# WITH
The WITH clause allows a developer to create subqueries. WITH allows us to define a SELECT statement and give it an alias. Then we can make a query from that alias.

Here we create a subquery called populated_countries that eliminates any countries that have a population of 0 and a gnp of 0. Then, we can use the alias populated_countries to look for the 10 countries that have the lowest gnp.

    WITH populated_countries AS (
        SELECT name, population, gnp
        FROM country
        WHERE population > 0
        AND gnp > 0
        )
    SELECT name, population, gnp
    FROM populated_countries
    ORDER BY gnp
    LIMIT 10;


# Aggregate Functions
So far, we've stored items into tables and selected lists of items from them. But what if we wanted to do more than print lists? In PostgreSQL, we can also perform operations on a list like addition or computing the average. Clauses like COUNT, SUM, AVG, MIN, and MAX perform an action on a particular set of data that is passed in.

# Using SUM we can return the total population for every entry in the database.

    SELECT SUM(population)
    FROM country;


# Using COUNT we can see the most common form of government and how many rows meet that criteria.
    SELECT governmentform, COUNT(*)
    FROM country
    GROUP BY governmentform
    ORDER BY count DESC
    LIMIT 1;


# GROUP BY
The GROUP BY clause is used together with the SELECT statement to group together rows that have the same data.

You can also use the aggregate functions like COUNT or AVG that can be used with GROUP BY.

AVG performs a calculation on the row data that is being passed then returns the data grouped by the region.

    SELECT region, AVG(lifeexpectancy)
    FROM country
    GROUP BY region;
    Here we can see how many countries are in a particular region using COUNT and GROUP BY.

    SELECT region, COUNT(name)
    FROM country
    WHERE region='South America'
    GROUP BY region



---------------------------------------------------------------------

Challenges 

WHERE
What is the population of the US? (HINT: 278357000)

    SELECT name, population
    FROM country
    WHERE name = 'United States'


What is the area of the US? (HINT: 9.36352e+06)

        SELECT name, population, surfacearea
        FROM country
        WHERE name = 'United States'

Which countries gained their independence before 1963?

    SELECT name, indepyear
    FROM country
    WHERE indepyear < 1963 

List the countries in Africa that have a population smaller than 30,000,000 and a life expectancy of more than 45? (HINT: 37 entries)

    SELECT name, continent, population, lifeexpectancy
    FROM country
    WHERE continent = 'Africa'
    AND population < 30000000
    AND lifeexpectancy > 45


Which countries are something like a republic? (HINT: Are there 122 or 143?)

    SELECT name, governmentform
    FROM country
    WHERE governmentform LIKE '%Republic%'

Which countries are some kind of republic and achieved independence after 1945? (HINT: 92 entries)

    SELECT name, continent, governmentform, indepyear
    FROM country
    WHERE governmentform LIKE '%Republic%'
    AND indepyear > 1945


Which countries achieved independence after 1945 and are not some kind of republic? (HINT: 27 entries)

    SELECT name, continent, governmentform, indepyear
    FROM country
    WHERE governmentform NOT LIKE '%Republic%'
    AND indepyear > 1945



ORDER BY
Which fifteen countries have the lowest life expectancy? (HINT: starts with Zambia, ends with Sierra Leonne)

    SELECT name, lifeexpectancy
    FROM country
    WHERE lifeexpectancy > 0 
    ORDER BY lifeexpectancy ASC
    LIMIT 15

Which fifteen countries have the highest life expectancy? (HINT: starts with Andorra, ends with Spain)

    SELECT name, lifeexpectancy
    FROM country
    WHERE lifeexpectancy > 0 
    ORDER BY lifeexpectancy DESC
    LIMIT 15

Which five countries have the lowest population density (density = population / surfacearea)? (HINT: starts with Greenland)

    SELECT name, population, surfacearea, population / surfacearea AS pop_density
    FROM country
    WHERE population > 0
    AND surfacearea > 0
    ORDER BY pop_density ASC
    LIMIT 5


Which countries have the highest population density?(HINT: starts with Macao)

    SELECT name, population, surfacearea, population / surfacearea AS pop_density
    FROM country
    WHERE population > 0
    AND surfacearea > 0
    ORDER BY pop_density DESC
    LIMIT 5


Which is the smallest country by area? (HINT: .4)

    SELECT name, surfacearea
    FROM country
    WHERE surfacearea > 0
    ORDER BY surfacearea
    LIMIT 1



Which is the smallest country by population? (HINT: 50)?

    SELECT name, population
    FROM country
    WHERE population > 0
    ORDER BY population ASC
    LIMIT 1



Which is the biggest country by area? (HINT: 1.70754e+07)

    SELECT name, surfacearea
    FROM country
    ORDER BY surfacearea DESC
    LIMIT 1



Which is the biggest country by population? (HINT: 1277558000)

    SELECT name, population
    FROM country
    ORDER BY population DESC
    LIMIT 1


Who is the most influential head of state measured by population? (HINT: Jiang Zemin)

    SELECT name, population
    FROM country
    ORDER BY population DESC
    LIMIT 1


Subqueries: WITH
Of the countries with the top 10 gnp, which has the smallest population? (HINT: Canada)

    WITH top_ten_gnp AS (
        SELECT name, population, gnp
        FROM country
        ORDER BY gnp DESC
        LIMIT 10
        )

    SELECT name, population, gnp
    FROM top_ten_gnp
    ORDER BY population ASC


Of the 10 least populated countries with permament residents (a non-zero population), which has the largest surfacearea? (HINT: Svalbard and Jan Mayen)

    WITH least_pop AS (
        SELECT name, population, surfacearea
        FROM country
        WHERE population > 0 
        ORDER BY population asc
        LIMIT 10
        )

    SELECT name, population, surfacearea
    FROM least_pop
    ORDER BY surfacearea DESC


Aggregate Functions: GROUP BY
Which region has the highest average gnp? (HINT: North America)

    SELECT region, AVG(gnp)
    FROM country
    GROUP BY region
    ORDER BY avg DESC
    LIMIT 1



Who is the most influential head of state measured by surface area? (HINT: Elisabeth II)

    SELECT headofstate, SUM(surfacearea)
    FROM country
    GROUP BY headofstate
    ORDER BY sum DESC
    LIMIT 1



What is the average life expectancy for all continents?

    SELECT continent, AVG(lifeexpectancy)
    FROM country
    GROUP BY continent


What are the most common forms of government? (HINT: use count(*))

    SELECT governmentform, COUNT(*)
    FROM country
    GROUP BY governmentform
    ORDER BY count DESC
    LIMIT 1


How many countries are in North America?


What is the total population of all continents?



Stretch Challenges
Which countries have the letter ‘z’ in the name? How many?
Of the smallest 10 countries by area, which has the biggest gnp? (HINT: Macao)
Of the smallest 10 countries by population, which has the biggest per capita gnp?
Of the biggest 10 countries by area, which has the biggest gnp?
Of the biggest 10 countries by population, which has the biggest per capita gnp?
What is the sum of surface area of the 10 biggest countries in the world? The 10 smallest?
What year is this country database from? Cross reference various pieces of information to determine the age of this database.