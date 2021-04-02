// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyA69s74Gec_CDtdw0sE-T1QSclRutSMF2g',
//   authDomain: 'blog-by-firebase.firebaseapp.com',
//   projectId: 'blog-by-firebase',
//   storageBucket: 'blog-by-firebase.appspot.com',
//   messagingSenderId: '841446452824',
//   appId: '1:841446452824:web:4aa18bf4b8c9291be6e42d',
//   measurementId: 'G-C886EDH8LY',
// };
const firebaseConfig = {
  apiKey: 'AIzaSyAkf6YYzYtKkvXhV4wB1Ml2xeBISCg2BrM',
  authDomain: 'blog-firebase-7be76.firebaseapp.com',
  projectId: 'blog-firebase-7be76',
  storageBucket: 'blog-firebase-7be76.appspot.com',
  messagingSenderId: '417651633913',
  appId: '1:417651633913:web:16c197ac56c191ffa6bc28',
  measurementId: 'G-78VGBST5JT',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

export default db;
