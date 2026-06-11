import React, { useState } from 'react';
import './LoginForm.css';

export default function LoginForm({ onLogin }) {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with password:', password);
    
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }

    setLoading(true);
    setError('');
    
    const result = onLogin(password);
    console.log('Login result:', result);
    
    if (!result.success) {
      setError(result.message);
    }
    
    setLoading(false);
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
