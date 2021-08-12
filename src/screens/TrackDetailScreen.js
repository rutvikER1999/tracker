import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useContext } from 'react';
import { View, StyleSheet, Text, ActivityIndicatorBase } from 'react-native';
import MapView, { Circle, Marker, Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContex';

const TrackDetailScreen = () => {

  const { state } = useContext(TrackContext);
  const route = useRoute();

  const track = state.find(t => t._id === route.params._id);
  const initialCoords = track.locations[0].coords;
  const { latitude, longitude } = initialCoords;

  const arr = track.locations.map(loc => loc.coords).filter((loc) => loc.latitude != null && loc.longitude != null);
  console.log(arr)
  return (
    <>
      <Text>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
        }}>
        <Polyline coodinates={arr} />
      </MapView>
    </>
  )
};

const styles = StyleSheet.create({
  map: {
    height: 250
  }
});

export default TrackDetailScreen;
