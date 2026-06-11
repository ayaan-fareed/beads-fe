import React from 'react';
import { useAdminAuth } from '../../hooks/useAdminAuth.js';
import LoginForm from './LoginForm.jsx';

export default function AuthGuard({ children }) {
  const { isAuthenticated, loading } = useAdminAuth();

  console.log('AuthGuard: isAuthenticated:', isAuthenticated);
  console.log('AuthGuard: loading:', loading);

  if (loading) {
    return (
      <div className="adminLoading">
        <div className="loadingSpinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('AuthGuard: Showing login form');
    return <LoginForm />;
  }

  console.log('AuthGuard: Showing protected content');
  return children;
}
