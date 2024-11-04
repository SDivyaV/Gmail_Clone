import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgyeVMC9qVHILOGyNK6Zz14fR0doZtBKE",
  authDomain: "clone-13ed3.firebaseapp.com",
  projectId: "clone-13ed3",
  storageBucket: "clone-13ed3.appspot.com",
  messagingSenderId: "78808028877",
  appId: "1:78808028877:web:d60342eff732f754f27b84"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };