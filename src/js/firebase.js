import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPV9e5dCockLjRhtCsU4PqpDPTZ3sdo2o",
    authDomain: "spiral-notes.firebaseapp.com",
    databaseURL: "https://spiral-notes.firebaseio.com",
    projectId: "spiral-notes",
    storageBucket: "spiral-notes.appspot.com",
    messagingSenderId: "862582265872",
    appId: "1:862582265872:web:dafa845330ec24f8649295",
    measurementId: "G-TREHGKYRDF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;