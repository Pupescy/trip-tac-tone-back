import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5Qp9fXxiQG4mLmNqCwbFA7ryN55cMMU8",
    authDomain: "trip-tac-tone.firebaseapp.com",
    databaseURL: "https://trip-tac-tone-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "trip-tac-tone",
    storageBucket: "trip-tac-tone.appspot.com",
    messagingSenderId: "131124707681",
    appId: "1:131124707681:web:67319854fc7105b3f88520"
  };

initializeApp(firebaseConfig);
const db = getFirestore();

export { db }