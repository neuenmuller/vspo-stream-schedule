import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === "true";

let firestore: Firestore;

if (useMockData) {
  // Create a dummy firestore instance for mock mode
  // This prevents errors when Firebase config is not available
  console.log("Firebase: Using mock data mode - Firebase initialization skipped");
  const dummyConfig = {
    apiKey: "mock-api-key",
    authDomain: "mock.firebaseapp.com",
    projectId: "mock-project",
    storageBucket: "mock.appspot.com",
    messagingSenderId: "000000000000",
    databaseURL: "https://mock.firebaseio.com",
    appId: "1:000000000000:web:0000000000000000000000",
  };
  const app = initializeApp(dummyConfig);
  firestore = getFirestore(app);
} else {
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
  firestore = getFirestore(app);
}

export { firestore };
