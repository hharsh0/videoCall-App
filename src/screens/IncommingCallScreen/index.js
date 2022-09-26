import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import bg from '../../../assets/images/ios_bg.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';



const IncommingCallScreen = () => {
    const onDecline = () => {
        
    }
    const onAccept = () => {
        
    }

  return (
    <View style={styles.root}>
      <ImageBackground source={bg} style={styles.image} resizeMode="cover">
        <Text style={styles.name}>Harsh</Text>
        <Text style={styles.phoneNumber}>ringing +91 7688900210</Text>
        <View style={[styles.row, {marginTop: 'auto'}]}>
          <View style={styles.iconContainer}>
            <Ionicons name="alarm" color="white" size={30} />
            <Text style={styles.iconText}>Remind me</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="message" color="white" size={30} />
            <Text style={styles.iconText}>Message</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Pressable onPress={onDecline} style={styles.iconContainer}>
            <View style={styles.iconButtonContainer}>
              <Feather name="x" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Decline</Text>
          </Pressable>
          <Pressable onPress={onAccept} style={styles.iconContainer}>
            <View
              style={[
                styles.iconButtonContainer,
                {backgroundColor: '#2e7bff'},
              ]}>
              <Feather name="check" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Accept</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

export default IncommingCallScreen

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 100,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
    color: 'white',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 50,
  },
  iconText: {
    color: 'white',
    marginTop: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconButtonContainer: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50,
    margin: 10,
  },
});