import './Navbar.css';
import { useState } from 'react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'shop', label: 'Shop' },
  { id: 'about', label: 'About' }
];

export default function Navbar({ activePage, cartCount, onNavigate, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
    <div className="announcementBar">
        <span>✦</span> Free Delivery all across Pakistan on orders above Rs. 3000 <span>✦</span>
      </div>
       <nav className="navbar">
      <button className="logo" onClick={() => handleNavClick('home')} aria-label="Go to home">
        Stainless <span>sparkle</span>
      </button>

      <button 
        className="mobileMenuToggle" 
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div className={`navLinks ${mobileMenuOpen ? 'mobileOpen' : ''}`} aria-label="Main navigation">
        {links.map((link) => (
          <button
            key={link.id}
            className={`navLink ${activePage === link.id ? 'active' : ''}`}
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>

      <button className="cartBtn" onClick={onOpenCart}>
        <span>🛍️</span> Cart <span className="cartCount">{cartCount}</span>
      </button>
    </nav>
      </>
   
  );
}
