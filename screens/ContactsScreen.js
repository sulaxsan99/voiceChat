import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet,FlatList } from "react-native";
import data from '../data/Users'
import ContactListItem from '../Components/ContactsListItem';
import NewMessageButton from '../Components/NewMessageButton';
export const ContactsScreen = () => {
  return (
    <View style={styles.container}>
    <FlatList
      style={{width: '100%'}}
      data={data}
      renderItem={( { item }) => <ContactListItem user={item} />}
      keyExtractor={(item) => item.id}
    />
     <NewMessageButton/>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});