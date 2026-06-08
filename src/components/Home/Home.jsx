import Footer from '../Footer/Footer.jsx';
import './Home_new.css';

// Image imports for Vercel deployment
import ourQualityImage from '../../assets/ourQuality.png';
import braceletImage from '../../assets/bracelet-image.png';
import necklaceImage2 from '../../assets/necklace-image2.png';
import ringsImage from '../../assets/rings-image.png';
import topsImage from '../../assets/tops-image.png';
import necklaceImage from '../../assets/necklace-image.png';
import heroImage from '../../assets/hero-image.png';

const features = [
  { icon: '⚡', title: 'Stainless Steel', text: 'Premium quality stainless steel that never tarnishes.' },
  { icon: '✨', title: 'Hypoallergenic', text: 'Safe for sensitive skin, nickel-free material.' },
  { icon: '🚚', title: 'Fast Delivery', text: 'Delivery available across all of Pakistan.' },
  { icon: '💬', title: 'WhatsApp Support', text: 'Order directly and quickly on WhatsApp.' },
];

const bestSellers = [
  { id: 1, name: 'Stainless Steel Diamond Cut Necklace', tag: 'Necklace', badge: 'hot', price: 3500, rating: 4.8, icon: '📿' },
  { id: 2, name: 'Polished Steel Link Bracelet', tag: 'Bracelet', badge: 'best', price: 2800, rating: 4.9, icon: '🪬' },
  { id: 3, name: 'Surgical Steel Hoop Earrings', tag: 'Earrings', badge: 'new', price: 2200, rating: 4.9, icon: '💎' },
  { id: 4, name: 'Brushed Steel Crystal Ring', tag: 'Ring', badge: 'hot', price: 4500, rating: 4.8, icon: '💍' },
];

const shippingInfo = [
  { icon: '🚚', title: 'Nationwide Delivery', desc: 'Fast delivery across all cities in Pakistan' },
  { icon: '📦', title: 'Secure Packaging', desc: 'Carefully packed to prevent damage during transit' },
  { icon: '💳', title: 'Cash on Delivery', desc: 'Pay when you receive your order' },
  { icon: '🔄', title: 'Easy Returns', desc: '7-day return policy for your peace of mind' },
];

const stats = [
  { icon: '👥', num: '500+', label: 'Happy Customers' },
  { icon: '💍', num: '50+', label: 'Unique Designs' },
  { icon: '🤲', num: '100%', label: 'Handmade' },
  { icon: '⭐', num: '4.9', label: 'Customer Rating' },
];

const instaEmojis = ['📿', '💍', '💎', '🪬', '✨'];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  return (
    <span className="stars">
      {'★'.repeat(full)}{'☆'.repeat(5 - full)}
    </span>
  );
}

function BadgePill({ badge }) {
  if (!badge) return null;
  if (badge === 'hot') return <span className="badgeHot">🔥 HOT</span>;
  if (badge === 'new') return <span className="badgeNew">NEW</span>;
  if (badge === 'best') return <span className="badgeBest">BEST SELLER</span>;
  return null;
}

