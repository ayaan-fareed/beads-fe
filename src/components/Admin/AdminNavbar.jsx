import React from 'react';
import './AdminNavbar.css';

export default function AdminNavbar({ onLogout, onNavigate, onMobileMenuToggle }) {
  return (
    <header className="adminNavbar">
      <div className="navbarContainer">
        <div className="navbarLeft">
          {/* Mobile Menu Button */}
          <button 
            className="mobileMenuBtn"
            onClick={onMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
          
          <div className="navbarBrand">
            <h1>Stainless Sparkle</h1>
            <span className="adminBadge">Admin</span>
          </div>
        </div>
        
        <div className="navbarActions">
          <button 
            className="backToSiteBtn"
            onClick={() => onNavigate('home')}
          >
            🏠 Back to Site
          </button>
          
          <button 
            className="logoutBtn"
            onClick={onLogout}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </header>
  );
}
