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
            <span className="hamburgerIcon">☰</span>
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
            <span className="btnIcon">🏠</span>
            <span className="btnText">Back to Site</span>
          </button>
          
          <button 
            className="logoutBtn"
            onClick={onLogout}
          >
            <span className="btnIcon">🚪</span>
            <span className="btnText">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
