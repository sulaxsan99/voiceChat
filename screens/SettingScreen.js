import React, { useLayoutEffect } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, FlatList } from "react-native";
import { auth, database } from '../config/firebase';
import { AntDesign } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
export const SettingScreen = () => {


    const onSignOut = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    return (


        <View style={styles.container}>
            <View>
               <Image source={{ uri:'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'}} style={styles.avatar}/>
                <Text>name:sulaxsan</Text>
                <Text>edit</Text>
            </View>
            <TouchableOpacity
                style={{
                    marginTop: 100
                }}
                onPress={onSignOut}
            >
                <Text style={styles.logout}>
                <AntDesign name="logout" size={50} style={{ marginRight: 10 ,marginTop:20}} />
               Logout
                </Text>

            </TouchableOpacity>

            
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       paddingTop:50
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 15,
    },
    logout:{
        fontSize:50,
        fontWeight:'900',
        fontStyle:'normal',

    }
});