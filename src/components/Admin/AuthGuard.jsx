import React, { useEffect } from 'react';
import { useAdminAuth } from '../../hooks/useAdminAuth.js';
import LoginForm from './LoginForm.jsx';

export default function AuthGuard({ children }) {
  const { isAuthenticated, loading, user } = useAdminAuth();

  useEffect(() => {
    console.log('AuthGuard: State changed - isAuthenticated:', isAuthenticated, 'loading:', loading, 'user:', user);
  }, [isAuthenticated, loading, user]);

  if (loading) {
    return (
      <div className="adminLoading">
        <div className="loadingSpinner"></div>
        <p>Loading authentication...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('AuthGuard: Showing login form');
    return <LoginForm />;
  }

  console.log('AuthGuard: Showing protected content for user:', user?.email);
  return children;
}
