import { PHONE } from '../../data/products.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">Stainless sparkle</div>
          <p className="tagline">Handmade jewellery with love �</p>
          <p className="description">Every piece is unique and crafted just for you.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">in</a>
          </div>
        </div>

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

      <div className="footer-bottom">
        <p>© 2024 Stainless sparkle. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
