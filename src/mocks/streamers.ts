import { StreamerResponse } from "@types";

export const mockStreamers: Record<string, StreamerResponse> = {
  streamer1: {
    youtube: {
      id: "UC1234567890",
      name: "Sample Streamer 1",
      icon: "https://via.placeholder.com/150/FF6B6B/FFFFFF?text=S1",
      platform: "youtube",
    },
    twitch: {
      id: "sample_streamer_1",
      name: "Sample Streamer 1",
      icon: "https://via.placeholder.com/150/FF6B6B/FFFFFF?text=S1",
      platform: "twitch",
    },
    twitCasting: {
      id: "samplestreamer1",
      name: "Sample Streamer 1",
      icon: "https://via.placeholder.com/150/FF6B6B/FFFFFF?text=S1",
      platform: "twitCasting",
    },
    order: 1,
  },
  streamer2: {
    youtube: {
      id: "UC0987654321",
      name: "Sample Streamer 2",
      icon: "https://via.placeholder.com/150/4ECDC4/FFFFFF?text=S2",
      platform: "youtube",
    },
    twitch: {
      id: "sample_streamer_2",
      name: "Sample Streamer 2",
      icon: "https://via.placeholder.com/150/4ECDC4/FFFFFF?text=S2",
      platform: "twitch",
    },
    twitCasting: {
      id: "samplestreamer2",
      name: "Sample Streamer 2",
      icon: "https://via.placeholder.com/150/4ECDC4/FFFFFF?text=S2",
      platform: "twitCasting",
    },
    order: 2,
  },
  streamer3: {
    youtube: {
      id: "UC1122334455",
      name: "Sample Streamer 3",
      icon: "https://via.placeholder.com/150/95E1D3/FFFFFF?text=S3",
      platform: "youtube",
    },
    twitch: {
      id: "sample_streamer_3",
      name: "Sample Streamer 3",
      icon: "https://via.placeholder.com/150/95E1D3/FFFFFF?text=S3",
      platform: "twitch",
    },
    twitCasting: {
      id: "samplestreamer3",
      name: "Sample Streamer 3",
      icon: "https://via.placeholder.com/150/95E1D3/FFFFFF?text=S3",
      platform: "twitCasting",
    },
    order: 3,
  },
};
