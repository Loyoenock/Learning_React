import React from 'react';
import ReactDOM from 'react-dom/client';
import { useFetch } from './useFetch';
import './index.css';

function App({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>loading...</h1>;
  if (error) 
    return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
    );
    return (
      <div>
        <img 
          src={data.avatar_url} 
          alt={data.login} 
          style={{ width: 200 }}
        />
      </div>
      
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App login="loyoenock"/>
);

