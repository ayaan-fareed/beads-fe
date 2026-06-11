import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm.jsx';
import AdminLayout from './AdminLayout.jsx';
import ProductManager from './ProductManager.jsx';

export default function AdminDashboard({ onNavigate }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem('adminAuth') === 'true';
    console.log('AdminDashboard: Initial auth check:', authStatus);
    setIsAuthenticated(authStatus);
    setLoading(false);
  }, []);

  const handleLogin = (password) => {
    console.log('AdminDashboard: Login attempt with password:', password);
    
    const storedPassword = localStorage.getItem('adminPassword') || 'admin123';
    console.log('AdminDashboard: Expected password:', storedPassword);
    
    if (password === storedPassword) {
      localStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      console.log('AdminDashboard: Login successful');
      return { success: true };
    } else {
      console.log('AdminDashboard: Login failed');
      return { success: false, message: 'Invalid password' };
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    onNavigate('home');
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
