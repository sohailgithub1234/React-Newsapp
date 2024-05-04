// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9oXRh77--j1QCx8rNy0O3hKInKpxqotw",
  authDomain: "triveous-news-app-cfad2.firebaseapp.com",
  projectId: "triveous-news-app-cfad2",
  storageBucket: "triveous-news-app-cfad2.appspot.com",
  messagingSenderId: "937282729781",
  appId: "1:937282729781:web:dc52ec78a14babce5c7e7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};