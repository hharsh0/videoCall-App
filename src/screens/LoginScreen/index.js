import { StyleSheet, Text, View,TextInput, Pressable } from 'react-native'
import React,{useState} from 'react'

const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const signIn = () => {
        
    }
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
  }
});