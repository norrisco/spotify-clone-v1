import './App.css';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './Components/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Components/Login';
import Player from './Components/Player/Player';
import { StateProvider, useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

const App = () => {
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

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // Pops info into StateProvider
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcNP98wmDtYqh').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })

    };
  }, []);

  return (
    <div className="App">

      { token ? ( <Player spotify={spotify} /> ): ( <Login /> ) }

    </div>
  );
}

export default App;
