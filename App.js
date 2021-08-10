import React from 'react'

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';

//screens
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import AccountScreen from './src/screens/AccountScreen';

//context providers
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContex';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

//tracklist and trackdetails screen flow
const Trackstack = createStackNavigator();
const TrackListFlow = () => {
  return <Trackstack.Navigator >
    <Trackstack.Screen name='TrackListScreen' component={TrackListScreen} options={{ headerShown: false }} />
    <Trackstack.Screen name='TrackDetailScreen' component={TrackDetailScreen} />
  </Trackstack.Navigator>
}

const HomeTab = createBottomTabNavigator();
const BottomTab = () => {
  return <HomeTab.Navigator keyboardHidesTabBar={true} >
    <HomeTab.Screen name='TrackListFlow' component={TrackListFlow} options={{ headerShown: false }} />
    <HomeTab.Screen name='TrackCreateScreen' component={TrackCreateScreen} />
    <HomeTab.Screen name='AccountScreen' component={AccountScreen} />
  </HomeTab.Navigator>
}


const SingnStack = createStackNavigator();
const SigninStack = () => {
  return <SingnStack.Navigator>
    <SingnStack.Screen name='SignupScreen' component={SignupScreen} options={{ headerShown: false }} />
    <SingnStack.Screen name='SigninScreen' component={SigninScreen} options={{ headerShown: false }} />
  </SingnStack.Navigator>
}

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name='Loadingcreen' component={ResolveAuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SigninStack' component={SigninStack} options={{ headerShown: false }} />
        <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
