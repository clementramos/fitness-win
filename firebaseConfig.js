import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDXRMLoNWpsEpx4p4cq27r0ZJWOpgTHSQA",
  authDomain: "contactform-fitnesswin.firebaseapp.com",
  projectId: "contactform-fitnesswin",
  storageBucket: "contactform-fitnesswin.appspot.com",
  messagingSenderId: "157040875841",
  appId: "1:157040875841:web:7cbf716ad93a9543d7e9c0",
  measurementId: "G-P18YM6M4N3"
};

const app = initializeApp(firebaseConfig, "contact-fw");
export const firestore = getFirestore(app);
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;