import React, { useContext, useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import MapView, { Circle, Marker, Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {

    // const [coords, setCoords] = useState(null);

    // useEffect(() => {

    //     currentLocation ? setCoords(currentLocation) : null;
    // }, [coords])

    const { state: { currentLocation } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 150 }} />
    }

    //console.log(currentLocation?.location?.coords);
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.location.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region={{
                ...currentLocation.location.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Circle
                center={currentLocation.location.coords}
                radius={30}
                strokeColor='rgba(158,158,255,1.0)'
                fillColor='rgba(158,158,255,0.3)'
            />
        </MapView>
    )
    //return <View><Text>hello</Text></View>

}

const styles = StyleSheet.create({
    map: {
        height: 250,
    }
})

export default Map