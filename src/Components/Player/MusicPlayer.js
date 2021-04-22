import SpotifyPlayer from "react-spotify-web-playback";

const MusicPlayer = ({ accessToken, trackUri }) => {
  if (!accessToken) return null;
  return (
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}

        // uris={['spotify:track:6Skh3CBum0pZw9TOr7FQnX']}
        // uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
        styles = {{
          activeColor: '#fff',
          bgColor: '#282828',
          color: '#fff',
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
