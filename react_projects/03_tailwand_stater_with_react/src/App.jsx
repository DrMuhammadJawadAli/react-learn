import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-10">Tailwind Test</h1>
      <Card username="MuhammadJawad" btnText="Read Me" />
      <Card username="MuhammadJawadAli" btnText="Do more" />
    </>
  )
}

export default App


