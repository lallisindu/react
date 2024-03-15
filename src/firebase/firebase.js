// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYf3MKqCYUCbsLTl4floHfWXtKWcPi6D8",
  authDomain: "react-movie-82b50.firebaseapp.com",
  databaseURL: "https://react-movie-82b50-default-rtdb.firebaseio.com",
  projectId: "react-movie-82b50",
  storageBucket: "react-movie-82b50.appspot.com",
  messagingSenderId: "685985572906",
  appId: "1:685985572906:web:abd83ba2d884455e71fb53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export { app, auth };