# rails params 4/18/2023



request-response cycle 
- request
    - actions: http verb
    - location: url
- response
    - code: 100, 200, 300, 400, 500
    - payload: html


- a parameter in rails is a hash that adds info to url


Process: 

- rails g controller GitHubUserAccount
- localhost:3000/github_user?username=Sam


- add hash to controller file
```ruby
    def github_user
        @logged_in = params[:logged_in]
        if @logged_in == 'true'
            @user = params[:username]
        else
        @user = 'please log in'
    end
```


- then add to routes file and add param
```ruby
  get 'github_user/:username/:logged_in' => 'git_hub_user_account#github_user'
end
```

# html.erb file

<h1>Hello World</h1>

<h3> Username: <%= @user %> </h3>

<% Logged In %>