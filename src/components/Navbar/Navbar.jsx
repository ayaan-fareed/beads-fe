import './Navbar.css';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'shop', label: 'Shop' },
  { id: 'about', label: 'About' }
];

export default function Navbar({ activePage, cartCount, onNavigate, onOpenCart }) {
  return (
    <nav className="navbar">
      <button className="logo" onClick={() => onNavigate('home')} aria-label="Go to home">
        elegant <span>beads</span>
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
  );
}
