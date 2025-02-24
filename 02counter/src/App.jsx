import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(15)

  const addvalue = () => {
    setCount(counter+1)
  }

  const removeValue = () => {
    setCount(counter - 1)
  }

  return (
    <>
      
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addvalue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
