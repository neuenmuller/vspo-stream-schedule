/**
 * Script to seed Firebase Emulator with sample data for local development
 * Run this script while the emulator is running to populate it with test data
 */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { connectFirestoreEmulator } from "firebase/firestore";

// Initialize Firebase with dummy config for emulator
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "demo-project.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "123456789",
  databaseURL: "https://demo-project.firebaseio.com",
  appId: "1:123456789:web:abcdef",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Connect to emulator
connectFirestoreEmulator(db, "localhost", 8080);

// Sample data
const sampleStreamers = [
  {
    id: "streamer1",
    order: 1,
    youtube: {
      id: "UCIytNcoz4pWzXfLda0DoULQ",
      name: "花芽すみれ",
      icon: "https://yt3.ggpht.com/ytc/AIdro_kQ1234567890",
    },
  },
  {
    id: "streamer2",
    order: 2,
    youtube: {
      id: "UCX1xYzdKJ5ZqKz0234567",
      name: "一ノ瀬うるは",
      icon: "https://yt3.ggpht.com/ytc/AIdro_kQ0987654321",
    },
  },
  {
    id: "streamer3",
    order: 3,
    twitch: {
      id: "123456789",
      name: "橘ひなの",
      icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/sample.png",
    },
  },
];

const sampleStreams = [
  {
    id: "stream1",
    title: "Sample Live Stream - Gaming",
    thumbnail: "https://i.ytimg.com/vi/sample1/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=sample1",
    streamerId: "streamer1",
    platform: "youtube",
    channelId: "UCIytNcoz4pWzXfLda0DoULQ",
    scheduledStartTime: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
  },
  {
    id: "stream2",
    title: "Sample Stream - Chatting",
    thumbnail: "https://i.ytimg.com/vi/sample2/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=sample2",
    streamerId: "streamer2",
    platform: "youtube",
    channelId: "UCX1xYzdKJ5ZqKz0234567",
    scheduledStartTime: new Date(Date.now() - 1800000).toISOString(), // 30 minutes ago (live)
  },
  {
    id: "stream3",
    title: "Sample Twitch Stream",
    thumbnail: "https://static-cdn.jtvnw.net/previews-ttv/sample.jpg",
    url: "https://www.twitch.tv/sample",
    streamerId: "streamer3",
    platform: "twitch",
    channelId: "123456789",
    scheduledStartTime: new Date(Date.now() + 7200000).toISOString(), // 2 hours from now
  },
];

async function seedData() {
  try {
    console.log("🌱 Starting to seed Firebase Emulator...");

    // Seed streamers
    console.log("📝 Adding streamers...");
    const streamersCollection = collection(db, "streamers");
    for (const streamer of sampleStreamers) {
      const { id, ...data } = streamer;
      await setDoc(doc(streamersCollection, id), data);
      console.log(`  ✓ Added streamer: ${id}`);
    }

    // Seed streams
    console.log("📺 Adding streams...");
    const streamsCollection = collection(db, "streams");
    for (const stream of sampleStreams) {
      await setDoc(doc(streamsCollection, stream.id), stream);
      console.log(`  ✓ Added stream: ${stream.title}`);
    }

    console.log("✅ Seeding completed successfully!");
    console.log("\nYou can now access:");
    console.log("  - Frontend: http://localhost:5173");
    console.log("  - Firebase UI: http://localhost:4000");
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seedData();
