import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallActionBox from '../../components/CallActionBox';


const CallScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.cameraPreview} />
        <View></View>
      <CallActionBox />
    </View>
  );
}

export default CallScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#31C6D4',
  },
  cameraPreview: {
    backgroundColor: '#FFE162',
    borderRadius: 10,
    width: 100,
    height: 150,
    position: 'absolute',
    right: 10,
    top: 100,
  },
});