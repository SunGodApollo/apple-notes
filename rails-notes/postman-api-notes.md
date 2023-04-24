# Postman

- API, Application Program Interface
- how computers communicate
- transmits info accross the internet as JSON (Javascript Object Notation)

create app:
rails new rails-api
rails db:create

git remote add origin -github url for repo-
git checkout -b main
git add .
git commit -m "initial commit"
git push origin main

bundle add rspec-rails
rails g rspec:instal 
rails s

create new branch,
rails generate resource Student name:string cohort:string
rails db:migrate

rails routes

rails c
Student.create(name:'Student', cohort: 'Bravo')


INDEX
class StudentsController < ApplicationController
    def index 
        students = Student.all
        render json: students
    end

end

open postman
click on start something new
http something

choose GET and input localhost:3000/student



SHOW
    def show 
        student = Student.find(params[:id])
        render json: student
    end



CREATE

    def create 
        student = Student.create(student_params)
        if student.valid?
            render json: student
        else
            render json: student.errors
        end
    end

    private
    #strong params always use with create
    def student_params
        params.require(:student).permit(:name, :cohort)
    end

go to application_controller
enter: skip_before_action :verify_authenticity_token

in Postman api:
POST: localhost 3000/students

body, raw, text: json
{
    "name": "Jose",
    "cohort": "Bravo"
}



UPDATE

    def update
        student = Student.find(params[:id])
        student.update(student_params)
        if student.valid?
            render json: student
        else 
            render json: student.errors
    end


posmant 
PATCH localhost:3000/students/4

{
    "name": "Jorge",
    "cohort": "Bravo"
}


DESTROY
    def destroy 
        student = Student.find(params[:id])
        if student.destroy
            render json: student
        else 
            render json: student.errors
        end
    end