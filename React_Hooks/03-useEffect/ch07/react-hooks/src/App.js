import './App.css';
import { useReducer } from 'react';

const initialState = {
    message: 'Hello, World!'
};

function reducer (state, action) {
    switch (action.type) {
      case 'Yell':
        return {
          message: `Hey! I Just said ${state.message}`
        };
      case 'Whisper':
        return {
          message: `Excuse me, I just said ${state.message}`
        };
    }
 
}

  function App() {
    const [state, dispatch] = useReducer(
      reducer,
      initialState
    );

    return (
      <>       
        <p>Message: {state.message}</p>
        <button onClick={() => dispatch({ type: "Yell"})}>Yell</button>
        <button onClick={() => dispatch({ type: "Whisper"})}>whisper</button>
      </>
    )
  }

export default App;
