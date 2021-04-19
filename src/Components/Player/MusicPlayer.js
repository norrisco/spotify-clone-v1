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
      />
  );
};

export default MusicPlayer;
