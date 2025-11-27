import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1)
    if (count >= 20) {
      alert("count is greater than 20")
      setCount(0)
    }

  }
  const removeValue = () => {
    setCount(count - 1);
    if (count <= 0) {
      alert("count is less than 0")
      setCount(0)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}> Remove vlaue</button>
    </>
  )
}

export default App
