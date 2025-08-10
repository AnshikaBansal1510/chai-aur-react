import Chai from "./Chai"

function App() {

  const username = "chai aur code"

  return (
    <>
      <Chai/>
      <h1>chai aur react {username}</h1>
      <p>test para</p>
    </>
  )
}

export default App

// only one element at be exported
// to return multiple elements - create a div
// <></> - fragments 

// functions/ components name should be capitalized

// keep file name also capitalized

// some libraries will force you to name files returning html as .jsx

// if you wish to use something as variable use {} - evaluated expression
// means the final outcome of js which is evaluated