export default function Home({ onNavigate }) {
  return (
    <main>
      {/* ── ANNOUNCEMENT BAR ── */}

      {/* ── HERO ── */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="heroInner">
          {/* Left decorative image */}
       

          {/* Center content */}
          <div className="heroContent">
            <div className="heroBadge">✨ Premium Stainless Steel</div>
            <h1>Shining <em>Sparkle</em><br />Jewellery</h1>
            <p>High-quality stainless steel rings, necklaces, earrings and more — designed to last forever.</p>
            <div className="heroBtns">
              <button className="btnPrimary" onClick={() => onNavigate('shop')}>Shop Now 💖</button>
              <button className="btnOutline" onClick={() => onNavigate('about')}>About Us</button>
            </div>
          </div>

          {/* Right decorative image */}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features">
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

      {/* ── PROMISE / BRAND SECTION ── */}
      <section className="promise">
        <div className="promiseInner">
          <div className="promiseImg">
            <img 
              src={ourQualityImage} 
              alt="Quality Stainless Steel Jewellery" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="promiseImgPlaceholder" style={{ display: 'none' }}>
              ✨
            </div>
          </div>

          <div className="promiseText">
            <div className="promiseLabel">OUR PROMISE</div>
            <h2>Quality Stainless Steel �</h2>
            <p>
              Every piece is crafted from premium stainless steel that never tarnishes,
              ensuring lasting beauty and durability. Your perfect sparkle, forever!
            </p>
            <button className="learnMoreBtn" onClick={() => onNavigate('about')}>
              Learn More About Us →
            </button>
          </div>

          <div className="promiseStats">
            {stats.map((s) => (
              <div className="statItem" key={s.label}>
                <div className="statIcon">{s.icon}</div>
                <div className="statNum">{s.num}</div>
                <div className="statLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS ── */}
      <section className="bestSellers">
        <div className="sectionHeader">
          <div style={{ width: 80 }} />
          <div className="sectionTitleWrap">
            <h2 className="sectionTitle">Best Sellers</h2>
            <div className="sectionDivider" />
          </div>
          <button className="viewAllBtn" onClick={() => onNavigate('shop')}>
            View All Products →
          </button>
        </div>

        <div className="productsRow">
          {bestSellers.map((p) => (
            <div className="productCard" key={p.id}>
              <div className="productImgWrap">
                <div className="productImgPlaceholder">{p.icon}</div>
                <button className="wishlistBtn" title="Wishlist">🤍</button>
              </div>
              <div className="productBody">
                <div className="productMeta">
                  <span className="productTag">{p.tag}</span>
                  <BadgePill badge={p.badge} />
                </div>
                <div className="productName">{p.name}</div>
                <div className="productRating">
                  <StarRating rating={p.rating} />
                  <span className="ratingVal">({p.rating})</span>
                </div>
                <div className="productFooter">
                  <span className="productPrice">Rs. {p.price.toLocaleString()}</span>
                  <button className="addToCartBtn" onClick={() => onNavigate('shop')}>
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SHIPPING INFO ── */}
      <section className="shippingInfo">
        <div className="sectionTitleWrap" style={{ marginBottom: '2rem' }}>
          <h2 className="sectionTitle">Why Shop With Us</h2>
          <div className="sectionDivider" />
        </div>
        <div className="shippingGrid">
          {shippingInfo.map((item, i) => (
            <div className="shippingCard" key={i}>
              <div className="shippingIcon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section className="instagram">
        <div className="instagramInner">
          <div className="instagramText">
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              </svg>
            </div>
            <h3>Follow Us On <span>Instagram</span></h3>
            <p>Get inspired by our latest collections and happy customers.</p>
            <a className="instagramHandle" href="https://www.instagram.com/stainless_sparkle01?igsh=Nm90M3I3cDJ5MGJ4" target="_blank" rel="noopener noreferrer">
              Follow Us @stainless_sparkle01
            </a>
          </div>
          <div className="instagramGrid">
            <div className="instaImg">
              <img src={braceletImage} alt="Instagram Jewelry Collection 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <div className="instaImg">
              <img src={necklaceImage2} alt="Instagram Jewelry Collection 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <div className="instaImg">
              <img src={ringsImage} alt="Instagram Jewelry Collection 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <div className="instaImg">
              <img src={topsImage} alt="Instagram Jewelry Collection 4" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <div className="instaImg">
              <img src={necklaceImage} alt="Instagram Jewelry Collection 5" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bottomCta">
        <h2>Find your perfect piece today 💕</h2>
        <p>Shop our collection and add a touch of elegance to every moment.</p>
        <button className="ctaBtn" onClick={() => onNavigate('shop')}>
          Shop The Collection →
        </button>
      </section>
      <Footer />
    </main>
  );
}
