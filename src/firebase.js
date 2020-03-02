import firebase from 'firebase';


    const firebaseConfig = {
      apiKey: "AIzaSyB5w34JU6hU2W5vXRqgHfUa5a9f2t9Gubc",
      authDomain: "timelogger-9717c.firebaseapp.com",
      databaseURL: "https://timelogger-9717c.firebaseio.com",
      projectId: "timelogger-9717c",
      storageBucket: "timelogger-9717c.appspot.com",
      messagingSenderId: "690201323203",
      appId: "1:690201323203:web:e77af9fcda00e5d5476476",
      measurementId: "G-9HLWMDP6XK"
    }

      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    export default firebase;