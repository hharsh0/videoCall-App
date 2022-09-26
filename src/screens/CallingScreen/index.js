import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallActionBox from '../../components/CallActionBox'

const index = () => {
  return (
    <View style={styles.root}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Harsh</Text>
        <Text style={styles.phoneNumber}>ringing +91 7688900210</Text>
      </View>
      <CallActionBox />
    </View>
  );
}

export default index

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
});