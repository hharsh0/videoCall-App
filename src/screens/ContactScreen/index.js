import { StyleSheet, Text, View, FlatList, TextInput, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import contacts from '../../../assets/data/contacts.json'
import { useNavigation } from '@react-navigation/native';
import {Voximplant} from 'react-native-voximplant';

const ContactScreen = () => {
    const [inputText, setInputText] = useState('')
    const [filteredContacts, setFilteredContacts] = useState(contacts)

    const navigation = useNavigation();
    const voximplant = Voximplant.getInstance();
  
   useEffect(() => {
     voximplant.on(Voximplant.ClientEvents.IncomingCall, incomingCallEvent => {
       navigation.navigate('IncomingCall', {call: incomingCallEvent.call});
     });

     return () => {
       voximplant.off(Voximplant.ClientEvents.IncomingCall);
     };
   }, []);

    useEffect(() => {
        //Search function
        const newContacts = contacts.filter(contact => contact.user_display_name.toLowerCase().includes(inputText.toLowerCase()))

        setFilteredContacts(newContacts)
    }, [inputText])
  
  const callUser = (user) => {
    navigation.navigate("Calling",{user: user})
  }

  return (
    <View style={styles.root}>
      <TextInput
        value={inputText}
        onChangeText={setInputText}
        style={styles.input}
        placeholder="Search..."
      />
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <Pressable onPress={()=> callUser(item)}>
            <Text style={styles.contactName}>{item.user_display_name}</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
}

export default ContactScreen

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  contactName: {
    fontSize: 20,
    marginVertical: 10,
  },
  seperator: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 1,
  },
  input:{
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 5,
      fontSize: 20,
  },
});