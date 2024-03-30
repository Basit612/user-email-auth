// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRs3oOHXxrHy0MMgsf6PbC0dmLZnGT8XI",
  authDomain: "user-email-auth-83953.firebaseapp.com",
  projectId: "user-email-auth-83953",
  storageBucket: "user-email-auth-83953.appspot.com",
  messagingSenderId: "879161375615",
  appId: "1:879161375615:web:c37c5505ef4a7a5514b84a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;