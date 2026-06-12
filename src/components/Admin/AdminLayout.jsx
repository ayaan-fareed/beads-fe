import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar.jsx';
import ProductManager from './ProductManager.jsx';
import OrderManager from './OrderManager.jsx';
import AnalyticsDashboard from './AnalyticsDashboard.jsx';
import SettingsPanel from './SettingsPanel.jsx';
import './AdminLayout.css';

export default function AdminLayout({ children, onNavigate, onLogout }) {
  const [activeSection, setActiveSection] = useState('products');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleLogout = async () => {
    // Set session flag to show logout message
    sessionStorage.setItem('wasLoggedIn', 'true');
    
    // Call the logout function passed from AdminDashboard
    if (onLogout) {
      await onLogout();
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'products':
        return <ProductManager />;
      case 'orders':
        return <OrderManager />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <ProductManager />;
    }
  };

  return (
    <div className="adminLayout">
      <AdminNavbar onLogout={handleLogout} onNavigate={onNavigate} />
      <div className="adminContainer">
        <aside className="adminSidebar">
          <nav className="sidebarNav">
            <ul className="navList">
              <li className="navItem">
                <button 
                  className={`navLink ${activeSection === 'products' ? 'active' : ''}`}
                  onClick={() => handleNavClick('products')}
                >
                  📦 Products
                </button>
              </li>
              <li className="navItem">
                <button 
                  className={`navLink ${activeSection === 'orders' ? 'active' : ''}`}
                  onClick={() => handleNavClick('orders')}
                >
                  🛍️ Orders
                </button>
              </li>
              <li className="navItem">
                <button 
                  className={`navLink ${activeSection === 'analytics' ? 'active' : ''}`}
                  onClick={() => handleNavClick('analytics')}
                >
                  📊 Analytics
                </button>
              </li>
              <li className="navItem">
                <button 
                  className={`navLink ${activeSection === 'settings' ? 'active' : ''}`}
                  onClick={() => handleNavClick('settings')}
                >
                  ⚙️ Settings
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main className="adminMain">
          <div className="adminContent">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
}
