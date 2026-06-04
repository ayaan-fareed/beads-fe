import { PHONE } from '../../data/products.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerLogo">elegant <span>beads</span></div>
      <p>Handmade jewellery with love 💕</p>
      <p>WhatsApp: <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">+92 308 816 8530</a></p>
    </footer>
  );
}
