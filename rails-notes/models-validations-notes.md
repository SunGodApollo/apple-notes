clear rails console: cmd K

# rails create new app
# rails db:create

# $ bundle add rspec-rails

# $ rails generate rspec:install

# rails g model Animal name:string age:integer
dont forget to migrate 
rails db:migrate

# write tests inside db/models/animal_spec
```ruby
RSpec.describe Animal, type: :model do
  it 'is valid with valid attributes' do
    cat = Animal.create(name:'Kevin', age:9, phone: '123-4567')
    expect(cat).to be_valid
  end

  it 'is not valid without a name' do
    cat = Animal.create(age:9)
    expect(cat.errors[:name]).to_not be_empty 
  end

  it 'is not valid without an age' do 
    cat = Animal.create(name: 'Mr. Schnoggins')
    expect(cat.errors[:age]).to_not be_empty
  end

  it 'is not valied if name is outside the range 2-20 characters' do 
    cat = Animal.create(name:'X', age:5)
    expect(cat.errors[:name]).to_not be_empty 

    long_cat = Animal.create(name:'Kevin the One-Armed WonderCat', age:9)
    expect(long_cat.errors[:name]).to_not be_empty
  end

  it 'is not valid without a phone number' do
    dog = Animal.create(name:'Theo', age:4)
    expect(dog.errors[:phone]).to_not be_empty
  end

  it 'is not valid with duplicate phone number' do 
    dog = Animal.create(name:'Nika', age:12, phone:'555-1212')
    dupe = Animal.create(name'Nika', age:12, phone:'555-1212')
    expect(dupe.errors[:phone]).to_not be_empty
  end 
end

```


# go to app/modles/animal.rb and add for each test written
```ruby
    validates :name, presence: true
    validates :age, presence: true
    validates :phone, presence: true
    validates :phone, uniqueness: true
    validates :name, length: { in: 2..20 }

```