import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// Connect to Firebase Emulator in development mode
if (import.meta.env.VITE_USE_EMULATOR === "true") {
  try {
    connectFirestoreEmulator(firestore, "localhost", 8080);
    console.log("Connected to Firestore Emulator");
  } catch (error) {
    // Ignore error if already connected (happens with hot module replacement)
    if (
      error instanceof Error &&
      !error.message.includes("already been called")
    ) {
      throw error;
    }
  }
}
