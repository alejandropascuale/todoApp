// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi2TAAMVUqbG0cAsgw2zoZgCURnFU7v3M",
  authDomain: "todoapp-a617f.firebaseapp.com",
  projectId: "todoapp-a617f",
  storageBucket: "todoapp-a617f.appspot.com",
  messagingSenderId: "1094879593127",
  appId: "1:1094879593127:web:f329d8913c54b0d3aed182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export default { auth, db }