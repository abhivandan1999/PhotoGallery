import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore' 

var firebaseConfig = {
    apiKey: "AIzaSyB-5fST9ZQ2ZpaBskz7rf4jJ9TGUIrqe70",
    authDomain: "firegram-97426.firebaseapp.com",
    projectId: "firegram-97426",
    storageBucket: "firegram-97426.appspot.com",
    messagingSenderId: "650109801109",
    appId: "1:650109801109:web:0fe8ab748dd5c781c7419c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectFirestore, projectStorage, timestamp};