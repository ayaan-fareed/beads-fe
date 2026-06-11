import React from 'react';
import AuthGuard from './AuthGuard.jsx';
import AdminLayout from './AdminLayout.jsx';
import ProductManager from './ProductManager.jsx';

export default function AdminDashboard({ onNavigate }) {
  return (
    <AuthGuard>
      <AdminLayout onNavigate={onNavigate}>
        <ProductManager />
      </AdminLayout>
    </AuthGuard>
  );
}
