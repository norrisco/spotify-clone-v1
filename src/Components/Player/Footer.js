import '../../CSS/Footer.css';
import { useEffect } from 'react';
import { Grid, Slider } from '@material-ui/core';
import { PlayCircleFilled, PauseCircleFilled, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from '@material-ui/icons';
import { useStateValue } from '../../StateProvider';

const Footer = ({ spotify }) => {
    const [{ token, item, playing }, dispatch] = useStateValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            console.log(r);

            dispatch({
                type: 'SET_PLAYING',
                playing: r.is_playing,
            });

            dispatch({
                type: 'SET_ITEM',
                item: r.item,
            });
        });
    }, [spotify]);

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
            dispatch({
                type: 'SET_PLAYING',
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: 'SET_PLAYING',
                playing: true,
            });
        }
    };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };
    
      const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      };

    return (
        <div className='footerContainer'>
            {/* Static Album Cover and Name */}
            {/* <div className='footerLeft'>
                <img
                    className='albumCover'
                    src='https://upload.wikimedia.org/wikipedia/en/7/79/Owl-city-ocean-eyes-2009.jpg'
                    alt='Ocean Eyes'
                />
                <div className='songInfo'>
                    <h4>Fireflies</h4>
                    <p>Owl City</p>
                </div>
            </div> */}

            <div className='footerLeft'>
                <img
                    className='albumCover'
                    src={item?.album.images[0].url}
                    alt={item?.name}
                />
                {item ? (
                    <div className="songInfo">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="songInfo">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
            </div>

            <div className='footerCenter'>
                <Shuffle className='shuffle'/>
                <SkipPrevious className='skipPrevious' onClick={skipPrevious}/>
                
                {playing ? (
                    <PauseCircleFilled fontSize='large' className='playButton' onClick={handlePlayPause}/>
                ) : (
                    <PlayCircleFilled fontSize='large' className='playButton' onClick={handlePlayPause}/>
                )}
                
                <SkipNext className='skipNext' onClick={skipNext}/>
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