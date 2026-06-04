import { PHONE } from '../../data/products.js';
import Footer from '../Footer/Footer.jsx';
import './About.css';

export default function About() {
  return (
    <main>
      <section className="aboutHero">
        <h2>About Elegant Beads</h2>
        <p>We are a small, passionate jewellery brand based in Pakistan — crafting beautiful handmade beaded jewellery with love and care.</p>
      </section>

      <section className="aboutStory">
        <h3>Our Story</h3>
        <p>Elegant Beads started with a simple love for jewellery and creativity. Every ring, necklace, and bracelet is carefully handmade — no machine work, just pure craftsmanship.</p>
        <p>We believe every woman deserves to wear something beautiful. Our pieces are designed to be affordable, stylish, and unique — so you always stand out.</p>
        <h3>Our Promise</h3>
        <p>We use only premium quality beads and materials. Each piece is checked before packaging. And we make sure every customer is happy with their order — that is our promise to you.</p>
      </section>

      <section className="aboutContact">
        <h3>Get in Touch</h3>
        <p>Have a question or want a custom order? Message us on WhatsApp — we are always happy to help.</p>
        <div className="contactBox">
          <span>💬</span>
          <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">+92 308 816 8530</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
