set variable to reference state variable in App.js
```javascript
const App = () => {


  const [cats, setCats] = useState(mockCats)



  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats}/>} />
        <Route path="/catshow/:id" element={<CatShow cats={cats}/>} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
```



# pass cats into CatIndex.js
```javascript
const CatIndex = ({cats}) => {

    return(
        <>
            <h3>All the cats.</h3>
        </>
    )
}

export default CatIndex
```



# map to iterate over array of cats in CatIndex.js
```javascript
   return(
        <main>
            {cats.map((cat, index) => {
                return(
                <>
                    <h3 key={index}>{cat.name}</h3>
                </>
                )
            })}

        </main>
    )
```



# input card from react strap 
```javascript
import { Card, CardBody, CardTitle, CardSubtitle, NavLink,  } from "reactstrap"

const CatIndex = ({cats}) => {

    return(
        <main>
            {cats?.map((cat, index) => {
                return(
                <Card
                style={{
                    width: '18rem'
                }}
                >
                <img
                    alt="Sample"
                    src={cat.image}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {cat.name}
                    </CardTitle>
                    <CardSubtitle>
                        {cat.age}
                    </CardSubtitle>
                    <NavLink to={`/catshow/${cat.id}`}>
                    The Cat's Meow
                    </NavLink>
                </CardBody>
                </Card>
            )})}
        </main>
    )
}

export default CatIndex
```



# write test for CatIndex
```javascript
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CatIndex from '../pages/CatIndex'
import mockCats from '../mockCats'


describe("<CatIndex/>", () => {
    it("renders cat cards", () => {
        render(
        <BrowserRouter>
            <CatIndex cats={mockCats}/>
        </BrowserRouter>
        )
        mockCats.forEach(cat => {
            const catName = screen.getAllByText(cat.name)
            expect(catName).toBeInTheDocument()
        })
    })
})
```





## CatShow.js
```javascript
import { useParams } from "react-router-dom"

const CatShow = ({cats}) => {
    const{ id } = useParams()
    let selectedCat = cats.find(cat => cat.id === +id)

    return(
        <main>
           {selectedCat && (
            <>
            <img alt='cat pic' src={selectedCat.image}/>
            <h3>
                {selectedCat.name} likes {selectedCat.enjoys}
            </h3>
            </>
           )}
        </main>
    )
}

export default CatShow
```



# Write test for CatShow
```javascript
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import CatShow from '../pages/CatShow'
import mockCats from '../mockCats'

const renderShow = () => {
    render(
    <MemoryRouter> initialEntries={["/catshow/1"]}
        <Routes>
            <Route path='/catshow/:id' element={<CatShow cats={mockCats} />} />
        </Routes>
    </MemoryRouter>
    )
}



describe("<CatShow/>", () => {
    it("renders cat with enjoys", () => {
        renderShow()
        expect(screen.getByText(`${mockCats[0].name} likes ${mockCats[0].enjoys}`, {exact: false})).toBeIntheDocument()
        })
 })
```