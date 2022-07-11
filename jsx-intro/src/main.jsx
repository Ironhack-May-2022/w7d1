import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// JSX - JavaScript Extended
// no quotes
// const element = <h1>Hello React</h1>

// use {} to render a variable
const name = 'Marco'
// we can also use 
const element = <h1>Hello {name.toUpperCase()}</h1>

// we can also return JSX from functions
const greet = () => <h1>Hi 😀</h1>

// A JSX structure needs to have one root element
const jsxStructure = <div>
  <div>Hello World</div>
  <div>Hello Galaxy</div>
</div>

// inline styling in react
const style = { backgroundColor: 'green' }

// some names are changed in JSX
// class -> className
// for -> htmlFor
const elementWithCSS = (
  <div className='header'>
    <p style={{ backgroundColor: 'pink' }}>
      first tag
    </p>
    <p style={style}>
      second tag
    </p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // elementWithCSS
  element
  // greet()
)
