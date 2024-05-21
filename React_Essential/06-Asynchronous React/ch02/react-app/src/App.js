import './App.css';
import { useState, useEffect } from "react"

function GithubUser({ name, twitter, repos, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{twitter}</p>
      <p>{repos}</p>
      <img src={avatar} alt={name} height={150}/>
    </div>
  )
}
function App() { 
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/loyoenock`
    )
    .then((response) => response.json())
    .then(setData);
  }, []);
  if (data)
  return (
 <GithubUser 
 name={data.name} 
 twitter={data.twitter_username} 
  repos={data.public_repos}
  avatar={data.avatar_url}
 />
);
return <h1>Data</h1>
  
}

export default App;
