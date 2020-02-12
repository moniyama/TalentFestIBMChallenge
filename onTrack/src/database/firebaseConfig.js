import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBfYcRaiXJBz6sn8l6gn6589hPw3KeBB0c",
    authDomain: "woman-on-track.firebaseapp.com",
    databaseURL: "https://woman-on-track.firebaseio.com",
    projectId: "woman-on-track",
    storageBucket: "woman-on-track.appspot.com",
    messagingSenderId: "174181219939",
    appId: "1:174181219939:web:00bf7bf513d4e49aed4256",
    measurementId: "G-RM9LYXKX58"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;