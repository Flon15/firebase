
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8jjfSGW0vIM1BpeaRyL3VrO1MDC0Omqo",
  authDomain: "authenticator-df06e.firebaseapp.com",
  projectId: "authenticator-df06e",
  storageBucket: "authenticator-df06e.firebasestorage.app",
  messagingSenderId: "128645052579",
  appId: "1:128645052579:web:0d2f3c7b5c8905b5ea2716",
  measurementId: "G-L86RL87RPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
