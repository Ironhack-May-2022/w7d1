import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// React components
// a component is just a function that returns jsx

// a greeting component that shows 'Hi' on the screen

// function Greeting() {
//   return <h1>Hi</h1>
// }

// class component
// class Greeting extends React.Component {
//   render() {
//     return <h1>hi</h1>
//   }
// }

const Greeting = (props) => {
  // console.log(props)
  // const message = 'Hi'

  return <h1>{props.message} {props.name}</h1>
}

// cleaner syntax: destructure in the parameter
// const Greeting = ({ message, name }) => {
//   // console.log(props)
//   // const message = 'Hi'

//   return <h1>{message} {name}</h1>
// }

// <></> this is called a React fragment
ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  //   <Greeting name='marco' message='Hi' />
  //   <Greeting name='jules' message='Hello' />
  //   <Greeting name='alex' message='Guten Tag' />
  // </>
  <App />
)
