go to app/controller folder 
add 
index
create
update
destroy


go to spec/models/cat 
and add test 
```ruby
RSpec.describe Cat, type: :model do
  describe "GET /index" do 
    it "gets a list of cats" do 
      Cat.create(
        name: "Kevin",
        age: 9,
        enjoys: "talk to the dogs by the window",
        image: "url here"
      )
      #make our request to the specific endpoint
      get '/cats'

      # we want our response to be formattedin JSON
      cat = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(cat.length).to eq 1

    end
  end


  describe "POST /create" do 
    it "creates a cat" do
      # remember with create we need params
    cat_params {
      cat: {
        {
          name: "Kevin",
          age: 9,
          enjoys: "talk to the dogs by the window",
          image: "url here"
      }
      }
    }
    # send request to the server
    post "/cats", params: cat_params

    # assure we pass
    expect(response).to have_http_status(200)

    cat = Cat.first
    expect(cat.name).to eq 'Kevin'
    expect(cat.age).to eq 9
    expect(cat.enjoys).to eq 'talk to the dogs outside the window'
  end
end
```

add function to index in cats_controller so test passes 


add function to other methods you build tests for
class CatsController < ApplicationController
    
    def index
        cats = Cat.all
        render json: cats
    end

    def create
        cat = Cat.create(cat_params)
        render json:cat
    end

    def update
    end

    def destroy
    end



    def cat_params
        params.require(:cat).permit(:name, :age, :enjoys, :image)


end
