import './App.css';
import { useState, useEffect } from 'react';



  function App() {
    const [name, setName] = useState('Enoch')
    useEffect(() => {
      document.title = `${name} is the winner!`
    }, [])
    return (
      <section>
        <p>Congragulations {name}!</p>
        <button 
        onClick={() => setName('Loyoh')}
        >Change Winner</button>
      </section>
    )
  }

export default App;
