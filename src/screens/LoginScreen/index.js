import { StyleSheet, Text, View,TextInput, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Voximplant } from 'react-native-voximplant';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

import { useNavigation } from '@react-navigation/core';
import {APP_NAME, ACC_NAME} from '../../Constants';


const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const voximplant = Voximplant.getInstance();
    const navigation = useNavigation();
    
     useEffect(() => {
       const connect = async () => {
         const status = await voximplant.getClientState();
         if (status === Voximplant.ClientState.DISCONNECTED) {
           await voximplant.connect();
         } else if (status === Voximplant.ClientState.LOGGED_IN) {
           redirectHome();
         }
       };

       connect();
     }, []);

    const signIn = async () => {
      try {
        const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
        await voximplant.login(fqUsername, password);

        redirectHome();
      } catch (e) {
        console.log(e);
        Alert.alert(e.name, `Error code: ${e.code}`);
      }
    };

    const redirectHome = () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Contacts',
          },
        ],
      });
    };

  return (
    <View style={styles.root}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="username"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  root: {
    padding: 10,
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#3AB4F2',
    marginVertical: 10,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 20,
    color: 'white',
  }
});