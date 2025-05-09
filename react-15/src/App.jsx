import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)
  // first -> side-effect function
  // second -> clean-up function
  // third -> comma separated dependency list

  // variation -1
  // runs on every render

  useEffect(() => {
    alert("I will run on each render")
  })

  // that runs only first render
  // useEffect(() => {
  //   alert("I will run on only first render")
  // }, [])
  // variation -3
  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])

  // variation -4
  // multiple dependency
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated")
  // }, [count, total])

  // variation -5
  // cleanup function
  // useEffect(() => {
  //   alert("count is updated")

  //   return () => {
  //     alert("count is unmountd form UI")
  //   }
  // }, [count])

  return (
    <>
      <h5>total number : {total}</h5>
      <button onClick={() => { setTotal(total + 1) }}>Click here</button>
      <br />
      <h5>Count number : {count}</h5>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>

    </>
  )
}

export default App
