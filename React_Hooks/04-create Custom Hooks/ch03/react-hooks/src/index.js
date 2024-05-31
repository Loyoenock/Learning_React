import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import { createContext } from 'react';


export const TreesContext = createContext();

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

