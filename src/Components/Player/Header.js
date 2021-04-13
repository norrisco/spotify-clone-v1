import '../../CSS/Header.css';
import { Avatar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useStateValue } from '../../StateProvider';

const Header = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='headerContainer'>
            <div className='headerLeft'>
                <Search />
                <input 
                    placeholder='Search for artists and songs'
                    type='text'
                />
            </div>

            <div className='headerRight'>
                <Avatar
                    src={user?.images[0]?.url}
                    alt={user?.display_name}
                />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;