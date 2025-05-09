import './App.css'
import UserCard from './components/UserCard'

function App() {


  return (
    <>
      <div className='container'>
        <UserCard name="Love" desc="desc1" style={{ borderRadius: "10px" }} />
        <UserCard name="Maharana Pratap" desc="desc2" />
        <UserCard name="Babbar" desc="desc3" />
      </div>
    </>
  )
}

export default App
