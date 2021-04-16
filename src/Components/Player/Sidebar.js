import '../../CSS/Sidebar.css';
import SidebarOption from './SidebarOption';
import { StateProvider, useStateValue } from '../../StateProvider';

import { Home, Search, LibraryMusic } from '@material-ui/icons';

const Sidebar = () => {
    const[{ playlists }, dispatch] = useStateValue();

    return (
        <div className='sidebarContainer'>
            <img className='sidebar_logo' src={`${process.env.PUBLIC_URL}/assets/spotify_logo_white.png`} alt='Spotify Logo' />
        
            <SidebarOption Icon={Home} title='Home'/>
            <SidebarOption Icon={Search} title='Search'/>
            <SidebarOption Icon={LibraryMusic} title='Your library'/>
            
            <br />
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
    )
}

export default Sidebar;