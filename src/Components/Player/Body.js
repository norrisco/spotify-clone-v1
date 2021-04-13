import '../../CSS/Body.css';
import Header from './Header';
import PlaylistHeader from './PlaylistHeader';

const Body = ({ spotify }) => {
    return (
        <div className='bodyContainer'>
            <Header spotify={spotify} />

            <PlaylistHeader />

            <div className='bodyInfo'>

            </div>
        </div>
    )
}

export default Body;