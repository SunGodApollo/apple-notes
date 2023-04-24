# Active Record 4.13.2023

Full stack - model, view, controller (MVC)
MVC - philosophy 


Active Record - gem that makes up rails structure
 - allows rails app to talk to database 
    - Rails (written in Ruby), PorstgreSQL(flavor of SQL)

ORM - object relational mapper (translator between languages)

# starting app
$ rails new dog_app -d postgresql -T
$ cd dog_app
$ rails db:create
$ rails s

db (databases) live only on the computer they were created on Rails app and files can be shared

## CRUD

# create a class (generate a model)
use a rails generator
generate a model => $rails generate model Schedule day:string date:data event:string
line 24 is generating a table; creating columns and data types

- migrations are timestamps

$ rails db:migrate
- migration creates the schema


### Rails console

$ rails c - writes ruby in console and puts it into the sql database
$ Schedule.all => SELECT "schedules".* FROM "schedules"

# create a new instance of class
$ Schedule.create(day: 'Wednesday', date: '2023-04-12', event: 'Office Hours')


# READ

Schedule.all => gives back array of things

We can look for certain things in array
Schedule.first
Schedule.find(2) - read actions in crud
Schedule.where(day:'Wednesday') -returns every instance where query is true


# UPDATE
- can assign variables
office = Schedule.first

- update by referencing variable
office.update(event: 'Really Awesome Office Hours')

- updating by not referencing variable
Schedule.first.update(day: 'Testing')


# DELETE
wb = Schedule.find 3




---------------------------------------------------------------------------------

ROLODEX CHALLENGE

As a developer, I have been tasked with creating a database model that will be used in a rolodex application. I want to ensure that the database behaves as expected and the necessary actions can be performed on the database instances.

Set Up

# Create a new Rails app named 'rolodex_challenge'.

$rails new rolodex_app -d postgresql -T

# Create the database. The output in the terminal should look like this:
$rails db:create

Created database 'rolodex_development'
Created database 'rolodex_test'


# Generate a model called Person with a first_name, last_name, and phone. All fields should be strings.

$rails generate model Person first_name:string last_name:string phone:string
invoke  active_record
      create    db/migrate/20230414025008_create_people.rb
      create    app/models/person.rb


# Run a migration to set up the database.

$rails db:migrate

== 20230414030142 CreatePeople: migrating =====================================
-- create_table(:people)
   -> 0.0085s
== 20230414030142 CreatePeople: migrated (0.0086s) ============================


# Open up Rails console.

$rails c


Actions

# Add five family members into the Person table in the Rails console.
done

$ Person.create(first_name: 'Angelica', lst_name: 'Cortes', phone: '345-423-3213')

# Retrieve all the items in the database.

$ Person.all

# Add yourself to the Person table.

$ Person.create(first_name: 'Angelica', lst_name: 'Cortes', phone: '345-423-3213')



# Retrieve all the entries that have the same last_name as you.

Person.where(lst_name: 'Ortiz')


# Update the phone number of the last entry in the database.

new_last_name.update(phone: '360-321-0989')

# Retrieve the first_name of the third Person in the database.
$ third_person = Person.third
$ third_person.first_name


Stretch Challenges

# Update all the family members with the same last_name as you, to have the same phone number as you.

$ last_name = Person.where(lst_name: 'Ortiz')
$ last_name.update(phone: '360-515-6293')

# Remove all family members that do not have your last_name.

$ not_family = Person.where(lst_name NOT 'Ortiz')
not_family.destroy