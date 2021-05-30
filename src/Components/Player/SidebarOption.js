import '../../CSS/SidebarOption.css';

function SidebarOption({ title, Icon, uri, playPlaylist }) {
    return (
        <div className='sidebarOption' onClick={() => playPlaylist(uri)}>
            {Icon && <Icon className='sidebarOption_icon' />}
            {Icon ? (<h4>{title}</h4>) : <p>{title}</p>} 

            <p>{console.log(uri)}</p>
        </div>
    )
}

export default SidebarOption;
