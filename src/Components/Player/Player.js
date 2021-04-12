import '../../CSS/Player.css';
import SideBar from './Sidebar';
import Body from './Body';


const Player = () => {
    return (
        <div className='playerContainer'>
            
            <div className='playerBody'>
                <SideBar />
                <Body />
            </div>
            
            {/* Footer/PlayerControls */}
            
        </div>
    )

}

export default Player;