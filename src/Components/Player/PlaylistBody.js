import { Favorite, MoreHoriz, PlayCircleFilledTwoTone } from '@material-ui/icons';
import '../../CSS/PlaylistBody.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';

const PlaylistBody = ({ spotify }) => {
    return (
        <div className='bodyContainer'>
            <Header spotify={spotify} />

            <PlaylistHeader />

            <div className='bodySongs'>

            </div>

            <div className='playlistControlIcons'>
                <PlayCircleFilledTwoTone className='playlistPlayIcon' />
                <Favorite className='playlistHeartIcon' />
                <MoreHoriz className='playlistMoreIcon' />
            </div>
            {/* List of songs */}
        </div>
    )
}

export default PlaylistBody;