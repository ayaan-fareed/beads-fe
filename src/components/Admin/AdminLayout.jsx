import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar.jsx';
import ProductManager from './ProductManager.jsx';
import OrderManager from './OrderManager.jsx';
import AnalyticsDashboard from './AnalyticsDashboard.jsx';
import SettingsPanel from './SettingsPanel.jsx';
import MobileSidebar from './MobileSidebar.jsx';
import './AdminLayout.css';

export default function AdminLayout({ children, onNavigate, onLogout }) {
  const [activeSection, setActiveSection] = useState('products');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleMobileSidebarToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const handleMobileSidebarClose = () => {
    setIsMobileSidebarOpen(false);
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
      <AdminNavbar 
        onLogout={handleLogout} 
        onNavigate={onNavigate}
        onMobileMenuToggle={handleMobileSidebarToggle}
      />
      <div className="adminContainer">
        {/* Desktop Sidebar - Hidden on mobile */}
        <aside className="adminSidebar desktopSidebar">
          <div className="sidebarHeader">
            <div className="sidebarLogo">✨</div>
            <div className="sidebarBrand">Stainless Sparkle</div>
            <div className="sidebarTagline">Admin Dashboard</div>
          </div>
          <nav className="sidebarNav">
            <ul className="navList">
              <li className="navItem">
                <button 
                  className={`navLink ${activeSection === 'products' ? 'active' : ''}`}
                  onClick={() => handleNavClick('products')}
                >
                  <span className="navIcon">📦</span> Products
                </button>
              </li>
              <li className="navItem">
                <button 
                  className={`navLink ${activeSection === 'orders' ? 'active' : ''}`}
                  onClick={() => handleNavClick('orders')}
                >
                  <span className="navIcon">🛍️</span> Orders
                </button>
              </li>
              <li className="navItem">
                <button 
                  className={`navLink ${activeSection === 'analytics' ? 'active' : ''}`}
                  onClick={() => handleNavClick('analytics')}
                >
                  <span className="navIcon">📊</span> Analytics
                </button>
              </li>
              <li className="navItem">
                <button 
                  className={`navLink ${activeSection === 'settings' ? 'active' : ''}`}
                  onClick={() => handleNavClick('settings')}
                >
                  <span className="navIcon">⚙️</span> Settings
                </button>
              </li>
            </ul>
          </nav>
          <div className="sidebarFooter">
            Made with love for Sparkle
          </div>
        </aside>
        
        <main className="adminMain">
          <div className="adminContent">
            {renderActiveSection()}
          </div>
        </main>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={handleMobileSidebarClose}
        activeSection={activeSection}
        onNavigate={handleNavClick}
        onLogout={handleLogout}
      />
    </div>
  );
}
