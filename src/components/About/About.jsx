import { PHONE } from '../../data/products.js';
import Footer from '../Footer/Footer.jsx';
import './About.css';
import { useState, useEffect } from 'react';

// Image imports
import heroAboutImage from '../../assets/hero-image.png';
import storyImage from '../../assets/ourQuality.png';
import braceletImage from '../../assets/bracelet-image.png';
import necklaceImage2 from '../../assets/necklace-image2.png';
import ringsImage from '../../assets/rings-image.png';
import topsImage from '../../assets/tops-image.png';
import necklaceImage from '../../assets/necklace-image.png';

const whyChooseUs = [
  { icon: '💎', title: 'Premium Quality', desc: 'We use only the finest stainless steel that never tarnishes, ensuring lasting beauty.' },
  { icon: '🎁', title: 'Gift Ready', desc: 'Every piece comes beautifully packaged, ready to gift to someone special.' },
  { icon: '🚚', title: 'Fast Delivery', desc: 'Quick and reliable delivery across all cities in Pakistan.' },
  { icon: '❤️', title: 'Handmade With Love', desc: 'Each piece is carefully crafted by hand with attention to detail.' },
];

const journeyStats = [
  { icon: '👥', num: '500+', label: 'Happy Customers' },
  { icon: '💍', num: '50+', label: 'Unique Designs' },
  { icon: '🤲', num: '100%', label: 'Handmade' },
  { icon: '⭐', num: '4.9', label: 'Customer Rating' },
];

const ourPromise = [
  { icon: '🔧', title: 'Premium Materials', desc: 'Only high-quality stainless steel and genuine materials used.' },
  { icon: '✅', title: 'Quality Checked', desc: 'Every piece is thoroughly inspected before shipping.' },
  { icon: '💰', title: 'Affordable Prices', desc: 'Luxury jewellery that doesn\'t break the bank.' },
  { icon: '😊', title: 'Customer Satisfaction', desc: 'Your happiness is our top priority.' },
];

const instaImages = [
  braceletImage, necklaceImage2, ringsImage, topsImage, necklaceImage
];

