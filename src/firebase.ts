import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZYnilNeaWBAJu4PyT2YQKlTqLp2wXMPY",
  appId: "1:59171733717:web:e8d7cabd91f28d4fcd625c",
  authDomain: "study-log-477aa.firebaseapp.com",
  messagingSenderId: "59171733717",
  projectId: "study-log-477aa",
  storageBucket: "study-log-477aa.appspot.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, db, provider };
