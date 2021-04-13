import '../../CSS/Footer.css';
import { Grid, Slider } from '@material-ui/core';

// import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import ShuffleIcon from '@material-ui/icons/Shuffle';
// import RepeatIcon from '@material-ui/icons/Repeat';
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from '@material-ui/icons';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerLeft'>
                <p>Album and song details</p>
            </div>

            <div className='footerCenter'>
                <Shuffle className='footer_green'/>
                <SkipPrevious className='footer_green'/>
                <PlayCircleOutline fontSize='large' className='footer_green'/>
                <SkipNext className='footer_green'/>
                <Repeat className='footer_green'/>
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