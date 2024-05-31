import './App.css';
import { useRef } from 'react';

function App() {
  const sound = useRef();
  const color = useRef();

const submit = (e) => {
  e.preventDefault();
  const soundValue = sound.current.value;
  const colorValue = color.current.value;
  alert(`${soundValue} sounds like ${colorValue}`);
  sound.current.value = '';
  color.current.value = '';
}

    return (
      <form onSubmit={submit}>
        <input ref={sound} type='text' placeholder='sound....' />
        <input ref={color} type='color' />
        <button>ADD</button>
      </form>
    )
  }

export default App;
