/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ContactScreen from './src/screens/ContactScreen'
import CallingScreen from './src/screens/CallingScreen'
import IncommingCallScreen from './src/screens/IncommingCallScreen'
import CallScreen from './src/screens/CallScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ContactScreen /> */}
      {/* <CallingScreen /> */}
      {/* <IncommingCallScreen /> */}
      <CallScreen />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
