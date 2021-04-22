import SpotifyPlayer from "react-spotify-web-playback";

const MusicPlayer = ({ accessToken, trackUri }) => {
  if (!accessToken) return null;
  return (
      <SpotifyPlayer
        token = {accessToken}
        showSaveIcon
        name = 'Spotify – Web Player (Clone)'
        uris = {trackUri ? [trackUri] : ['spotify:track:6Skh3CBum0pZw9TOr7FQnX']} //Temporary track uri in the last array
        // uris={['spotify:track:6Skh3CBum0pZw9TOr7FQnX']}
        // uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}

        // Testing these
        persistDeviceSelection = {true}

        styles = {{
          activeColor: '#FF0000', //heart color
          bgColor: '#282828',
          color: '#fff', //player buttons
          loaderColor: '#fff', //music player loading animation
          sliderHandleColor: '#fff',
          sliderColor: '#1cb954', //song time elapsed
          trackArtistColor: '#ccc',
          trackNameColor: '#fff',
      }}
      />
  );
};

export default MusicPlayer;
