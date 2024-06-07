// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa26mJB3IlzTV7C2HhaivUQu07jQN22D8",
  authDomain: "meusistema-73864.firebaseapp.com",
  projectId: "meusistema-73864",
  storageBucket: "meusistema-73864.appspot.com",
  messagingSenderId: "242713815643",
  appId: "1:242713815643:web:5e3b5b2ef2ab5cbd3b6d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bancoExterno=getFirestore(app);
export {bancoExterno};