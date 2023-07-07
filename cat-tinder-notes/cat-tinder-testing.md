# Testing in React

package.json

gonna need jest, testing library

- RTL 
 - react testing library

- tests the software as if a user was using it


# yarn test
 look in App.test.js 
  - import component you want to test 
  - render to render the component
  - getByText is a matcher and matches what is in the parentheses
  - expect that to be in the document

  # create folder in source folder
  - name: _tests_ put all tests in there
   - create file in _tests_ called Home.test.js
   - add a test file for each component being tested
    - generic test structure 
        describe('my function or component', () => {
        it('does the following', () => {
        expect()
         })
        })

- import render
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

# Debugging tools
- screen.debug() shows actual html in test and helps
- screen.logTestingPlaygroundURL() - helpful tool to help debug


# Arrange, Act, Assert
```javascript
describe("<Home />", () => {
    it ("renders the home page for the user", () => {
        // Arrange
        render(<Home/>)
        // Act - act on that condition
        const element = screen.getByText("It's like Tinder, but for Cats")
        // Assert - what is expected
        expect(element).toBeInTheDocument()
    })
})
```


- import into test 
```javascript
import userEvent from '@testing-library/user-event'
import Header from '../components/Header'

describe("<Header/>", () => {
    it("renders without error", () => {
        render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
        )
        const indexLink = screen.getByText(/meet the cats/i)
        expect(indexLink).toBeInTheDocument()
    })

    it('Header has clickable links', () => {
        //arrange
        render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
        )
        // Act
        // set up section action
        // test click on link - userEvent
        userEvent.click(screen.getByText("Meet the Cats!", { exact: false }))
        expect(screen.getByText("Meet the Cats!")).toBeInTheDocument()
    })
})
```