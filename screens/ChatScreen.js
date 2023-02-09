import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet ,FlatList} from "react-native";
import ChatRooms from '../data/ChatRooms';
import ChatListItem from '../Components/ChatListItem';
import NewMessageButton from '../Components/NewMessageButton';
export const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%',}}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    
      <NewMessageButton />
      <View>
        {/* {console.log(ChatRooms)} */}
      </View>
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