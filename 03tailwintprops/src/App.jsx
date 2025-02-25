import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    username : "smit",
    age: 20
  }
  let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwint test</h1>
      <Card username="smit" btnText='click me' />
      <Card username="hitesh" btnText='touch me' />
    </>
  )
}

export default App
