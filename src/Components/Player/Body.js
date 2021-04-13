import '../../CSS/Body.css';
import Header from './Header';

const Body = ({ spotify }) => {
    return (
        <div className='bodyContainer'>
            <Header spotify={spotify} />
        </div>
    )
}

export default Body;