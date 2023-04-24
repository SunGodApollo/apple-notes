require 'rspec'
require_relative 'rspec'


# User Stories
# As a developer, I can create a Task.
describe 'Task' do 
    before :each do 
        @task = Task.new
    end

    it 'exists' do
        expect {Task.new}.not_to raise_error
    end

    # As a developer, I can give a Task a title and retrieve it.
    it 'has a title' do 
        @task.title = 'Laundry'
        expect(@task.title).to be_a String
        expect(@task.title).to eq 'Laundry'
    end

    # As a developer, I can give a Task a description and retrieve it.
    it 'has a description' do 
        @task.description = 'wash clothes'
        expect(@task.description).to be_a String
        expect(@task.description).to eq 'wash clothes'
    end

    # As a developer, I can mark a Task done. Tasks should be initialized as 'in progress'.
    it 'has a status that can be marked as done' do
        @task.status = 'in progress'
        expect(@task.status).to be_a String
        expect(@task.status).to eq 'in progress'
        @task.complete
        expect(@task.status).to be_a String
        expect(@task.status).to eq 'completed'
    end

    # As a developer, when I print a Task that is done, its status is shown.
    it 'can print its status' do 
        @task.title = 'Washing the car'
        expect{@task.complete}.to change {@task.status}.from('in progress').to('completed')
        expect(@task.complete).to be_a String
        expect(@task.complete).to eq('Washing the car is completed')
    end
end



# As a developer, I can give a Task a due date. Hint: Use the built-in Ruby Date class.
# 🏔 Stretch Goals
# As a developer, I can add all of my Tasks to a TaskList.
# As a developer with a TaskList, I can print the completed items.
# As a developer with a TaskList, I can print the incomplete items.
# As a developer with a TaskList, I can list all the not completed items that are due today.
# As a developer with a TaskList, I can list all the incomplete items in order of due date.
# As a developer with a TaskList with and without due dates, I can list all the not completed items in order of due date, and then the items without due dates.