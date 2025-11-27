import React from 'react'
import { useState } from 'react'
import './App.css'
import './index.css'
function App() {
  const [message, setMessage] = useState("let see the magic");

  const clickHandler = () => {
    setMessage("there is noting like the magic")
  }
  return (
    <><div className="App">
      <h1>{message}</h1>
      <button onClick={clickHandler}>click Me!</button></div>
    </>
  )
}
export default App