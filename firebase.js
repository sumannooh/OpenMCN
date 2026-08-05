// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD86AtKrO9iKR7RK9HccyKig6WDE3XHT24",
  authDomain: "openmcn-4025f.firebaseapp.com",
  projectId: "openmcn-4025f",
  storageBucket: "openmcn-4025f.firebasestorage.app",
  messagingSenderId: "196256876691",
  appId: "1:196256876691:web:cc5924dab018922f7ce566",
  measurementId: "G-YELPWHF4M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);
