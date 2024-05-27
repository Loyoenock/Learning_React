import './App.css';
import { useState, useEffect } from 'react';



  function App() {
    const [name, setName] = useState('Enoch')
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
      document.title = `${name} is the winner!`
    }, [name])

    useEffect (() => {
      console.log(`The user: ${admin ? 'is an admin' : 'is not an admin'}`)
    },[admin])

    return (
      <section>
        <p>Congragulations {name}!</p>
        <button 
        onClick={() => setName('Loyoh')}
        >Change Winner</button>
        <p> {admin ? "logged in" : "not logged in"}</p>
        <button
        onClick={() => setAdmin(true)}
        >Log In</button>
      </section>
    )
  }

export default App;
