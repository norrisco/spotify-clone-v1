export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,

    //TEMPORARY TOKEN for debugging - TO REMOVE AFTER DEV
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
        default:
            return state;
    }
}

export default reducer;