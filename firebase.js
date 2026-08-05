// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD86AtKrO9iKR7RK9HccyKig6WDE3XHT24",
  authDomain: "openmcn-4025f.firebaseapp.com",
  projectId: "openmcn-4025f",
  storageBucket: "openmcn-4025f.firebasestorage.app",
  messagingSenderId: "196256876691",
  appId: "1:196256876691:web:cc5924dab018922f7ce566",
  measurementId: "G-YELPWHF4M1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
