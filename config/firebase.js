import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD2S5E6t83stjeh7U9rccnWHzMa44sR5vw",
  authDomain: "voicemart-f36d4.firebaseapp.com",
  projectId: "voicemart-f36d4",
  storageBucket: "voicemart-f36d4.appspot.com",
  messagingSenderId: "894939197640",
  appId: "1:894939197640:web:75cdf4da21858fbdf9b5fd"
};
// initialize firebase
// initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const database = getFirestore();


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD2S5E6t83stjeh7U9rccnWHzMa44sR5vw",
//   authDomain: "voicemart-f36d4.firebaseapp.com",
//   projectId: "voicemart-f36d4",
//   storageBucket: "voicemart-f36d4.appspot.com",
//   messagingSenderId: "894939197640",
//   appId: "1:894939197640:web:75cdf4da21858fbdf9b5fd"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);