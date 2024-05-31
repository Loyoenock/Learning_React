import React, { createContext, useContext}  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';


const TreesContext = createContext();

export const useTrees = () => useContext(TreesContext);

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Oak" },
  { id: "3", type: "Pine" },
  { id: "4", type: "Spruce" },
  { id: "5", type: "Willow" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{ trees }} >
    <App />
  </TreesContext.Provider>
);

