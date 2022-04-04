import firebase from 'firebase/compat/app';
// import 'firebase/storage';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJGZtuAeOGXIlUP2qJErXmQyOApar6zj8",
    authDomain: "fb-like-posts.firebaseapp.com",
    projectId: "fb-like-posts",
    storageBucket: "fb-like-posts.appspot.com",
    messagingSenderId: "810576208308",
    appId: "1:810576208308:web:c9fbf1aa6e666d53f312e1"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };