# Fetch - create, read, update, delete
- makes request from frontend to backend

- method that takes 2 arguments: url/location and possibly data

- Fetch returns a promise
    - promise is an object that represents eventual completion or failure of an async operation

    3 States:
    - starts as pending
    - can become fullfilled - it worked! we get payload
    - can be rejected - something went wrong (aka broken promise)


# App.js
# get rid of mockCats, update state variable to have empty array
const [cats, setCats] = useState([])

# import useEffect and make useEffect function
```javascript
import { useState, useEffect } from 'react'

 useEffect (() => {
  readCat()
 }, [])
```

# make functions for each crud action, these will fetch
```javascript
  const readCat = () => {
    fetch('http://localhost:3000/cats') //this is the request
    // response is a JSON object; json() converts it to something you can use in JS
    .then(response => response.json())
    .then(payload => { //payload is what we're getting back from the server
      setCats(payload)
    })
    .catch(error => console.log("cat read errors", error)) // if it doesn't work, catch shows up 
  }
```


# fetch for create
```javascript

  const createCat = (createdCat) => {
    fetch('http://localhost:3000/cats', {
      body: JSON.stringify(createdCat),
      headers : {
        "Content-Type": "application/json"
      }, 
      method: "POST"
    })
    .then(response => response.json())
    // no payload since it's addingto the database. We are not getting anything back as far as data
    .then(() => readCat()) // calling on readCat now refreshes state to include new cat
    .catch(error => console.log("Create cat errors: ", error))
  }

  ```


  # fetch for update
```javascript
    const updateCat = (selectedCat, id) => {
    fetch(`http://localhost:3000/cats/${selectedCat.id}`, {
      body: JSON.stringify(selectedCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => readCat())
    .catch(error => console.log("Updated cat errors:", error))
  }
```


# fetch for delete