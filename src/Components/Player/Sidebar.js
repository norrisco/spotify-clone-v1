import '../../CSS/Sidebar.css';
import SidebarOption from './SidebarOption';

// import {HomeIcon, SearchIcon, LibraryMusicIcon } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Sidebar = () => {
    return (
        <div className='sidebarContainer'>
            <img className='sidebar_logo' src={`${process.env.PUBLIC_URL}/assets/spotify_logo_white.png`} alt='Spotify Logo' />
        
            <SidebarOption Icon={HomeIcon} title='Home'/>
            <SidebarOption Icon={SearchIcon} title='Search'/>
            <SidebarOption Icon={LibraryMusicIcon} title='Your library'/>
            
            <br />
            <hr />

            <SidebarOption title='Hiphop' />
            <SidebarOption title='Rock' />
            <SidebarOption title='RnB' />


        </div>
    )
}

export default Sidebar;