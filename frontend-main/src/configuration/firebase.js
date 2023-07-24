import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
 
const firebaseConfig = {
    apiKey: "AIzaSyAVRX9oxnVDbGV0aZCy3nMY7hGgkinQdMk",
    authDomain: "gas-project-1.firebaseapp.com",
    databaseURL: "https://gas-project-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gas-project-1",
    storageBucket: "gas-project-1.appspot.com",
    messagingSenderId: "619812229530",
    appId: "1:619812229530:web:de519ee6d7494e7f88aa23",
    measurementId: "G-D659WQQFF8"
  };
   
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
 
export default database;
