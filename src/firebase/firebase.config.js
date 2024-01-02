// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIUFXtP2ObcHWD6QtH9o3kvZCHy8Rzoxo",
  authDomain: "office-teck.firebaseapp.com",
  projectId: "office-teck",
  storageBucket: "office-teck.appspot.com",
  messagingSenderId: "1031079941850",
  appId: "1:1031079941850:web:ad42ed3a86afcae9c9b7e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;