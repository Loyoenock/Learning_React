import React, { useState } from 'react';
import './App.css';


function App() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="App">
     <input type='checkbox' value={checked} onChange={() => setChecked(!checked)} />
     <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

export default App;
