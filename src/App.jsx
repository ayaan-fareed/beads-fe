import { useMemo, useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import About from './components/About/About.jsx';
import CartDrawer from './components/CartDrawer/CartDrawer.jsx';
import Toast from './components/Toast/Toast.jsx';
import AdminDashboard from './components/Admin/AdminDashboard.jsx';
import { PHONE } from './data/products.js';
import { useProductsFirebase } from './hooks/useProductsFirebase.js';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');
  const toastTimerRef = useRef(null);
  const { products, loading, error } = useProductsFirebase();

  // Handle hash-based routing for admin access
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setActivePage('admin');
        window.location.hash = '';
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message) => {
    setToast(message);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => setToast(''), 2400);
  };

  const addToCart = (productId) => {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    setCart((prev) => [...prev, { ...product, uid: `${Date.now()}-${Math.random()}` }]);
    setCartOpen(true);
    showToast(`${product.icon} “${product.name}” added to cart`);
  };

  const removeFromCart = (uid) => {
    setCart((prev) => prev.filter((item) => item.uid !== uid));
  };

  const orderOnWhatsApp = () => {
    if (!cart.length) return;
    let message = 'Hello! 👋\n\nI would like to order:\n\n';
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.icon} ${item.name} — Rs. ${item.price}\n`;
    });
    message += `\n💰 Total: Rs. ${total.toLocaleString()}\n\nPlease share delivery details. Thank you! 🙏`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app">
      {activePage === 'admin' ? (
        <AdminDashboard onNavigate={navigate} />
      ) : (
        <>
          <Navbar activePage={activePage} cartCount={cart.length} onNavigate={navigate} onOpenCart={() => setCartOpen(true)} />
          {activePage === 'home' && <Home onNavigate={navigate} />}
          {activePage === 'shop' && <Shop onAddToCart={addToCart} products={products} loading={loading} error={error} />}
          {activePage === 'about' && <About />}
          <CartDrawer cart={cart} total={total} isOpen={cartOpen} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onOrder={orderOnWhatsApp} />
          <Toast message={toast} />
        </>
      )}
    </div>
  );
}
