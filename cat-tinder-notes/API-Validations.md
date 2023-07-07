Rejecting invalid data

build test in spec/models/cat_spec.rb
```ruby
  it "should validate name exists in the entry" do
    cat = Cat.create(age:3, enjoys: 'sleeping and more sleeping', image: 'somecatpic.org')
    expect(cat.errors[:name]).to_not be_empty
  end
```

then go into app/models/cat.rb
```ruby
   validates :name, presence: true
```


make sure database is receiving validations