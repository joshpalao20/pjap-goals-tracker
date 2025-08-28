// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7aeHOuGpCNZCKZIhlSByJTuG8nhjEa8s",
  authDomain: "pjap-goal-tracker.firebaseapp.com",
  projectId: "pjap-goal-tracker",
  storageBucket: "pjap-goal-tracker.firebasestorage.app",
  messagingSenderId: "980326708314",
  appId: "1:980326708314:web:7d6e22e4e0700fbf905463",
  measurementId: "G-SBJQMKJFCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);