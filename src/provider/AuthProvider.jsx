
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1e6pYxFxvoHBpBh6SeqlgA9xb_aMJXCo",
  authDomain: "authentication-a609a.firebaseapp.com",
  projectId: "authentication-a609a",
  storageBucket: "authentication-a609a.appspot.com",
  messagingSenderId: "757810942866",
  appId: "1:757810942866:web:4f5de1ca35ef5a5907674b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
