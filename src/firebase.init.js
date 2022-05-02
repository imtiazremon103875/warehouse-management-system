// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzhmv9SZFQc4Ze_TDjrAjtJp0G-5qP0bg",
    authDomain: "gym--equipment-warehouse.firebaseapp.com",
    projectId: "gym--equipment-warehouse",
    storageBucket: "gym--equipment-warehouse.appspot.com",
    messagingSenderId: "7757158673",
    appId: "1:7757158673:web:2a7700ac1319b52b2454b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;