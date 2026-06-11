import React, { useState } from 'react';
import { useAdminAuth } from '../../hooks/useAdminAuth.js';
import './LoginForm.css';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAdminAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with password:', password);
    if (password.trim()) {
      const result = login(password);
      console.log('Login result:', result);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <div className="loginHeader">
          <h1>Admin Login</h1>
          <p>Elegant Beads Dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="loginForm">
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
          
          <button type="submit" className="loginButton" disabled={loading || !password.trim()}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="loginFooter">
          <p>Default password: admin123</p>
        </div>
      </div>
    </div>
  );
}
