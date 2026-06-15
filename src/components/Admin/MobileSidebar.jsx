import React from 'react';
import './MobileSidebar.css';

export default function MobileSidebar({ isOpen, onClose, activeSection, onNavigate, onLogout }) {
  const handleNavigate = (section) => {
    onNavigate(section);
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="mobileSidebarOverlay" onClick={onClose} />}
      
      {/* Sidebar */}
      <div className={`mobileSidebar ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="mobileSidebarHeader">
          <div className="sidebarLogo">
            <div className="logoIcon">💎</div>
            <div className="logoText">
              <span className="brandName">Stainless Sparkle</span>
              <span className="adminText">ADMIN</span>
            </div>
          </div>
          <button className="closeButton" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="mobileSidebarNav">
          <ul className="navList">
            <li className="navItem">
              <button 
                className={`navLink ${activeSection === 'products' ? 'active' : ''}`}
                onClick={() => handleNavigate('products')}
              >
                <span className="navIcon">📦</span>
                <span className="navText">Products</span>
              </button>
            </li>
            <li className="navItem">
              <button 
                className={`navLink ${activeSection === 'orders' ? 'active' : ''}`}
                onClick={() => handleNavigate('orders')}
              >
                <span className="navIcon">🛍️</span>
                <span className="navText">Orders</span>
              </button>
            </li>
            <li className="navItem">
              <button 
                className={`navLink ${activeSection === 'analytics' ? 'active' : ''}`}
                onClick={() => handleNavigate('analytics')}
              >
                <span className="navIcon">📊</span>
                <span className="navText">Analytics</span>
              </button>
            </li>
            <li className="navItem">
              <button 
                className={`navLink ${activeSection === 'settings' ? 'active' : ''}`}
                onClick={() => handleNavigate('settings')}
              >
                <span className="navIcon">⚙️</span>
                <span className="navText">Settings</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="mobileSidebarFooter">
          <button className="logoutButton" onClick={handleLogout}>
            <span className="logoutIcon">🚪</span>
            <span className="logoutText">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
