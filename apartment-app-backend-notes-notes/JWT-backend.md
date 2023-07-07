# JWT - JSON Web Token

consists of 3 parts, header, payload, signature

1. Update Gemfile

- gem 'devise-jwt'
- gem 'dotenv-rails', groups: [:development, :test]
then run bundle

2. Update CORS file

4. additional devise setup
- disable flash messages
- config.navigational_formats = []


Dont forget to migrate

3. go to root level

create .env file
enter: DEVISE_JWT_SECRET_KEY= 

- run bundle exec rake secret, copy code in terminal, put it in .env file

-add .env to .gitignore


4. configure devise-jwt
- add all the code from gitHub


5. Revocation

- create DenyList table 
    - rails g model jwt_denylist
    - update migration file with code on github
    - rails db:migrate

- go to models/user.rb
- copy code from github
