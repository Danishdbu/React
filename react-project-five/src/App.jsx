
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // create state
  // man
  const [name, setName] = useState('');
  return (
    <div>
      <Card name={name} setName={setName} />
      <p>I am inside in parent component and value of name is {name} </p>
    </div>
  )
}

export default App
