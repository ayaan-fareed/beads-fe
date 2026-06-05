import Footer from '../Footer/Footer.jsx';
import './Home_new.css';

const features = [
  { icon: '💎', title: 'Premium Quality', text: 'Genuine and durable beads that last long.' },
  { icon: '🎁', title: 'Gift Ready', text: 'Beautiful packaging for birthdays and gifting.' },
  { icon: '🚚', title: 'Fast Delivery', text: 'Delivery available across all of Pakistan.' },
  { icon: '💬', title: 'WhatsApp Support', text: 'Order directly and quickly on WhatsApp.' }
];

export default function Home({ onNavigate }) {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent">
          <div className="heroLeft">
            <div className="heroBadge">✨ Handcrafted with Love</div>
            <h1>Beautiful <em>Beaded</em><br />Jewellery</h1>
            <p>Handmade rings, necklaces, earrings and more — crafted just for you.</p>
            <div className="heroBtns">
              <button className="btnPrimary" onClick={() => onNavigate('shop')}>Shop Now 💖</button>
              <button className="btnOutline" onClick={() => onNavigate('about')}>About Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="featuresHeader">
          <h2>Why Choose Us?</h2>
          <p>We bring you the finest handcrafted jewellery with love and care</p>
        </div>
        <div className="featuresGrid">
          {features.map((item) => (
            <article className="featureCard" key={item.title}>
              <div className="featureIcon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="ctaContent">
          <h2>Ready to Find Your Perfect Piece?</h2>
          <p>Explore our collection of beautiful handcrafted jewellery</p>
          <button className="ctaBtn" onClick={() => onNavigate('shop')}>
            Explore Collection 🛍️
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
