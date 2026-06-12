import { firebaseAuth } from './firebase.js';

// Admin credentials (आप इन्हें Firebase Auth में बनाएंगे)
const ADMIN_EMAIL = 'admin@stainlesssparkle.com';
// Password Firebase Auth में set किया जाएगा

class FirebaseAuthService {
  constructor() {
    this.currentUser = null;
    this.authListeners = [];
  }

  // Login with Firebase Authentication
  async login(email, password) {
    try {
      console.log('FirebaseAuth: Login attempt');
      
      // Validate admin email
      if (email !== ADMIN_EMAIL) {
        return { 
          success: false, 
          message: 'Access denied. Only admin users can login.' 
        };
      }

      const result = await firebaseAuth.signIn(email, password);
      
      if (result.success) {
        this.currentUser = result.user;
        console.log('FirebaseAuth: Login successful');
        return { success: true, message: 'Login successful', user: result.user };
      } else {
        console.log('FirebaseAuth: Login failed:', result.error);
        return { success: false, message: this.getErrorMessage(result.error) };
      }
    } catch (error) {
      console.error('FirebaseAuth: Login error:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    }
  }

  // Logout
  async logout() {
    try {
      const result = await firebaseAuth.signOut();
      if (result.success) {
        this.currentUser = null;
        console.log('FirebaseAuth: Logout successful');
        return { success: true, message: 'Logged out successfully' };
      } else {
        return { success: false, message: 'Logout failed' };
      }
    } catch (error) {
      console.error('FirebaseAuth: Logout error:', error);
      return { success: false, message: 'Logout failed' };
    }
  }

  // Check if user is authenticated
  isAuthenticated() {
    return this.currentUser !== null;
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Listen to auth state changes
  onAuthStateChanged(callback) {
    return firebaseAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
      callback(user);
    });
  }

  // Get user-friendly error messages
  getErrorMessage(error) {
    const errorMessages = {
      'auth/user-not-found': 'Admin user not found. Please check your credentials.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/invalid-email': 'Invalid email format.',
      'auth/user-disabled': 'User account has been disabled.',
      'auth/too-many-requests': 'Too many login attempts. Please try again later.',
      'auth/network-request-failed': 'Network error. Please check your connection.',
      'auth/invalid-credential': 'Invalid credentials. Please check email and password.'
    };

    for (const [code, message] of Object.entries(errorMessages)) {
      if (error.includes(code)) {
        return message;
      }
    }

    return 'Authentication failed. Please try again.';
  }

  // Initialize auth state
  initializeAuth() {
    return new Promise((resolve) => {
      const unsubscribe = this.onAuthStateChanged((user) => {
        this.currentUser = user;
        unsubscribe();
        resolve(user);
      });
    });
  }
}

export const firebaseAuthService = new FirebaseAuthService();
export default firebaseAuthService;
