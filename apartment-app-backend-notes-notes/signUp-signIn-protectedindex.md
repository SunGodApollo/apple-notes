# login 


```javascript
const LogIn= () => {

    const handleSubmit = () => {
        console.log('sign up')
    }

    return(
        <div>


        </div>

    )
}
```




# routes

element={<MyApartments apartments={apartments} current_user={current_user}>}



# ApartmentProtectedIndex can be renamed as MyApartments
```javascript
const ApartmentProtectedIndex = ({ apartments, current_user }) => {
    // use the filter method to create a new array of apartments belonging to the user by using user_id
    const myApartments = apartments?.filter(apartment => {
        current_user?.id === apartment.user_id
    })

    return(
        <h1> ApartmentProtectedIndex </h1>
        <main>
        <h1>Find your perfect apartment home</h1>
        <div>
            {myApartments?.map((apartment, index) => {
                return (
                    <NavLink to={`/apartmentshow/${apartment.id}`} key={index}>
                       <Card color="white" className="card">
                        <img alt="Sample" src={apartment.image} className="card-img" />
                        <CardBody className="card-body">
                        <CardTitle className="card-title">{apartment.name}</CardTitle>
                        <CardSubtitle className="card-subtitle">{apartment.square_footage}</CardSubtitle>
                        <NavLink to={`/apartmentshow/${apartment.id}`} className="card-link">
                         Click To Learn More
                        </NavLink>
                        </CardBody>
                        </Card>
                      </NavLink>
                )
            })}

        </div>
        </main>
    )
}
```



# conditional rendering

go to header route and pass in 
<Header current_user={currentUser}>

- go to navigation and pass in current_user
const Navigation = ({ current_user })
- add to links you wanna show
{current_user &&(
    <Navlink>
)}

- add to links you don't wanna show
{!current_user &&(
    <NavLinks>
)}

- go to header and pass in current user
const Header = ({current_user})