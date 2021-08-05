import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.text}>AccountScreen</Text>
      <Button title="Sign Out" onPress={signout} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 15,
  }
});

export default AccountScreen;
