// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics';

// Add the Firebase products that you want to use
// import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA69s74Gec_CDtdw0sE-T1QSclRutSMF2g',
  authDomain: 'blog-by-firebase.firebaseapp.com',
  projectId: 'blog-by-firebase',
  storageBucket: 'blog-by-firebase.appspot.com',
  messagingSenderId: '841446452824',
  appId: '1:841446452824:web:4aa18bf4b8c9291be6e42d',
  measurementId: 'G-C886EDH8LY',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

export default db;
