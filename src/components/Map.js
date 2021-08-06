import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return (
        <MapView
            style={StyleSheet.absoluteFillObject}
            initialRegion={{
                latitude: 37.421998333333335,
                longitude: -122.08400000000002,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        />
    )
}

const styles = StyleSheet.create({
    map: {
        height: 250,
    }
})

export default Map
