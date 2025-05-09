import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
  function increment() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count + 1);
  }
  useEffect(() => {
    console.log("main fir se render ho gaya hun")
  })
  return (
    <div>
      <button onClick={increment}>
        Increment
      </button>
      <div>
        Count: {count}
      </div>
    </div>
  )
}

export default App
