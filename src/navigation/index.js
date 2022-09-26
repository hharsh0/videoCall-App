import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import CallScreen from '../screens/CallScreen'
import ContactScreen from '../screens/ContactScreen';
import CallingScreen from '../screens/CallingScreen';
import IncomingCallScreen from '../screens/IncommingCallScreen';
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          //   options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactScreen}
          //   options={{headerShown: false}}
        />
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="Call" component={CallScreen} />
          <Stack.Screen name="Calling" component={CallingScreen} />
          <Stack.Screen name="IncomingCall" component={IncomingCallScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation

const styles = StyleSheet.create({})