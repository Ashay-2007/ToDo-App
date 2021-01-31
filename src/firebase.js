// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVXidAtp97kbSscv_ySkuMBVw1GVDXFSI",
    authDomain: "todo-app-cp-13c83.firebaseapp.com",
    projectId: "todo-app-cp-13c83",
    storageBucket: "todo-app-cp-13c83.appspot.com",
    messagingSenderId: "308160410692",
    appId: "1:308160410692:web:c6f4f61b260cda238cb811",
    measurementId: "G-LPXH4VBH16"
});

const db = firebaseApp.firestore();

export default db;