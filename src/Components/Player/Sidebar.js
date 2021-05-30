import '../../CSS/Sidebar.css';
import SidebarOption from './SidebarOption';
import { StateProvider, useStateValue } from '../../StateProvider';

import { Home, Search, LibraryMusic } from '@material-ui/icons';

const Sidebar = ({spotify}) => {
    const[{ playlists }, dispatch] = useStateValue();

    const testPlaylist = (id) => 
        spotify.getPlaylist(id).then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:${id}`
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
        <div className='sidebarContainer'>
            <img className='sidebar_logo' src={`${process.env.PUBLIC_URL}/assets/spotify_logo_white.png`} alt='Spotify Logo' />
        
            <SidebarOption Icon={Home} title='Home'/>
            <SidebarOption Icon={Search} title='Search'/>
            <SidebarOption Icon={LibraryMusic} title='Your library'/>
            
            <br />
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} uri={playlist.uri} playPlaylist={testPlaylist}/> 
                // <SidebarOption title={playlist.name} /> 
            ))}

        </div>
    )
}

export default Sidebar;