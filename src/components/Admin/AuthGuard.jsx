import React, { useEffect } from 'react';
import { useAdminAuth } from '../../hooks/useAdminAuth.js';
import LoginForm from './LoginForm.jsx';

export default function AuthGuard({ children }) {
  const { isAuthenticated, loading, login } = useAdminAuth();

  useEffect(() => {
    console.log('AuthGuard: State changed - isAuthenticated:', isAuthenticated, 'loading:', loading);
  }, [isAuthenticated, loading]);

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
