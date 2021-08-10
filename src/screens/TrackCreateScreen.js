import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';



const TrackCreateScreen = () => {

  const { state, addLocation } = useContext(LocationContext);
  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  }, state.recording);

  return (
    <>
      <TrackForm />
      <Map />
      {err ? <TouchableOpacity onPress={() => startWatching()}><Text>Please enable Location Service</Text></TouchableOpacity> : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
