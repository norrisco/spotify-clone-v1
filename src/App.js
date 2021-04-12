import './App.css';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './Components/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Components/Login';
import Player from './Components/Player';
import { StateProvider, useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

const App = () => {
  // const [token, setToken] = useState(null);
  const [{user, token}, dispatch] = useStateValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = '';

    if (_token) {  

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      // setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        // Pops info into StateProvider
        dispatch({
          type: 'SET_USER',
          user: user
        });

      });
    };

    console.log('TOKEN👉: ', _token);
    
  }, []);

  console.log('User🧑: ', user);
  console.log('TOKEN👽: ', token);

  return (
    <div className="App">

      { token ? ( <Player /> ): ( <Login /> ) }

    </div>
  );
}

export default App;
