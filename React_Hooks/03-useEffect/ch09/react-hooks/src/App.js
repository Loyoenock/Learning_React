import './App.css';
import { useState } from 'react';
import useInput from './useInput';

function App() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
 
const submit = (e) => {
  e.preventDefault();
  alert(`${titleProps.value} sounds like ${colorProps.value}`);
  resetTitle();
  resetColor();
}

    return (
      <form onSubmit={submit}>
        <input 
        {...titleProps}
        type='text' placeholder='sound....' 
         
        />
        <input 
        {...colorProps} 
        type='color' 
          
        />
        <button>ADD</button>
      </form>
    )
  }

export default App;
