import React, { useContext } from 'react';
import './App.css';
import { TreesContext } from './index';


function App() {
  const { trees } = useContext(TreesContext);
 
      return (
      <div>
        <h1> Trees I'have Heard Of </h1>
        <ul>
          {trees.map((tree) => (
            <li key={tree.id}>{tree.type}</li>
          ))}
        </ul>
      </div>
      )
    }

export default App;
