import { useState, useMemo } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0)
  function expensiveTask(num) {
    console.log("inside Expensive task");
    for (let index = 0; index < 1000000000; index++) {
    }
    return num * 2;
  }
  let double = useMemo(() => expensiveTask(input), [input]);



  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        Count: {count};
      </div>
      <input type="number"
        placeholder='enter the num'
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      <div>
        doubleValue : {double}
      </div>

    </div >
  )
}

export default App