// Mobile Slider Component
function MobileSlider({ items, renderItem, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`mobileSlider ${className}`}>
      <button className="sliderNavBtn prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="sliderNavBtn next" onClick={nextSlide}>
        ›
      </button>
      <div 
        className="mobileSliderTrack"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="mobileSliderItem">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      <div className="sliderDots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`sliderDot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main>
      {/* ── HERO SECTION ── */}
      <section className="aboutHero" style={{ backgroundImage: `url(${heroAboutImage})` }}>
        <div className="aboutHeroOverlay">
          <div className="aboutHeroContent">
            <h1>About Stainless Sparkle</h1>
            <p>Discover our passion for creating beautiful, timeless stainless steel jewellery that celebrates elegance and craftsmanship.</p>
            <button className="heroStoryBtn" onClick={() => {
              const storySection = document.getElementById('ourStory');
              if (storySection) {
                storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}>Our Story →</button>
          </div>
        </div>
      </section>

      {/* ── OUR STORY SECTION ── */}
      <section id="ourStory" className="ourStory">
        <div className="storyContainer">
          <div className="storyContent">
            <div className="sectionLabel">OUR STORY</div>
            <h2>Crafting Elegance Since 2020</h2>
            <p>
              Stainless Sparkle began with a simple vision: to create beautiful, affordable jewellery that makes every woman feel special. 
              What started as a small passion project has grown into a beloved brand, thanks to our amazing customers.
            </p>
            <p>
              Every piece in our collection is handmade with love and attention to detail. We believe that jewellery should be 
              both beautiful and meaningful - a reflection of the person who wears it.
            </p>
            <p>
              Our commitment to quality craftsmanship and customer satisfaction has made us one of Pakistan's most trusted 
              stainless steel jewellery brands.
            </p>
          </div>
          <div className="storyImage">
            <img 
              src={storyImage} 
              alt="Our Story - Stainless Sparkle" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="storyImagePlaceholder" style={{ display: 'none' }}>
              ✨
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US SECTION ── */}
      <section className="whyChooseUs">
        <div className="sectionHeader">
          <div className="sectionTitleWrap">
            <h2 className="sectionTitle">Why Choose Us</h2>
            <div className="sectionDivider" />
          </div>
        </div>
        <div className="chooseGrid">
          {whyChooseUs.map((item, index) => (
            <div className="chooseCard" key={index}>
              <div className="chooseIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Slider */}
        <MobileSlider 
          items={whyChooseUs}
          renderItem={(item, index) => (
            <div className="chooseCard">
              <div className="chooseIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          )}
          className="chooseSlider"
        />
      </section>

      {/* ── OUR JOURNEY SECTION ── */}
      <section className="ourJourney">
        <div className="sectionHeader">
          <div className="sectionTitleWrap">
            <h2 className="sectionTitle">Our Journey So Far</h2>
            <div className="sectionDivider" />
          </div>
        </div>
        <div className="journeyGrid">
          {journeyStats.map((stat, index) => (
            <div className="journeyCard" key={index}>
              <div className="journeyIcon">{stat.icon}</div>
              <div className="journeyNum">{stat.num}</div>
              <div className="journeyLabel">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Mobile Slider */}
        <MobileSlider 
          items={journeyStats}
          renderItem={(stat, index) => (
            <div className="journeyCard">
              <div className="journeyIcon">{stat.icon}</div>
              <div className="journeyNum">{stat.num}</div>
              <div className="journeyLabel">{stat.label}</div>
            </div>
          )}
          className="journeySlider"
        />
      </section>

      {/* ── OUR PROMISE SECTION ── */}
      <section className="ourPromise">
        <div className="sectionHeader">
          <div className="sectionTitleWrap">
            <h2 className="sectionTitle">Our Promise To You</h2>
            <div className="sectionDivider" />
          </div>
        </div>
        <div className="promiseGrid">
          {ourPromise.map((item, index) => (
            <div className="promiseCard" key={index}>
              <div className="promiseIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Slider */}
        <MobileSlider 
          items={ourPromise}
          renderItem={(item, index) => (
            <div className="promiseCard">
              <div className="promiseIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          )}
          className="promiseSlider"
        />
      </section>

      {/* ── FOLLOW OUR JOURNEY SECTION ── */}
      <section className="followJourney">
        <div className="followContainer">
          <div className="followContent">
            <div className="followLabel">FOLLOW OUR JOURNEY</div>
            <h2>Join Our Community</h2>
            <p>Follow us on Instagram to see our latest designs, behind-the-scenes content, and happy customers!</p>
            <a 
              href="https://www.instagram.com/stainless_sparkle01?igsh=Nm90M3I3cDJ5MGJ4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="instagramHandle"
            >
              Follow Us @stainless_sparkle01
            </a>
          </div>
          <div className="followGrid">
            {instaImages.map((img, index) => (
              <div className="followImg" key={index}>
                <img 
                  src={img} 
                  alt={`Instagram Post ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            ))}
          </div>
          
          {/* Mobile Slider */}
          <MobileSlider 
            items={instaImages}
            renderItem={(img, index) => (
              <div className="followImg">
                <img 
                  src={img} 
                  alt={`Instagram Post ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            )}
            className="instagramSlider"
          />
        </div>
      </section>

      {/* ── GET IN TOUCH SECTION ── */}
      <section className="getInTouch">
        <div className="touchContainer">
          <h2>Get In Touch</h2>
          <p>Have a question or want a custom order? We'd love to hear from you!</p>
          <div className="touchButtons">
            <a 
              href={`https://wa.me/${PHONE}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="touchBtn whatsappBtn"
            >
              <span>💬</span>
              Message on WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/stainless_sparkle01?igsh=Nm90M3I3cDJ5MGJ4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="touchBtn instagramBtn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
