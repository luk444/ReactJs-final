import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD0yXG1mVOHqIkE-Vjqf58J0kfS4CH2Q3k",
  authDomain: "furniturereact-7a0f9.firebaseapp.com",
  projectId: "furniturereact-7a0f9",
  storageBucket: "furniturereact-7a0f9.appspot.com",
  messagingSenderId: "288967291969",
  appId: "1:288967291969:web:1387c115bda684203d82c0",
  measurementId: "G-QTPGM6KCWE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);