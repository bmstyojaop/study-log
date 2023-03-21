import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlYJE17hbGvnFZMrlMeUQJrPysCK9yk_8",
  appId: "1:171079455579:web:7649655a6615c9453b807e",
  authDomain: "study-log-sample.firebaseapp.com",
  messagingSenderId: "171079455579",
  projectId: "study-log-sample",
  storageBucket: "study-log-sample.appspot.com",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, db, provider };
