# Use the let method to set user as variable

```ruby
let(:user) {User.create(email: "testing@example.com", password:"password", password_confrimation:"password")}

it "should have a valid street" do
    apartment = user.apartments.create(
        city: "London",
        unit: "22b",
        state: "England",
        square_footage: 1000,
        price: "5000",
        bedrooms: 1, 
        bathrooms: 1.5,
        pets: "yes",
        image: "image"
    )

    expect(apartment.errors[:street]).to include "can't be blank"
end

```