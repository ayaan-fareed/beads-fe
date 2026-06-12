import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm.jsx';
import AdminLayout from './AdminLayout.jsx';
import ProductManager from './ProductManager.jsx';
import { firebaseAuthService } from '../../services/firebaseAuth.js';

export default function AdminDashboard({ onNavigate }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize Firebase Auth state
    const initializeAuth = async () => {
      try {
        const currentUser = await firebaseAuthService.initializeAuth();
        setIsAuthenticated(!!currentUser);
        setUser(currentUser);
        console.log('AdminDashboard: Firebase auth initialized:', !!currentUser);
      } catch (err) {
        console.error('AdminDashboard: Auth initialization error:', err);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen to auth state changes
    const unsubscribe = firebaseAuthService.onAuthStateChanged((authUser) => {
      setIsAuthenticated(!!authUser);
      setUser(authUser);
      console.log('AdminDashboard: Auth state changed:', !!authUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = (loginResult) => {
    console.log('AdminDashboard: Firebase login successful');
    setIsAuthenticated(true);
    setUser(loginResult.user);
  };

  const handleLogout = async () => {
    try {
      console.log('AdminDashboard: Attempting logout');
      const result = await firebaseAuthService.logout();
      
      if (result.success) {
        setIsAuthenticated(false);
        setUser(null);
        console.log('AdminDashboard: Logout successful, staying on admin page');
        // Don't navigate to home, stay on admin page to show login form
      } else {
        console.error('AdminDashboard: Logout failed:', result.message);
      }
    } catch (error) {
      console.error('AdminDashboard: Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="adminLoading">
        <div className="loadingSpinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <AdminLayout onNavigate={onNavigate} onLogout={handleLogout}>
      <ProductManager />
    </AdminLayout>
  );
}
