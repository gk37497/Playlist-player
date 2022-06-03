import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {TopTabs} from './src/Navigation';
import SplashScreen from 'react-native-splash-screen';

const theme = {
  dark: false,
  colors: {
    primary: '#0D405A',
    secondary: '#FCC699',
    background: '#FCC699',
    card: '#0D405A',
    text: '#0D405A',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const strangerThings = {
  dark: false,
  colors: {
    primary: '#FF1515',
    secondary: '#1E193C',
    background: '#1E193C',
    card: '#FF1515',
    text: '#FF1515',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const root = {flex: 1, opacity: 1};
  return (
    <NavigationContainer theme={theme}>
      <View style={root}>
        <StatusBar hidden={true} />
        <TopTabs />
      </View>
    </NavigationContainer>
  );
};

export default App;
