# RAILS ASSOCIATIONS

# Core Concepts

- Relationships between tables


- run rails db:migrate after every new model

go to app folder, then go to cohort and type has_many :students inside of class

go to student folder and type belongs_to :cohort


# RAILS ASSOCIATIONS

# Core Concepts
- Relationships between tables
- has_many belongs_to
- Every table has a primate key - id:numbers
- Foreign key - reference to another table's primary key

# Setup
- rails new associations -d postgresql -T
- rails db:create

# Databases
- rails g model Cohort name:string year:string
- rails g model Student name:string cohort_id:integer


# Model Classes
- app/models/cohort.rb
    class Cohort < ApplicationRecord
        has_many :students
    end

- app/models/student.rb
class Student < ApplicationRecord
    belongs_to :cohort
end


 Cohort.create(name:"Bravo", year:"2023")
 bravo = Cohort.find(1)
 bravo.students.create(name:"Doug")