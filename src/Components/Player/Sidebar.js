import '../../CSS/Sidebar.css';

const SideBar = () => {
    return (
        <div className='sidebarContainer'>
            <img className='sidebarLogo' src={`${process.env.PUBLIC_URL}/assets/spotify_logo_white.png`} alt='Spotify Logo' />
        </div>
    )
}

export default SideBar;