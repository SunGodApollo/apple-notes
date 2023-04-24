## Controllers, Routes and Views

# View: 
app/views/home/

Is what the user sees
- ERB file - embedded ruby
- same name as method in home_controller so they connect; movie_recommendations.html.erb
- create instance variable in home_controller.rb 
```ruby
    def movie_recommendations
        @recommendations = 'These are movies that I Promise you will like'
    end
```
embed ruby in view file by using <%=  %>

movie_recommendations.html.erb
```ruby
<h1>Need a movie to watch</h1>

<h2>Here are some movie recommendations to checkout</h2>

<p> <%= @recommendations %> </p>

<ul>
    <% @movies.each do |value| %>
        <li> <%= value %> </li>
        <% end %>
</ul>

```

- create a landing page with links to the other sites:
landing.html.erb

```ruby
<h1> Welcome to your Favorite Movie site </h1>

<%= link_to "Greeter", "/greeter" %>
<br/>

<%= link_to "Movie of the day", "/movie" %>
<br/>

<% link_to "Movie Recommendations", "/recommendations" %>
```


# Controller
app/controllers/home_controller.rb

It coordinates the interaction between the user , the views, and the model
- creating a controller
- $ rails generate controller Home
- put methods in there
```ruby
    def greeter 
        render html: 'Hey there Movie Lovers!'
    end

    def movie 
        render html: 'Slept on movie of the day: Hight Tension'
    end

    def movie_recommendations
        @recommendations = 'These are movies that I Promise you will like'
        @movies = ["Kingdom Come", "John Wick"]
    end
```

# Route
app/config/routes.rb

The path to seeing something
- HTTP verb / route(url) => fat arrow => controller name # controller_method
```ruby
  get '/greeter' => 'home#greeter'

  get '/movie' => 'home#movie'

  get '/recommendations' => 'home#movie_recommendations'

  get '/landing' => 'home#landing'
  root to: 'home#landing'
```