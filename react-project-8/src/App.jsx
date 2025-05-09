import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("I will run on each render")
  });
  function hadle() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={hadle}>
        Click me
      </button>
      <br />
      count is: {count}
    </div>
  )
}

export default App
