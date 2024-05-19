import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [emotion, setEmotion] = useState("Happy");
  
  useEffect(() => {
    console.log(`It's ${emotion} right Now`);
  }, [emotion])
  return (
    <div className="App">     
     <div>Current emotion is {emotion}</div>
     <button onClick={ () => setEmotion("Sad")}>Sad</button>
     <button onClick={ () => setEmotion("Excited")}>Excited</button>
    </div>
  );
}

export default App;
