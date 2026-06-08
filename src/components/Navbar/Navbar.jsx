import './Navbar.css';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'shop', label: 'Shop' },
  { id: 'about', label: 'About' }
];

export default function Navbar({ activePage, cartCount, onNavigate, onOpenCart }) {
  return (
    <>
    <div className="announcementBar">
        <span>✦</span> Free Delivery all across Pakistan on orders above Rs. 3000 <span>✦</span>
      </div>
       <nav className="navbar">
      <button className="logo" onClick={() => onNavigate('home')} aria-label="Go to home">
        Stainless <span>sparkle</span>
      </button>

      <div className="navLinks" aria-label="Main navigation">
        {links.map((link) => (
          <button
            key={link.id}
            className={`navLink ${activePage === link.id ? 'active' : ''}`}
            onClick={() => onNavigate(link.id)}
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
