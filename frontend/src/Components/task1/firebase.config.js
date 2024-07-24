import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAif4Kcwap_n_0BqhSUrFUzZJlQgcF2hq8",
  authDomain: "aaaa-213e3.firebaseapp.com",
  projectId: "aaaa-213e3",
  storageBucket: "aaaa-213e3.appspot.com",
  messagingSenderId: "850055825248",
  appId: "1:850055825248:web:d5e1a7b8a7c7ed2ee34005",
  measurementId: "G-3MV10FYW2M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
