import React,{useState} from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet ,FlatList,ImageBackground} from "react-native";
import { useRoute } from '@react-navigation/native';
import ChatMessage from '../Components/ChatMessage';
import ChatsrOOMDATA from '../data/Chats'
import InputBox from '../Components/InputBox';
export const ChatRoomScreen = () => {

  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState(null);
  const route = useRoute();
  const image = {uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'};
  console.log(route.params)
  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={image} >
      <FlatList
        data={ChatsrOOMDATA.messages}
        renderItem={({ item }) => <ChatMessage  message={item} />}
        
      />

      <InputBox chatRoomID={route.params.id} />
    </ImageBackground>
  )
}
