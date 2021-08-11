import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity, BackHandler } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContex';

const TrackListScreen = () => {

  const { state, fetchTracks } = useContext(TrackContext);
  const navigation = useNavigation()

  useEffect(() => {

    const subscribe = navigation.addListener('focus', () => {
      fetchTracks();
    })
    return () => {
      return subscribe()
    }
  }, [navigation])

  useEffect(() => {
    fetchTracks();
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, [])

  return (
    <>
      <View style={styles.listview}>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            //console.log(item.name)
            return <TouchableOpacity onPress={() => navigation.navigate('TrackDetailScreen', { _id: item._id })}>
              <View style={styles.listitem}><Text style={styles.text}>{item.name}</Text></View>
            </TouchableOpacity>
          }}
        />
      </View>
      {/* <View>
        <Button
          title="Go to Track Detail"
          onPress={() => navigation.navigate('TrackDetailScreen')}
        />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  listitem: {
    height: 45,
    margin: 5,
    paddingLeft: 5,
    justifyContent: 'center'
  },
  listview: {
    marginTop: 10,
  },
  text: {
    fontSize: 18,
  }
});

export default TrackListScreen;
