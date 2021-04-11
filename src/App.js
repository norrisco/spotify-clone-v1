import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login'
import { getTokenFromUrl } from './Components/Spotify';

const App = () => {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = '';

    if (_token) {  
      setToken(_token)
    };

    console.log('TOKEN 👉', _token);
  }, []);

  return (
    <div className="App">

      { token ? ( <h1>LOGGED-IN</h1> ): ( <Login /> ) }

    </div>
  );
}

export default App;
