import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './feature/counter/counterSlice.js';
function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(increment())

  }
  function handleDecrement() {
    dispatch(decrement())
  }

  return (
    <>
      <div>
        <button onClick={handleIncrement}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  )
}

export default App
