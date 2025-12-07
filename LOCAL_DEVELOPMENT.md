# Local Development Guide

This guide will help you set up and run the project locally using Firebase Emulators.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the local environment template:

```bash
cp .env.local.example .env.local
```

The `.env.local` file is already configured to use Firebase Emulator with dummy credentials. You can modify collection names if needed.

### 3. Start the Development Environment

You have two options:

#### Option A: Separate Terminals (Recommended)

**Terminal 1** - Start Firebase Emulator:
```bash
npm run dev:emulator
```

Wait for the emulator to start. You'll see output like:
```
✔  firestore: Emulator started at http://localhost:8080
✔  hosting: Emulator started at http://localhost:5000
```

**Terminal 2** - Seed the emulator with sample data:
```bash
npm run emulator:seed
```

**Terminal 3** - Start the Vite dev server:
```bash
npm run dev
```

#### Option B: Using Firebase Emulator UI

1. Start the emulator:
   ```bash
   npm run dev:emulator
   ```

2. Open the Firebase Emulator UI at http://localhost:4000

3. Manually add test data through the UI, or run the seed script in another terminal:
   ```bash
   npm run emulator:seed
   ```

4. In another terminal, start the Vite dev server:
   ```bash
   npm run dev
   ```

### 4. Access the Application

- **Application**: http://localhost:5173 (Vite dev server)
- **Firebase Emulator UI**: http://localhost:4000
- **Firestore Emulator**: http://localhost:8080

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run dev:emulator` - Start Firebase Emulator (Firestore + Hosting)
- `npm run dev:full` - Alias for dev:emulator
- `npm run emulator:seed` - Populate emulator with sample data
- `npm run emulator:export` - Export emulator data to `./emulator-data`
- `npm run emulator:import` - Start emulator with previously exported data
- `npm run build` - Build the application
- `npm run preview` - Preview the built application

## Emulator Data Persistence

### Exporting Data

If you want to save your emulator data for later use:

```bash
npm run emulator:export
```

This will create an `emulator-data` directory with all your data.

### Importing Data

To start the emulator with previously exported data:

```bash
npm run emulator:import
```

The emulator will start with your saved data and automatically export any changes when you stop it.

## Sample Data

The seed script (`scripts/seed-emulator.js`) creates:

- **3 Sample Streamers**: with YouTube and Twitch channels
- **3 Sample Streams**: 
  - One scheduled stream (1 hour from now)
  - One live stream (started 30 minutes ago)
  - One upcoming stream (2 hours from now)

You can modify this script to add more test data as needed.

## Troubleshooting

### Port Already in Use

If you see an error about ports being in use:

```bash
# Find and kill processes using the ports
lsof -ti:8080,5000,4000 | xargs kill -9
```

Or modify the ports in `firebase.json`:

```json
{
  "emulators": {
    "firestore": { "port": 8080 },
    "hosting": { "port": 5000 },
    "ui": { "enabled": true, "port": 4000 }
  }
}
```

### Emulator Not Connecting

Make sure:
1. The emulator is running (`npm run dev:emulator`)
2. Your `.env.local` has `VITE_USE_EMULATOR=true`
3. The ports match between `firebase.json` and `src/firebase.ts`

### No Data Showing

If the application shows no data:
1. Check that the emulator is running
2. Run the seed script: `npm run emulator:seed`
3. Verify collection names in `.env.local` match those in the seed script (`streamers` and `streams`)

## Production vs Development

The application automatically detects which Firebase instance to use based on the `VITE_USE_EMULATOR` environment variable:

- **Development** (`VITE_USE_EMULATOR=true`): Connects to local Firebase Emulator
- **Production** (`VITE_USE_EMULATOR=false` or not set): Connects to real Firebase project

## Next Steps

- Modify `scripts/seed-emulator.js` to add custom test data
- Use the Firebase Emulator UI to inspect and modify data in real-time
- Export your test data setup for reuse across team members

## Additional Resources

- [Firebase Emulator Suite Documentation](https://firebase.google.com/docs/emulator-suite)
- [Vite Documentation](https://vitejs.dev/)
