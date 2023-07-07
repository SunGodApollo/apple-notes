# create a react app

- make a front end react app (separate)
- yarn create react-app cat-tinder-frontend-notes

- accept assignment

- copy repo url, 
- git remote add origin (url)
- git checkout -b main
- git branch -d master 

- ask for branch protections



# create mock data 
create folders
- assets
- pages = this will hold different pages: think CRUD: index, new, show, edit
- components = this will hold things like header and footer


# Add react strap
- a version of bootstrap for react
- reactstrap.github.io

$ yarn add bootstrap
$ yarn add reactstrap

- Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'


# create routes in App.js
import Home from './pages/Home.js'
import Header from './components/Header';
import CatIndex from './pages/CatIndex';
import CatShow from './pages/CatShow';
import CatNew from './pages/CatNew';
import CatEdit from './pages/CatEdit';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

      <Header />
      <Home />
      <CatIndex />
      <CatShow />
      <CatNew />
      <CatEdit />
      <NotFound />
      <Footer />


# create state variable
const [cats, setCats] = useState()


# create mockCats
- in src folder
- mockCats.js
- copy and paste from seeds file from rails backend app
- plug in mockCats into useState




# Add react router, allows us to navigate between the pages
- $ yarn add react-router-dom
- go to index.js and import { BrowserRouter } from 'react-router-dom'
- add 
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>

  - everything we want to click to go to another page, wrap in <Routes></Routes>
    <Routes>
        <Home />
        <CatIndex />
        <CatShow />
        <CatNew />
        <CatEdit />
        <NotFound />
    </Routes>
    - import router to app.js
        import { Routes, Route } from 'react-router-dom'
        
    - add route paths 
         <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={CatIndex />} />
        <Route path="/catshow" element={CatShow />} />
        <Route path="/catnew" element={CatNew />} />
        <Route path="/catedit" element={CatEdit />} />
        <Route path="*" element={NotFound />} />
      </Routes>
      <Footer />