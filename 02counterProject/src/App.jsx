import { useState } from 'react' // hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// React directly injected by bable

function App() {

  let [counter, setCounter] = useState(15);

  // setCounter is a method that will control variable counter
  // counter default value is 15
  
  //let counter = 5;

  const addValue = () => {
    //console.log("clicked", counter);    // problem in UI updation
    counter = counter + 1;

    if(counter > 20){

      setCounter(20);
    }

    else{
      setCounter(counter);   // this method takes the new value we want in counter

      // interview question 
      setCounter((prevCounter) => { return prevCounter + 1})
      setCounter(prevCounter => prevCounter + 1)              // prevCounter(last updated state) comes after completing a call in callback
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
      
  }

  const removeValue = () => {
    
    counter = counter - 1;

    if(counter < 0){

      setCounter(0);
    }

    else    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button 
      onClick={addValue}
      >Add Value {counter}</button>

      <br />

      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
