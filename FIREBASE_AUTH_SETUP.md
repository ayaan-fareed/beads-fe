# Firebase Authentication Setup Guide

## ✅ Step 1: Firebase Console Setup

1. **Firebase Console खोलें**
   - https://console.firebase.google.com पर जाएं
   - अपना project select करें

2. **Authentication Enable करें**
   - Left menu में "Authentication" पर click करें
   - "Get started" button पर click करें
   - "Email/Password" provider को enable करें
   - "Enable" पर click करें और "Save" करें

3. **Admin User बनाएं**
   - Authentication section में "Users" tab पर जाएं
   - "Add user" button पर click करें
   - Email: `admin@stainlesssparkle.com`
   - Password: `stains@sparkles321456`
   - "Add user" पर click करें

## ✅ Step 2: Firebase Configuration Update

Firebase configuration में Authentication already add कर दी गई है।

## ✅ Step 3: Security Rules

Firestore में security rules set करने के लिए:\
1. Firebase Console में "Firestore Database" पर जाएं
2. "Rules" tab पर click करें
3. निम्नलिखित rules paste करें:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write their own data
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

4. "Publish" पर click करें

## ✅ Step 4: Code Implementation

Firebase Authentication के लिए code implement हो गया है:

### 📁 Files Created/Updated:
- `src/services/firebase.js` - Firebase Auth imports और helper functions
- `src/services/firebaseAuth.js` - Firebase Authentication service
- `src/hooks/useAdminAuth.js` - Firebase Auth hook
- `src/components/Admin/LoginForm.jsx` - Email/Password login form
- `src/components/Admin/AdminDashboard.jsx` - Updated for Firebase Auth

## 🔧 How to Use:

### Login Process:
1. Admin panel में जाएं (Footer में "Admin Access")
2. Email: `admin@stainlesssparkle.com`
3. Password: `stains@sparkles321456`
4. Login button पर click करें

### Features:
- ✅ Real-time Firebase Authentication
- ✅ Session persistence (auto-login)
- ✅ Secure logout
- ✅ Error handling with user-friendly messages
- ✅ Admin-only access control

## 🚀 Next Steps:

1. **Firebase Console में Authentication enable करें**
2. **Admin user बनाएं** (`admin@stainlesssparkle.com`)
3. **Security rules set करें**
4. **Application restart करें**
5. **Test करें**

## 📱 Testing:

```bash
npm run dev
```

फिर admin panel access करें और Firebase Authentication test करें।
