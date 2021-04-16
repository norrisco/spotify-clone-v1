export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    token: null,

    //TEMPORARY TOKEN for debugging - TO REMOVE AFTER DEVELOPMENT
    // token: 'BQBZvqbB5UvJL_6PjNBsJWa532vhwIRhYa7LAp1dKX4HZtg617mz0Yu7C38mcdthXgMPFSFwzg07eEY1r6DTbcGAyENXswAhjDzgdGRraEDzya-hH31Its38ZhxeadcW98kMuyCL3E_AaHfhTKkVVjfMqBRzaQ',

};

// Listener: waits and listens for actions
const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, //Keep current state
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            };
        case 'SET_ITEM':
            return {
                ...state,
                item: action.item,
            };
        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state;
    }
}

export default reducer;