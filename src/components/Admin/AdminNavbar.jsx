import React from 'react';
import './AdminNavbar.css';

export default function AdminNavbar({ onLogout, onNavigate }) {
  return (
    <header className="adminNavbar">
      <div className="navbarContainer">
        <div className="navbarBrand">
          <h1>Elegant Beads</h1>
          <span className="adminBadge">Admin</span>
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
