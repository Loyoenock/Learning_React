import './App.css';

const [firstcity, secondcity, thirdcity] = [
  "Entebbe",
  "Kampala",
  "Mbale",
  "Gulu"
];
console.log(firstcity);
console.log(secondcity);
console.log(thirdcity)


function App({ library }) {
  return (
    <div className="App">     
     <div>Hello From {library}</div>
    </div>
  );
}

export default App;
