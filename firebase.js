// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9FCkC021y8ky_mUsCqRVMW7HzVpWUsRo",
  authDomain: "next-8c641.firebaseapp.com",
  projectId: "next-8c641",
  storageBucket: "next-8c641.appspot.com",
  messagingSenderId: "731774171055",
  appId: "1:731774171055:web:1594a0065eeb97461ee15a",
  measurementId: "G-8SLF2PFZLK"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export default app;