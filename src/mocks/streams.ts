import { StreamResponse } from "@types";

const now = new Date();
const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);
const fourHoursLater = new Date(now.getTime() + 4 * 60 * 60 * 1000);
const sixHoursLater = new Date(now.getTime() + 6 * 60 * 60 * 1000);
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
const ttl = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

export const mockStreams: StreamResponse[] = [
  {
    id: "stream1",
    streamerId: "streamer1",
    channelId: "UC1234567890",
    platform: "youtube",
    title: "【LIVE】Morning Gaming Stream - Apex Legends Ranked",
    thumbnail: "https://via.placeholder.com/640x360/FF6B6B/FFFFFF?text=Stream+1",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    scheduledStartTime: oneHourAgo.toISOString(),
    startTime: oneHourAgo.toISOString(),
    ttl,
  },
  {
    id: "stream2",
    streamerId: "streamer2",
    channelId: "sample_streamer_2",
    platform: "twitch",
    title: "【Twitch】Chatting and Game Testing Stream",
    thumbnail: "https://via.placeholder.com/640x360/4ECDC4/FFFFFF?text=Stream+2",
    url: "https://www.twitch.tv/sample_streamer_2",
    scheduledStartTime: twoHoursLater.toISOString(),
    ttl,
  },
  {
    id: "stream3",
    streamerId: "streamer1",
    channelId: "UC1234567890",
    platform: "youtube",
    title: "【Minecraft】Building a new house! Come hang out!",
    thumbnail: "https://via.placeholder.com/640x360/FF6B6B/FFFFFF?text=Stream+3",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    scheduledStartTime: fourHoursLater.toISOString(),
    ttl,
  },
  {
    id: "stream4",
    streamerId: "streamer3",
    channelId: "samplestreamer3",
    platform: "twitCasting",
    title: "Late Night Chat Stream 💤",
    thumbnail: "https://via.placeholder.com/640x360/95E1D3/FFFFFF?text=Stream+4",
    url: "https://twitcasting.tv/samplestreamer3",
    scheduledStartTime: sixHoursLater.toISOString(),
    ttl,
  },
  {
    id: "stream5",
    streamerId: "streamer2",
    channelId: "UC0987654321",
    platform: "youtube",
    title: "【歌枠】Singing Stream - Taking Requests!",
    thumbnail: "https://via.placeholder.com/640x360/4ECDC4/FFFFFF?text=Stream+5",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    scheduledStartTime: tomorrow.toISOString(),
    ttl,
  },
  {
    id: "stream6",
    streamerId: "streamer3",
    channelId: "UC1122334455",
    platform: "youtube",
    title: "【Valorant】Competitive Ranked Grind",
    thumbnail: "https://via.placeholder.com/640x360/95E1D3/FFFFFF?text=Stream+6",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    scheduledStartTime: tomorrow.toISOString(),
    ttl,
  },
];
