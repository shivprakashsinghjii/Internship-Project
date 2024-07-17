import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD08oTOCK4p5HI0RWmKcoWQ3NSnrAY6vg0",
  authDomain: "login-auth-41900.firebaseapp.com",
  projectId: "login-auth-41900",
  storageBucket: "login-auth-41900.appspot.com",
  messagingSenderId: "483740355480",
  appId: "1:483740355480:web:c5ed43abd4cde52178b9ed",
  // measurementId: "G-SHE8YLYH3Z",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
