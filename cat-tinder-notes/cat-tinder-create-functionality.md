# create functinality 

- go to CatNew.js

- add a form so user can add a new cat
https://reactstrap.github.io/?path=/docs/components-forms--input

```javascript

import { Form, FormGroup, Label, Input, Button } from 'reactstrap'


const CatNew = () => {

    return(
        <>
        <Form>
                <FormGroup>
                    <Label for="cat-name">Name</Label>
                <Input
                    id="cat-name"
                    name="name"
                    placeholder="Enter cat's name"
                    type="text"
                />
                </FormGroup>
                <FormGroup>
                    <Label for="cat-age">Age</Label>
                <Input
                    id="cat-age"
                    name="age"
                    placeholder="Enter cat's age"
                    type="text"
                />
                </FormGroup>                
                <FormGroup>
                    <Label for="cat-enjoys">Enjoys</Label>
                <Input
                    id="cat-enjoys"
                    name="enjoys"
                    placeholder="Enter cat's enjoys"
                    type="text"
                />
                </FormGroup>                
                <FormGroup>
                    <Label for="cat-image">Image</Label>
                <Input
                    id="cat-image"
                    name="image"
                    placeholder="Enter cat's image"
                    type="text"
                />
                </FormGroup>
            </Form>
        </>
    )
}

export default CatNew

```


# set a state variable in CatNew and import usestate

```javascript
import { useState } from 'react'

    const [newCat, setNewCat] = useState({
        name: "",
        age: "",
        enjoys: "", 
        image: ""
    })
```

# create a listener "change" function to handle the changes , use e in param; e allows it to change as it is being typed, or "listen"
```javascript
    const handleChange = (e) => {
        // spread operator to make a copy of state object
        // e.targe.name will give us the key we are updating based on input
        // e.targe.value will be the new value in state
        setNewCat({ ...newCat, [e.target.name]: e.target.value})
    }
    // ...newCat spread through whole object, e.target.name is what you wanna update, e.targe.value is what you wanna update it with
```

# each input needs to have an "onChange" in the form in CatNew
```javascript
                <FormGroup>
                    <Label for="cat-name">Name</Label>
                <Input
                    id="cat-name"
                    name="name"
                    placeholder="Enter cat's name"
                    type="text"
                    onChange={handleChange}
                    value={newCat.name}
                />
                </FormGroup>
```




# create a function in App.js so that app.js receives what is being passed to it from CatNew (sending up the river)
```javascript
 const createCat = (createdCat) => {
    console.log("created cat:", createdCat)
  }
```


# pass function to CatNew in routes at bottom of App.js
```javascript
<Route path="/catnew" element={<CatNew createCat={createCat}/>} />
```


# go to CatNew and put function createdCat into the parameter to pass it as a prop

const CatNew = ({ createCat}) => 


# add onClick to button  and handleClick function
```javascript
                <Button onClick={handleClick}>
                Submit
                </Button>
```


# create onClick function
```javascript
  const handleClick = () => {
        createCat(newCat)
    }
```



# import useNavigate in CatNew.js
import { useNavigate } from 'react-router-dom'

- add to handleClick function
```javascript
    const handleClick = () => {
        createCat(newCat)
        navigate("/catindex")
    }
```


# create test for CatNew.js

```javascript
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { CatNew } from '../pages/CatNew'


describe("<CatNew />", () => {
    it ("renders the new cat form", () => {
        render(
            <BrowserRouter>
            <CatNew/>
            </BrowserRouter>
        )
        const nameInput = screen.getByRole("textbox", { name: /name/i })
        expect(nameInput).toBeInTheDocument()
        

        const ageInput = screen.getByRole("textbox", { name: /age/i})
        expect(ageInput).toBeInTheDocument()

        const enjoysInput = screen.getByRole("textbox", { name: /enjoys/i})
        expect(enjoysInput).toBeInTheDocument()

        const imageInput = screen.getByRole("textbox", { name: /picture/i})
        expect(imageInput).toBeInTheDocument()
    })


    it("a form with entries for name, age, enjoys, image", () => {
        const formName = screen.getByLabelText(/name/i)
        expect(formName.getAttribute("For")).toEqual("name")
    })
})
```