import firebase from 'firebase/compat/app';
// import 'firebase/storage';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const api_key = process.env.REACT_APP_GIFBOOK_API;

const firebaseConfig = {
    apiKey: api_key,
    authDomain: "gifbook-83e80.firebaseapp.com",
    projectId: "gifbook-83e80",
    storageBucket: "gifbook-83e80.appspot.com",
    messagingSenderId: "688205059373",
    appId: "1:688205059373:web:2efa89af2d21d3f5c32fa4",
    measurementId: "G-KLNNDBRN6L"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };