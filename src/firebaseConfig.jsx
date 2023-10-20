// firebaseConfig.jsx

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCUNLxh_gjkTSBzPXCOBnGTA74LsGrn4Dw",
  authDomain: "nico-test-589d5.firebaseapp.com",
  databaseURL: "https://nico-test-589d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nico-test-589d5",
  storageBucket: "nico-test-589d5.appspot.com",
  messagingSenderId: "51519266732",
  appId: "1:51519266732:web:b2de1b01a723f39c606409"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);


export { app, auth, firestore };

