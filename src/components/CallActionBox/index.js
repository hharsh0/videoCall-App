import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';


const index = () => {
  const navigation = useNavigation();
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(true)
  const onReverseCamera = () => { }
  const onToggleCamera = () => { 
    setIsCameraOn((currentValue)=> !currentValue)
  }
  const onToggleMicrophone = () => { 
    setIsMicrophoneOn(currentValue => !currentValue);
  }
  const onHangup = () => {
    navigation.navigate("Contacts")
   }
  
  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons name="ios-camera-reverse" size={30} color={'white'} />
      </Pressable>
      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <MaterialIcons name={ isCameraOn? "camera-off": "camera"} size={30} color={'white'} />
      </Pressable>
      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <MaterialIcons name={isMicrophoneOn?"microphone-off" : "microphone"} size={30} color={'white'} />
      </Pressable>
      <Pressable onPress={onHangup} style={[styles.iconButton, {backgroundColor: 'red'}]}>
        <MaterialIcons name="phone-hangup" size={30} color={'white'} />
      </Pressable>
    </View>
  );
}

export default index

const styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: '#333333',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
    marginTop: 'auto',
  },
  iconButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 50,
  },
});