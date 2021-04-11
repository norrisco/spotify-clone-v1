import './App.css';
import { useEffect, useState } from 'react';
import Login from './Components/Login'
import { getTokenFromUrl } from './Components/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = '';

    if (_token) {  
      setToken(_token)
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log('🧑: ', user);
      })
    };

    console.log('TOKEN 👉: ', _token);
  }, []);

  return (
    <div className="App">

      { token ? ( <h1>LOGGED-IN</h1> ): ( <Login /> ) }

    </div>
  );
}

export default App;
