// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE7eYA6F2Y6WolL3tfsLAj9S0BYd0ZYxc",
  authDomain: "books-bd-bef92.firebaseapp.com",
  projectId: "books-bd-bef92",
  storageBucket: "books-bd-bef92.appspot.com",
  messagingSenderId: "537009831920",
  appId: "1:537009831920:web:5142745951c75a27aa2735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth