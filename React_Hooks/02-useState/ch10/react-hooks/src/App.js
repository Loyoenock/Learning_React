import './App.css';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const createArray = (length) => [...Array(length)];

function Star ({ selected = false, onSelect }) {
  return <FaStar color = {selected ? "red" : "gray"} 
    onClick={onSelect}
  />
}

function StarRating({ totalStars = 5}) {
  const [selectedStars, setSelectedStars] = useState(0);
    return (
      <>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
        <p>{selectedStars} of {totalStars}</p>
      </>
    );
  }

  function App() {
    return <StarRating totalStars={5} />;
  }

export default App;
