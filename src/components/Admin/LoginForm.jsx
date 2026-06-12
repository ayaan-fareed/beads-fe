import React, { useState, useEffect } from 'react';
import { useAdminAuth } from '../../hooks/useAdminAuth.js';
import './LoginForm.css';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('admin@stainlesssparkle.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const { login, error, user } = useAdminAuth();

  useEffect(() => {
    // Check if user was previously logged in (logout scenario)
    const wasLoggedIn = sessionStorage.getItem('wasLoggedIn');
    if (wasLoggedIn === 'true') {
      setShowLogoutMessage(true);
      sessionStorage.removeItem('wasLoggedIn');
      // Clear the message after 3 seconds
      setTimeout(() => setShowLogoutMessage(false), 3000);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Firebase Auth login attempt');
    
    if (!email.trim() || !password.trim()) {
      console.log('Login validation failed');
      return;
    }

    setLoading(true);
    
    try {
      const result = await login(email, password);
      console.log('Firebase Auth login result:', result);
      
      if (result.success) {
        onLogin(result);
      }
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <div className="loginHeader">
          <h1>Admin Login</h1>
          <p>Elegant Beads Dashboard</p>
        </div>
        
        {showLogoutMessage && (
          <div className="logoutMessage">
            <p>✅ Successfully logged out</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="loginForm">
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              disabled={loading}
              required
            />
          </div>
          
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              disabled={loading}
              required
            />
          </div>
          
          {error && <div className="errorMessage">{error}</div>}
          
          <button type="submit" className="loginButton" disabled={loading || !email.trim() || !password.trim()}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="loginFooter">
          <p>Admin Email: admin@stainlesssparkle.com</p>
          <p>Password: stains@sparkles321456</p>
        </div>
      </div>
    </div>
  );
}
