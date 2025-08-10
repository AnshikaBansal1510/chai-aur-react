import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"  // for evaluated expression in createElement
import App from './App.jsx'

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = "chai aur react";

const reactElement = React.createElement(   // injected by bable
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

function MyApp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />   
  </StrictMode>,
)

// MyApp()
// <reactElement/> will not work as here we do not have our customRender function
// it has its own render predefined function which might be different
// anotherElement - will work as it will accept it as an object and convert to tree
// reactElement was not working because of the property key name we have defined which might be different in react library