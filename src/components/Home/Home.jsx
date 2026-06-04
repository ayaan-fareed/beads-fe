import Footer from '../Footer/Footer.jsx';
import './Home.css';

const features = [
  { icon: '💎', title: 'Premium Quality', text: 'Genuine and durable beads that last long.' },
  { icon: '🎁', title: 'Gift Ready', text: 'Beautiful packaging for birthdays and gifting.' },
  { icon: '🚚', title: 'Fast Delivery', text: 'Delivery available across all of Pakistan.' },
  { icon: '💬', title: 'WhatsApp Support', text: 'Order directly and quickly on WhatsApp.' }
];

export default function Home({ onNavigate }) {
  return (
    <main>
      <section className="hero">
        <div className="heroBadge">✨ Handcrafted with Love</div>
        <h1>Beautiful <em>Beaded</em><br />Jewellery</h1>
        <p>Handmade rings, necklaces, earrings and more — crafted just for you.</p>
        <div className="heroBtns">
          <button className="btnPrimary" onClick={() => onNavigate('shop')}>Shop Now 💖</button>
          <button className="btnOutline" onClick={() => onNavigate('about')}>About Us</button>
        </div>
      </section>

      <section className="homeFeatures">
        {features.map((item) => (
          <article className="homeFeature" key={item.title}>
            <div className="homeFeatureIcon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="homeCta">
        <h2>Ready to find your perfect piece?</h2>
        <p>Browse our full collection of handmade beaded jewellery.</p>
        <button className="btnPrimary" onClick={() => onNavigate('shop')}>View Collection →</button>
      </section>
      <Footer />
    </main>
  );
}
