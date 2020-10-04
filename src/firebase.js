import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAsHlgrysgRuVgT6kYnc3gU3X_dydZXM7c",
    authDomain: "whatsapp-clone-d4669.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-d4669.firebaseio.com",
    projectId: "whatsapp-clone-d4669",
    storageBucket: "whatsapp-clone-d4669.appspot.com",
    messagingSenderId: "493767359857",
    appId: "1:493767359857:web:e85a40921148fe6f6fcad0",
    measurementId: "G-TNDWTPQ7FN"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider()
  export {auth,provider};
  export default db