import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {

  const { state, signin, clearErrorMessage } = useContext(Context);
  const navigation = useNavigation();

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      clearErrorMessage();
    })
    return () => {
      return subscribe();
    }
  }, [])

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="SignupScreen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
  },
});

export default SigninScreen;
