// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyDF63v6YVOvs7bE9A9j02oPod9P9tb71RM",
  authDomain: "doctors-portal-85d6d.firebaseapp.com",
  projectId: "doctors-portal-85d6d",
  storageBucket: "doctors-portal-85d6d.appspot.com",
  messagingSenderId: "1002540960039",
  appId: "1:1002540960039:web:865315c1f02687de43c102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth