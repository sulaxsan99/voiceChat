import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  
} from "react-native";

import styles from "./style";

import { useNavigation } from '@react-navigation/native';


// export type ChatListItemProps = {
//   chatRoom: ChatRoom;
// }

const ChatListItem = ({chatRoom}) => {
  // const {chatRoom} =props
    const [ otherUser, setOtherUser] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    const getOtherUser = async () => {
      // const userInfo = await Auth.currentAuthenticatedUser();
      if (chatRoom.user) {
        setOtherUser(chatRoom.users[0]);
      } else {
        setOtherUser(chatRoom.users[1]);
      }
console.log(otherUser)
    }
    getOtherUser();
  }, [])

  const onClick = () => {
    navigation.navigate('ChatRoom', {
      id: chatRoom.id,
      name: otherUser.name,
    })
  }



  return (
    <TouchableWithoutFeedback  onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.lefContainer}>

        <Image source={{ uri: otherUser.imageUri }} style={styles.avatar}/>

          <View style={styles.midContainer}>
            <Text style={styles.username}>{otherUser.name}</Text>
            <Text
              numberOfLines={2}
              style={styles.lastMessage}>
              {chatRoom.lastMessage
                ? `${otherUser.name}: ${chatRoom.lastMessage.content}`
                : ""}
            </Text>
          </View>
        </View>

        <Text style={styles.time}>
          {chatRoom.lastMessage && chatRoom.lastMessage.createdAt}
        </Text>
        
      </View>
  
    </TouchableWithoutFeedback>
  )
};

export default ChatListItem;
