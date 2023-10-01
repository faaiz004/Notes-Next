// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXumjbq54bYkMmHe6HjvHCzmTNUQP48Bk",
  authDomain: "notes-app-8d360.firebaseapp.com",
  projectId: "notes-app-8d360",
  storageBucket: "notes-app-8d360.appspot.com",
  messagingSenderId: "821632381321",
  appId: "1:821632381321:web:15875317dc47f1370df158",
  measurementId: "G-PWSFB313DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app