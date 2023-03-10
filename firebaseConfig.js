import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXRMLoNWpsEpx4p4cq27r0ZJWOpgTHSQA",
  authDomain: "contactform-fitnesswin.firebaseapp.com",
  projectId: "contactform-fitnesswin",
  storageBucket: "contactform-fitnesswin.appspot.com",
  messagingSenderId: "157040875841",
  appId: "1:157040875841:web:7cbf716ad93a9543d7e9c0",
  measurementId: "G-P18YM6M4N3",
};

const app = initializeApp(firebaseConfig, "cours");
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
export const firestore = getFirestore(app);
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
export { db, auth, provider, fbProvider, app };
