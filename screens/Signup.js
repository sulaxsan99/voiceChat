import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert,state } from "react-native";
import {createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../config/firebase';
// import firebase from 'react-native-firebase'
const backImage = require("../assets/backImage.png");

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  

    // validatePhoneNumber = () => {
    //   var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    //   return regexp.test(this.state.phone)
    //   }

const onHandleSignup = () => {
    if (email !== '' && password !== '' && confirmPassword !=='') {
      if(password.match(confirmPassword)){
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert('Signup success')).finally(()=>navigation.navigate("Login"))
        .catch((err) => alert( err.message));

        
      }else{
        alert("Enter Correct Confirm Password")

      }
    }else{
      alert("All Are Empty")
    }
  };
  
// handleSendCode = () => {
//   // Request to send OTP
//   if (this.validatePhoneNumber()) {
//     firebase
//       .auth()
//       .signInWithPhoneNumber(this.state.phone)
//       .then(confirmResult => {
//         this.setState({ confirmResult })
//       })
//       .catch(error => {
//         alert(error.message)
//         console.log(error)
//       })
//   } else {
//     alert('Invalid Phone Number')
//   }
// }

  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Sign Up</Text>
        {/* <TextInput
        style={styles.input}
        placeholder="Enter your username"
        autoCapitalize="none"
        keyboardType="default"
        textContentType="none"
        autoFocus={true}
        value={username}
        onChangeText={(text) => setusername(text)}
      /> */}
         <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Enter confirm password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={confirmPassword}
        onChangeText={(text) => setconfirmPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Sign Up</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{color: '#f57c00', fontWeight: '600', fontSize: 14}}> Log In</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#ff0000",
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop:50,
  },
  button: {
    backgroundColor: '#f57c00',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});