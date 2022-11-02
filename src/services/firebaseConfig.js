import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD-9cQm8OqBNajOMonSi-sp1CfeOssHYBU",
  authDomain: "always-shoes.firebaseapp.com",
  projectId: "always-shoes",
  storageBucket: "always-shoes.appspot.com",
  messagingSenderId: "737034066559",
  appId: "1:737034066559:web:325cca01dbe34adb76bd4a"
};


const app = initializeApp(firebaseConfig);


//db es database
export const db = getFirestore(app);