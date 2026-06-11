import { useState, useEffect } from 'react';
import { adminAuth } from '../services/adminAuth.js';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check authentication status on mount
    const authStatus = adminAuth.validateSession();
    setIsAuthenticated(authStatus);
    setLoading(false);
  }, []);

  const login = (password) => {
    setLoading(true);
    setError('');
    
    console.log('useAdminAuth: Attempting login with password:', password);
    const result = adminAuth.login(password);
    console.log('useAdminAuth: Login result:', result);
    
    if (result.success) {
      setIsAuthenticated(true);
      console.log('useAdminAuth: Authentication successful');
    } else {
      setError(result.message);
      console.log('useAdminAuth: Authentication failed:', result.message);
    }
    
    setLoading(false);
    return result;
  };

  const logout = () => {
    setLoading(true);
    const result = adminAuth.logout();
    setIsAuthenticated(false);
    setLoading(false);
    return result;
  };

  return {
    isAuthenticated,
    loading,
    error,
    login,
    logout
  };
}
