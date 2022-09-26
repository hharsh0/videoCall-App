import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import CallActionBox from '../../components/CallActionBox'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';


const CallingScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const user = route?.params?.user

  const goBack = () => {
     navigation.pop()
  };
  
  return (
    <View style={styles.root}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" color="white" size={25} />
      </Pressable>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
        <Text style={styles.phoneNumber}>ringing +91 7688900210</Text>
      </View>
      <CallActionBox />
    </View>
  );
}

export default CallingScreen

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#31C6D4',
  },
  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10,
  },
});