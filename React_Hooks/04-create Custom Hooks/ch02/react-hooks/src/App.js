import './App.css';
import { createContext } from 'react';


export const TreesContext = createContext();

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Pine" },
  { id: "4", type: "Spruce" },
  { id: "5", type: "Willow" }
]

function App() {
console.log(trees);
    return (
    <div>
      <h1> Trees I'have Heard Of </h1>
    </div>
    )
  }

export default App;
