import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyBF4yZ5zpDfyrZZHbAFypfS2RWnMkGJLDk",
  authDomain: "euphoria-77b91.firebaseapp.com",
  projectId: "euphoria-77b91",
  storageBucket: "euphoria-77b91.appspot.com",
  messagingSenderId: "953346427896",
  appId: "1:953346427896:web:58df567a21405b1db3640d",
  measurementId: "G-964QEV394R"

})

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db ,auth};