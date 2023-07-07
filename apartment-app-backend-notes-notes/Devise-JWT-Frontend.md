1. start in App.js

- get rid of mock files in state variables 
```javascript
const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState([])
  
  return(
    ...
  )
}
```

2. Update sign up and login components to collect input data
```javascript
import { useRef } from "react"

 const formRef = useRef()

 - add to form tag: 
   <form ref={formRef} onSubmit={handleSubmit}>
```


3. update Handlesubmit method for signup and same for login
```javascript
 const handleSubmit = (e) => {
  //stop the default behavior of the form.  We want to send it with fetch.
    e.preventDefault()
    // store the form entries in a variable
    const formData = new FormData(formRef.current)
    // create and object from the entries
    const data = Object.fromEntries(formData)
    // store user's info in format that can be used with jwt.
    const userInfo = {
        "user":{ email: data.email, password: data.password }
    }
}
```

make functions to fetch for login and signup and signout in App.js
```javascript
const login = (userInfo) => {
    fetch(`${url}/login`, {
        body:JSON.stringify(userInfo),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        method: 'POST'
    })
    .then(response => {
        localStorage.setItem("token", response.headers.get("Autorization"))
    })
    .then(payload => {
        setCurrentUser(payload)
    })
    .catch(error => console.log('login errors:', error))
}
```

pass function from App.js to login component via props

/login
```javascript
const Login = ({login}) => {

const formRef = useRef()
const navigate = useNavigate()

 const handleSubmit = (e) => {
  //stop the default behavior of the form.  We want to send it with fetch.
    e.preventDefault()
    // store the form entries in a variable
    const formData = new FormData(formRef.current)
    // create and object from the entries
    const data = Object.fromEntries(formData)
    // store user's info in format that can be used with jwt.
    const userInfo = {
        "user":{ email: data.email, password: data.password }
    }
    login(userInfo)
    navigate('/')
    e.target.reset()
}

}
```
