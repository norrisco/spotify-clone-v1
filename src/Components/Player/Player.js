import '../../CSS/Player.css';
import SideBar from './Sidebar';
import Body from './Body';
import Footer from './Footer';


const Player = ({ spotify }) => {
    return (
        <div className='playerContainer'>
            
            <div className='playerBody'>
                <SideBar />
                <Body spotify={spotify}/>
            </div>
            
            <Footer />
            
        </div>
    )

}

export default Player;