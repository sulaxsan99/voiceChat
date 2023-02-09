import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, } from "react-native";
import styles from './style';
import {
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5,
    Entypo,
    Fontisto,
} from '@expo/vector-icons';
// import {Audio} from 'expo-av'
const InputBox = (props) => {


    const { chatRoomID } = props;
    const [recording, setRecording] = useState('')
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);

    const onSendPress = async () => {
        // try {
        //   const newMessageData = await API.graphql(
        //     graphqlOperation(
        //       createMessage, {
        //         input: {
        //           content: message,
        //           userID: myUserId,
        //           chatRoomID
        //         }
        //       }
        //     )
        //   )

        //   await updateChatRoomLastMessage(newMessageData.data.createMessage.id)
        // } catch (e) {
        //   console.log(e);
        // }

        setMessage('');
    }
// async function StartRecordnig(){
//     try {
//         console.log('Requesting submission');
//         await Audio.requestPermissionsAsync();
//         await Audio.setAudioModeAsync({
//             allowsRecordingIOS:true,
//             playsInSilentModeIOS:true,
//         });
//         console.log("start Recordings...")
//         const recording = new Audio.Recording();
//         await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY)
//         await recording.startAsync()
//         setRecording(recording);
//         console.log('recording started')
//     } catch (err) {
//         console.log('recording fail',err)
//     }
// }

// async function StopRecording()
// {
//     console.log('stoppingrecording...');
//     setRecording(undefined);
//     await recording.stopAndUnloadAsync();
//     const uri = recording.getURI();
//     console.log('Recording stooped at ', uri)
// }
    const onMicrophonePress = () => {
        console.warn('Microphone')
    }
    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
            style={{ width: '100%' }}
        >
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                    <TextInput
                        placeholder={"Type a message"}
                        style={styles.textInput}
                        multiline
                        value={message}
                        onChangeText={setMessage}
                    />
                    <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                    {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
                </View>
                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        {!message
                            ? <MaterialCommunityIcons name="microphone" size={28} color="black" />
                            : <MaterialIcons name="send" size={28} color="black" />}
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}


export default InputBox;
