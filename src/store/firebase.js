// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

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
