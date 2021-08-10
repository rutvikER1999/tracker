import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Map from '../components/Map';
import Geolocation from 'react-native-location';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

// const getCurrentLocation = async () => {
//   console.log('runnn')
//   try {
//     const loc = await Geolocation.getLatestLocation((location) => console.log(location), (err) => console.log(err));
//     console.log('ddd', loc)
//   } catch (error) {
//     console.log(error)
//   }
// }


const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);



  return (
    <View>
      <Map />
      {err ? <TouchableOpacity onPress={() => startWatching()}><Text>Please enable Location Service</Text></TouchableOpacity> : null}
      <Button title='location' onPress={() => getCurrentLocation()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
