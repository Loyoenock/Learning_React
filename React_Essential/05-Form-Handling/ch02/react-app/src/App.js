import './App.css';
import { useState } from "react"

function App() { 
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000")

  const submit = (e) => {
    e.preventDefault();
   
    alert(`Title: ${title}, Color: ${color}`)
    setTitle("")
    setColor("#000")
   
  }
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) =>
        setTitle(event.target.value)
        }
        type='text'
        placeholder='color title...'        
       />
       <input value={color}
       onChange={(event) => 
        setColor(event.target.value)
       }
        type='color' />
       <button>ADD</button>
    </form>
  );
}

export default App;
