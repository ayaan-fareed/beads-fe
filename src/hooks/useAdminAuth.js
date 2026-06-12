import { useState, useEffect } from 'react';
import { firebaseAuthService } from '../services/firebaseAuth.js';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize Firebase Auth state
    const initializeAuth = async () => {
      try {
        const currentUser = await firebaseAuthService.initializeAuth();
        setIsAuthenticated(!!currentUser);
        setUser(currentUser);
      } catch (err) {
        console.error('Auth initialization error:', err);
        setError('Failed to initialize authentication');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen to auth state changes
    const unsubscribe = firebaseAuthService.onAuthStateChanged((authUser) => {
      setIsAuthenticated(!!authUser);
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError('');
    
    try {
      console.log('useAdminAuth: Attempting Firebase login');
      const result = await firebaseAuthService.login(email, password);
      
      if (result.success) {
        setIsAuthenticated(true);
        setUser(result.user);
        console.log('useAdminAuth: Firebase authentication successful');
      } else {
        setError(result.message);
        console.log('useAdminAuth: Firebase authentication failed:', result.message);
      }
      
      return result;
    } catch (err) {
      const errorMessage = 'Login failed. Please try again.';
      setError(errorMessage);
      console.log('useAdminAuth: Login error:', err);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    
    try {
      const result = await firebaseAuthService.logout();
      if (result.success) {
        setIsAuthenticated(false);
        setUser(null);
      }
      return result;
    } catch (err) {
      console.error('Logout error:', err);
      return { success: false, message: 'Logout failed' };
    } finally {
      setLoading(false);
    }
  };

  return {
    isAuthenticated,
    loading,
    error,
    user,
    login,
    logout
  };
}
