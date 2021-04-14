import { Favorite, MoreHoriz, PlayCircleFilledTwoTone } from '@material-ui/icons';
import '../../CSS/PlaylistBody.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';
import SongList from './SongList';
import { useStateValue } from '../../StateProvider';

const PlaylistBody = ({ spotify }) => {
    const [{ discover_weekly }, dispatch ] = useStateValue();

    return (
        <div className='bodyContainer'>
            <Header spotify={spotify} />

            <PlaylistHeader />

            <div className='playlistSongs'>
                <div className='playlistControlIcons'>
                <PlayCircleFilledTwoTone className='playlistPlayIcon' />
                <Favorite className='playlistHeartIcon' />
                <MoreHoriz className='playlistMoreIcon' />
                </div>

                {/* List of Songs */}
                {discover_weekly?.tracks.items.map(item => (
                    <SongList track={item.track} />
                ))}
            </div>

            
        </div>
    )
}

export default PlaylistBody;