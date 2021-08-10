import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    //console.log(locations.length)

    const [saveTrack] = useSaveTrack();

    return (
        <View>
            <Input value={name} onChangeText={changeName} placeholder='Enter Name' style={{ margin: 5 }} />
            {
                recording ? <View style={{ margin: 10 }}><Button title='Stop' onPress={stopRecording} /></View>
                    : <View style={{ margin: 10 }}><Button title='Start Recording' onPress={startRecording} /></View>
            }
            {
                (!recording && locations.length) ? <View style={{ margin: 10 }}><Button title='Save Recording' onPress={saveTrack} /></View>
                    : null
            }
        </View>
    )
}

export default TrackForm;
