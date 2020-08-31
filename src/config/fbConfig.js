import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBHbU4UzIpCQeewUcfr0QQMkPPgiP8n_tw",
    authDomain: "travelblog-56d54.firebaseapp.com",
    databaseURL: "https://travelblog-56d54.firebaseio.com",
    projectId: "travelblog-56d54",
    storageBucket: "travelblog-56d54.appspot.com",
    messagingSenderId: "12361207090",
    appId: "1:12361207090:web:5e4d40113c2bc743eb5b2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;