// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDpVF_-ZEcZ8r0J6kEQzrD9fMZVvntNBq4",
    authDomain: "fitness-app-446c4.firebaseapp.com",
    projectId: "fitness-app-446c4",
    storageBucket: "fitness-app-446c4.appspot.com",
    messagingSenderId: "730056716267",
    appId: "1:730056716267:web:0f6a18c28d1b70b96c73ae"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;