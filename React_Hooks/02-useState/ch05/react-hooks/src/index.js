import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const [first, second, third]= ["Shalom", "Dawid", "Shalom"]
console.log(first, second, third);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

