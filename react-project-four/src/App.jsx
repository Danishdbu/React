
import { useState } from 'react'
import './App.css'
import Card from './components/button'

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div>
      <button increment={handleClick}
        text="Click me">
        <h1>{count}</h1>
      </button>
      {/* <Card name="Danish">
        <h1>Best course</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Will be complete the course soon</p>
      </Card > */}




    </div>
  )
}

export default App
