## React Intro 3/24/23

React: Javascript library for building user interfaces (UI)

- Javascript library: a collection of code snippets and dependencies to perform tasks on a JS application
- UI: how the user interacts with an application

React is popular because of the following features:
    - Component based 
    - Reusable 
    - Scalable
    - User interfaces


DOM: Document Object Model
 - visual representation of the HTML elements
- organizes the html elements into a tree-like structure called the node tree.


Reproducing the basic structure of a function-based React component
    -Copy the code block provided in the syllabus

This is a component:
```js
        const App = () => {
            return <h1>Hello World!</h1>
        }
```
    - a function that returns JSX to the UI
    - React component follow PascalCase naming convention


JSX- Javascript Syntax Extension 
    - allows html syntax and have the functionality of JS
    - hybrid between html and JS
    - to add additional elements in the return:
        - () and <> </> around JSX elements
        - React fragments: <> </>, empty angle brackets
```js
                return(
                <>
                <h1>Bravo Jams</h1>
                <h3>Enjoy these sweet beats </h3>
                </>
                )
```

Creating multiple components
- Song component
"Angel" by Lalah Hathaway
"I will Always Love You" by Whitney Houston
"Killing Me Softly" by the Fugees
"All Along the Watchtower" by Jimi Hendrix
```js
    const App = () => {
        return(
            <>
            <h1>Bravo Jams</h1>
            <h3>Enjoy these sweet beats </h3>
            <Song />
            <Footer />
            </>
        )
    }
    
    const Song = () => {
        return (
            <ul>
                <li>"Angel" by Lalah Hathaway</li>
                <li>"I will Always Love You" by Whitney Houston</li>
                <li>"Killing Me Softly" by the Fugees</li>
                <li>"All Along the Watchtower" by Jimi Hendrix</li>
            </ul>
        )
      }
```

After making "Song" component with list of items, we can then add the Song component to the "App" component. The App component is the parent component; the APp component will then run the Song component within itself

- Footer Component
"Don't forget your tea" then add it to App component so its rendered

```js
      const Footer = () => {
        return <footer> Don't forget your tea</footer>
      }
```
