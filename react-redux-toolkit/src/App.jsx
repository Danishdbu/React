
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handledecrementClick() {
    dispatch(decrement());

  }
  function handleIncrementClick() {
    dispatch(increment());

  }


  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handledecrementClick}>-</button>
    </div>
  )
}

export default App
