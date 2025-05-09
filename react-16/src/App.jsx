
import { createContext, useState } from 'react';
import './App.css'
import ChidA from './components/ChidA';


//1 create context 
const UserContect = createContext();
//2 wrap all the child inside a provider
//3 pass value
// consume the value inside consumer


function App() {
  const [user, setUser] = useState({ name: "Danish" })

  return (
    <>
      <UserContect.Provider value={user}>
        <ChidA />
      </UserContect.Provider>

    </>
  )
}

export default App
export { UserContect }