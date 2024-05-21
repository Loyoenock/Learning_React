import React from 'react';
import { createRoot} from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App, About,  Contact, History } from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />}> 
        <Route path='history' element={<History />}/>
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>   
  </BrowserRouter>,
);