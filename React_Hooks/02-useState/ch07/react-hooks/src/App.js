import React, { useState } from 'react';
import './App.css';


function App() {
  const [status, setStatus] = useState("Not Delivered")
  return (
    <div className="App">
      <h1>The Package is : {status}.</h1>
      <button 
      onClick={() => setStatus("Delivered")}
      >Deliver</button>
    </div>
  );
}

export default App;
