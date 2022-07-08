// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKX6qLM3DJTehM_lU7q9tZhr3wlIN-xkE",
  authDomain: "appland-e-commerce-ec53d.firebaseapp.com",
  projectId: "appland-e-commerce-ec53d",
  storageBucket: "appland-e-commerce-ec53d.appspot.com",
  messagingSenderId: "179089280273",
  appId: "1:179089280273:web:aad54639e6526bb83350b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();

const facebookAuthProvider= new firebase.auth.FacebookAuthProvider();
export {
    db, googleAuthProvider,facebookAuthProvider, firebase
}