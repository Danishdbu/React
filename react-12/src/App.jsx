import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("Danish")
  const handlebtn = () => {
    alert("I handle events");
  }

  const handleMouse = () => {
    alert("I handle onMouseOver");
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  return (
    <>
      <div className="button">
        <button onClick={handlebtn}>Click me</button>
      </div>
      <div className="red" onMouseOver={handleMouse}>
        I am red div
      </div>
      <input type="text" value={name} onChange={handleName} />

    </>
  )
}

export default App
