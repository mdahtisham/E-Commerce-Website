// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuvGWuDWsQhy4TsTtAktREcfu8Xp-0MwA",
  authDomain: "e-commerce-website-b684e.firebaseapp.com",
  projectId: "e-commerce-website-b684e",
  storageBucket: "e-commerce-website-b684e.appspot.com",
  messagingSenderId: "566170975499",
  appId: "1:566170975499:web:c91e9383620be11d7fb60e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider()