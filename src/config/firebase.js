// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhdvuDPOtikXv4Wn_AxH_qDdDpaf2Otso",
  authDomain: "chat-app-f81e4.firebaseapp.com",
  projectId: "chat-app-f81e4",
  storageBucket: "chat-app-f81e4.firebasestorage.app",
  messagingSenderId: "711994408840",
  appId: "1:711994408840:web:8385192bfc85701e66843d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };