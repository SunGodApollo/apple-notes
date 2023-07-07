$ rails new cat-tinder-backend -d postgresql -T
$ cd cat-tinder-backend
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install

Add the remote from your GitHub classroom repository
    - git remote add origin (github url)

Create a default branch (main)
    - git checkout -b main

Make an initial commit to the repository
    - git add .
    - git commit -m "initial commit"
    - git push origin main

$ rails server


rails generate resource Cat name:string age:integer enjoys:text image:text

rails db:migrate


# db / seeds.rb
create an object in the seeds.rb file

cats = [
    {
        name: "Kevin",
        age: 9,
        enjoys: "talk to the dogs by the window",
        image: "url here"
    },
    {
        name: "Mister",
        age: 12,
        enjoys: "stealing human food",
        image: "url here"
    },
    {
        name: "Luna",
        age: 5,
        enjoys: "eating house plants and breaking stuff",
        image: "url here"
    },
    {
        name: "Maki",
        age: 1,
        enjoys: "talking to himself",
        image: "url here"
    }
]

cats.each do |cat|
    Cat.create cat
    puts "creating cat #{cat}"
end


$ rails db:seed
everytime rails db seed is run, it adds to database, nothing else

go to contollers/ application_controller.rb
 skip_before_action :verify_authenticity_token


- go to Gemfile at the bottom 

gem 'rack-cors', :require => 'rack/cors'



go to config/initializers file

create a file named cors.rb
paste:
# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # <- change this to allow requests from any domain while in development.

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

Run the command $ bundle from the command line to update the dependencies.