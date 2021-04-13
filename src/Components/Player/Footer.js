import '../../CSS/Footer.css';
import { Grid, Slider } from '@material-ui/core';

import { PlayCircleFilled, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from '@material-ui/icons';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerLeft'>
                <img
                    className='albumCover'
                    src='https://upload.wikimedia.org/wikipedia/en/7/79/Owl-city-ocean-eyes-2009.jpg'
                    alt='Ocean Eyes'
                />
                <div className='songInfo'>
                    <h4>Fireflies</h4>
                    <p>Owl City</p>
                </div>
            </div>

            <div className='footerCenter'>
                <Shuffle className='shuffle'/>
                <SkipPrevious className='skipPrevious'/>
                <PlayCircleFilled fontSize='large' className='playButton'/>
                <SkipNext className='skipNext'/>
                <Repeat className='repeat'/>
            </div>

            <div className='footerRight'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby='continuous-slider' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;