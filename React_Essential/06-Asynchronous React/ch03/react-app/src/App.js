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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/loyoenock`
    )
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
  }, []);
 
  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <prev>{JSON.stringify(error)}</prev>
  if (!data) return null;

  return (
    <GithubUser 
      name={data.name} 
      twitter={data.twitter_username} 
      repos={data.public_repos}
      avatar={data.avatar_url}
 />
);
 
}

export default App;
