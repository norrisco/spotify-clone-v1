import '../../CSS/Player.css';
import SideBar from './Sidebar';
import PlaylistBody from './PlaylistBody';
import Footer from './Footer';


const Player = ({ spotify }) => {
    return (
        <div className='playerContainer'>
            
            <div className='playerBody'>
                <SideBar />
                <PlaylistBody spotify={spotify}/>
            </div>
            
            <Footer spotify={spotify}/>
            
        </div>
    )

}

export default Player;