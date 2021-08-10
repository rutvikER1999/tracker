import { useContext } from 'react';
import { Context as TrackContex } from '../context/TrackContex';
import { Context as LocationContext } from '../context/LocationContext';
import * as RootNavigation from "../../RootNavigation";
export default () => {
    const { createTracks } = useContext(TrackContex);
    const { state: { locations, name }, reset } = useContext(LocationContext);

    const saveTrack = async () => {
        await createTracks(name, locations);
        reset();
        RootNavigation.navigate('TrackListFlow')
    };
    return [saveTrack];
};