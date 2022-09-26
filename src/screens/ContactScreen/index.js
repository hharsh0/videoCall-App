import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import contacts from '../../../assets/data/contacts.json'

const index = () => {
    const [inputText, setInputText] = useState('')
    const [filteredContacts, setFilteredContacts] = useState(contacts)

    useEffect(() => {
        //Search function
        const newContacts = contacts.filter(contact => contact.user_display_name.toLowerCase().includes(inputText.toLowerCase()))

        setFilteredContacts(newContacts)
    },[inputText])

  return (
    <View style={styles.root}>
      <TextInput value={inputText} onChangeText={setInputText} style={styles.input} placeholder='Search...' />
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <Text style={styles.contactName}>{item.user_display_name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
}

export default index

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  contactName: {
    fontSize: 18,
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
  },
});