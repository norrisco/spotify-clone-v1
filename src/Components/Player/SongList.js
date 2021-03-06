import '../../CSS/SongList.css';

const SongList = ({ track, playSong }) => {
    return (
        <div className='songListContainer' onClick={() => playSong(track.id)}>

            <img 
                className='songAlbumCover'
                src={track.album.images[0].url}
                alt='Album Cover'
            />

            <div className='songListInformation' >
                <h1>{track.name}</h1>
                {/* <h1>{track.uri}</h1> */}
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} - {" "}
                    {track.album.name}
                </p>
            </div>

        </div>
    )
}

export default SongList;
