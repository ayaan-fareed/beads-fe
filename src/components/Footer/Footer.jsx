import { useState } from 'react';
import { PHONE } from '../../data/products.js';
import './Footer.css';

export default function Footer() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const AccordionSection = ({ title, children, sectionId }) => (
    <div className="footer-accordion-section">
      <button 
        className={`footer-accordion-header ${activeAccordion === sectionId ? 'active' : ''}`}
        onClick={() => toggleAccordion(sectionId)}
      >
        <span>{title}</span>
        <span className={`accordion-chevron ${activeAccordion === sectionId ? 'rotated' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`footer-accordion-content ${activeAccordion === sectionId ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section - Always Visible */}
        <div className="footer-brand-section">
          <div className="footer-logo">Stainless sparkle</div>
          <p className="tagline">Handmade jewellery with love 💕</p>
          <p className="description">Every piece is unique and crafted just for you.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#F58529'}} />
                    <stop offset="25%" style={{stopColor: '#DD2A7B'}} />
                    <stop offset="50%" style={{stopColor: '#8134AF'}} />
                    <stop offset="100%" style={{stopColor: '#515BD4'}} />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagramGradient)" strokeWidth="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="url(#instagramGradient)" strokeWidth="2" fill="none"/>
                <circle cx="18" cy="6" r="1" fill="url(#instagramGradient)"/>
              </svg></a>
            <a href="#" className="social-icon">in</a>
          </div>
        </div>

        {/* Desktop Layout - Original 5-column */}
        <div className="footer-desktop-layout">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Necklaces</a></li>
              <li><a href="#">Earrings</a></li>
              <li><a href="#">Rings</a></li>
              <li><a href="#">Bracelets</a></li>
              <li><a href="#">Gift Sets</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Customer Care</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Return & Exchange</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>WhatsApp: +82 308 916 8530</li>
              <li>Instagram: @stainless_sparkle01</li>
              <li>Karachi , Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="footer-mobile-layout">
          <AccordionSection title="Quick Links" sectionId="quick-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </AccordionSection>

          <AccordionSection title="Categories" sectionId="categories">
            <ul>
              <li><a href="#">Necklaces</a></li>
              <li><a href="#">Earrings</a></li>
              <li><a href="#">Rings</a></li>
              <li><a href="#">Bracelets</a></li>
              <li><a href="#">Gift Sets</a></li>
            </ul>
          </AccordionSection>

          <AccordionSection title="Customer Care" sectionId="customer-care">
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Return & Exchange</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </AccordionSection>

          <AccordionSection title="Contact Us" sectionId="contact-us">
            <ul className="contact-info">
              <li>WhatsApp: +82 308 916 8530</li>
              <li>Instagram: @stainless_sparkle01</li>
              <li>Karachi , Pakistan</li>
            </ul>
          </AccordionSection>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Stainless sparkle. All Rights Reserved.</p>
        <div className="footer-admin-link">
          <a href="#admin" onClick={(e) => {
            e.preventDefault();
            window.location.hash = 'admin';
          }}>
            Admin Access
          </a>
        </div>
      </div>
    </footer>
  );
}
