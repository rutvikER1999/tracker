import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case '':

        default:
            return state;
    }
}

const fetchTracks = dispatch => () => { };
const createTracks = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations });
};


export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTracks },
    []
);