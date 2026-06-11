# Firebase Migration Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter your project name (e.g., "elegant-beads-react")
4. Follow the setup steps
5. Enable Google Analytics (optional)

## Step 2: Set Up Firestore Database

1. In your Firebase project, go to "Build" → "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for now)
4. Select a location (choose closest to your users)
5. Click "Create"

## Step 3: Get Firebase Configuration

1. In Firebase Console, go to Project Settings (gear icon)
2. Under "Your apps", click the web icon (`</>`)
3. Enter your app name (e.g., "Elegant Beads Web App")
4. Click "Register app"
5. Copy the `firebaseConfig` object - you'll need this for your .env file

## Step 4: Update Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your actual Firebase config:
   ```env
   VITE_FIREBASE_API_KEY=your_actual_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

## Step 5: Create Sample Data in Firestore

1. In Firestore Console, click "Start collection"
2. Collection ID: `products`
3. Add sample documents with these fields:

**Sample Product Document:**
```json
{
  "name": "Elegant Pearl Necklace",
  "category": "Necklaces",
  "description": "Beautiful pearl necklace with elegant design",
  "price": 1299,
  "icon": "📿",
  "badge": "New",
  "image": "https://example.com/pearl-necklace.jpg"
}
```

**Another Sample:**
```json
{
  "name": "Golden Earrings",
  "category": "Earrings", 
  "description": "Stunning golden earrings for special occasions",
  "price": 899,
  "icon": "👂",
  "badge": "Popular",
  "image": "https://example.com/gold-earrings.jpg"
}
```

## Step 6: Update Firestore Rules (Important!)

In Firestore Console, go to "Rules" and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to products collection for all users
    match /products/{document} {
      allow read: if true;
      allow write: if false; // Disable writes for now
    }
  }
}
```

## Step 7: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open browser console to see Firebase connection logs
3. Your app should now load products from Firebase instead of Strapi

## Migration Benefits

✅ **No more Strapi server issues**
✅ **Real-time data synchronization**
✅ **Better scalability**
✅ **Lower maintenance overhead**
✅ **Built-in authentication options**

## Troubleshooting

**Error: "Firebase project not initialized"**
- Check your .env file has correct values
- Ensure all Firebase config variables are set

**No products showing**
- Verify Firestore collection name is `products`
- Check Firestore rules allow read access
- Check browser console for errors

**Permission denied errors**
- Update Firestore rules to allow read access
- Check if you're in test mode or production mode

## Next Steps

1. Add Firebase Authentication for user accounts
2. Implement real-time inventory updates
3. Add Firebase Storage for product images
4. Set up Firebase Hosting for deployment

---

**Note**: The app will automatically fall back to mock data if Firebase is not configured, so your app will continue to work during setup.
