// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBObWZV9ikq_CTOz1lZT_y4WdZFCE7koDw",
    authDomain: "netflix-clone-gc-796ad.firebaseapp.com",
    projectId: "netflix-clone-gc-796ad",
    storageBucket: "netflix-clone-gc-796ad.appspot.com",
    messagingSenderId: "40570078133",
    appId: "1:40570078133:web:cdc037282e3031754f8ffc"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }