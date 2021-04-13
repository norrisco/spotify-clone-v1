import "../../CSS/PlaylistHeader.css";

const PlaylistHeader = () => {
  return (
    <div className='playlistHeaderContainer'>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/79/Owl-city-ocean-eyes-2009.jpg"
        alt="Album Cover"
      />

      <div className="playlistInfo">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.</p>
      </div>
    </div>
  );
};

export default PlaylistHeader;
