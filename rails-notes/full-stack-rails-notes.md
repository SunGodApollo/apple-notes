$ rails new full-stack-rails -d postgresql -T

$ cd full-stack-rails

$ rails db:create

$ git remote add origin <https://github.com/learn-academy-2022-foxtrot/full-stack-kevin.git><!-- this is mine, don't copy it! >

$ git branch

$ git checkout -b main

$ git status <!-- normally don't want to use all because it's really easy to make mistakes>

$ git add .

$ git status

$ git commit -m 'initial commit'

$ git push origin main

$ bundle add rspec-rails

$ rails g rspec:install

$ rails g model Book name:string read:string

$ rails db:migrate

$ rails g controller Book make sure everything is working

$ rails server

navigate to localhost:3000





Index
- a list of all the things
- GET request
- Read CRUD action
- controller method
    - hold the active record query
- route 
    - defines the url and calls the index method
- view
    - iterated over the active record array
    - added HTML for some structure


Show
- displays one itme
- GET request
- Read CRUD action
- controller action
- route 
    - added parameter
    - added aliases
- view
    - linked back to home and from home to show



New   guides.rubyonrails.org/form_helpers.html
- display a form
- GET request
- Read
- controller method
    -uses the .new method
- route
    -reorder the routes
- view
    - Rails forms :
    - added links to the form


Create
- adds content fro mthe form to the db
- POST request
- create CRUD actoin
- controller 
    - @book = book.create(book_params)
    - strong params - security
       def book_params
            params.require(:book).permit(:name, :read)
        end
    - redirect_to books_path
- route 
- view

Destroy
- controller
- route 
- view
    show.html.erb:
    <p> <%= button_to 'Remove Book', delete_book_path(@book), method: 'delete' %> </p>