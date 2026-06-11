import React from 'react';
import { useAdminAuth } from '../../hooks/useAdminAuth.js';
import AdminNavbar from './AdminNavbar.jsx';
import './AdminLayout.css';

export default function AdminLayout({ children, onNavigate }) {
  const { logout } = useAdminAuth();

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  return (
    <div className="adminLayout">
      <AdminNavbar onLogout={handleLogout} onNavigate={onNavigate} />
      <div className="adminContainer">
        <aside className="adminSidebar">
          <nav className="sidebarNav">
            <ul className="navList">
              <li className="navItem">
                <a href="#products" className="navLink active">
                  📦 Products
                </a>
              </li>
              <li className="navItem">
                <a href="#orders" className="navLink">
                  🛍️ Orders
                </a>
              </li>
              <li className="navItem">
                <a href="#analytics" className="navLink">
                  📊 Analytics
                </a>
              </li>
              <li className="navItem">
                <a href="#settings" className="navLink">
                  ⚙️ Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main className="adminMain">
          <div className="adminContent">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
