import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyC5zRFlZknfXNC7e6HiWyEh2XQkPjwh1hc",
  authDomain: "shop-wave-bcecf.firebaseapp.com",
  projectId: "shop-wave-bcecf",
  storageBucket: "shop-wave-bcecf.appspot.com",
  messagingSenderId: "130492694198",
  appId: "1:130492694198:web:3f02e3d83d42c32e697017",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
