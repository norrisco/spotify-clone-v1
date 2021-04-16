import '../../CSS/PlaylistBody.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';
import SongList from './SongList';
import { useStateValue } from '../../StateProvider';
import { Favorite, MoreHoriz, PlayCircleFilledTwoTone } from '@material-ui/icons';

const PlaylistBody = ({ spotify }) => {
    const [{ discover_weekly }, dispatch ] = useStateValue();

    const playSong = (id) => {
        spotify
            .play({uris: [`spotify:track:${id}`],})
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: 'SET_ITEM',
                        item: r.item,
                    });
                    dispatch({
                        type: 'SET_PLAYING',
                        playing: true,
                    });
                });
            });
    };

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify.playlist:37i9dQZEVXcNP98wmDtYqh`
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: 'SET_ITEM',
                        item: r.item,
                    });
                    dispatch({
                        type: 'SET_PLAYING',
                        playing: true,
                    });
                });
            });
    };

    return (
        <div className='bodyContainer'>
            <Header spotify={spotify} />

            <PlaylistHeader />

            <div className='playlistSongs'>
                <div className='playlistControlIcons'>
                    <PlayCircleFilledTwoTone className='playlistPlayIcon' onClick={playPlaylist}/>
                    <Favorite className='playlistHeartIcon' />
                    <MoreHoriz className='playlistMoreIcon' />
                </div>

                {/* List of Songs */}
                {discover_weekly?.tracks.items.map(item => (
                    <SongList playSong={playSong} track={item.track} />
                ))}
            </div>

        </div>
    )
}

export default PlaylistBody;