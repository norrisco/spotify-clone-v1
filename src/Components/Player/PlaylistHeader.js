import "../../CSS/PlaylistHeader.css";
import { useStateValue } from '../../StateProvider';

const PlaylistHeader = () => {
  const [{ discover_weekly }, dispatch ] = useStateValue();

  return (
    <div className='playlistHeaderContainer'>
      <img
        src={discover_weekly?.images[0].url}
        alt='Album Cover'
      />

      <div className='playlistInfo'>
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
        {/* <p>Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.</p> */}
      </div>
    </div>
  );
};

export default PlaylistHeader;
