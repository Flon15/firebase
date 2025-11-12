import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK0VcJODVnCaE3Cp-xhUAFNwBtERR4_Lc",
  authDomain: "detyra-29601.firebaseapp.com",
  projectId: "detyra-29601",
  storageBucket: "detyra-29601.firebasestorage.app",
  messagingSenderId: "465420601192",
  appId: "1:465420601192:web:7c028465422085874b38dd",
  measurementId: "G-45W32QFLHN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
