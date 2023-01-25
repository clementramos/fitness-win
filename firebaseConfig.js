import { initializeApp } from "firebase/app";
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);