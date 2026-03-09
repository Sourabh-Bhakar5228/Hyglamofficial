import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD15pNAuDKE1-2hdx-I6WsZTji0CjyyVts",
  authDomain: "hyglam.firebaseapp.com",
  projectId: "hyglam",
  storageBucket: "hyglam.firebasestorage.app",
  messagingSenderId: "843576297484",
  appId: "1:843576297484:web:59fd25bbb7158760384629",
  measurementId: "G-9N1LH4EY98"
};

const app = initializeApp(firebaseConfig);

// Initialize Analytics safely with dynamic import to prevent ad-blockers from breaking the app
export let analytics = null;

const initAnalytics = async () => {
  try {
    const { getAnalytics, isSupported } = await import("firebase/analytics");
    const supported = await isSupported();
    if (supported) {
      analytics = getAnalytics(app);
    }
  } catch (err) {
    console.warn("Firebase Analytics could not be loaded (likely blocked by ad-blocker).");
  }
};

initAnalytics();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();