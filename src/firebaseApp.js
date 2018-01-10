
import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyAE8V4Ovt6r2jyzxsRXdoTGIAEbXHADDy4",
    authDomain: "turn-70c01.firebaseapp.com",
    databaseURL: "https://turn-70c01.firebaseio.com",
    projectId: "turn-70c01",
    storageBucket: "turn-70c01.appspot.com",
    messagingSenderId: "403094896090"
  };
  
  export const firebaseApp = firebase.initializeApp(config);

  export const eventsRef = firebaseApp.database().ref().child('events');
