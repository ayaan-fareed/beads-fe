import { useMemo, useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import About from './components/About/About.jsx';
import CartDrawer from './components/CartDrawer/CartDrawer.jsx';
import Toast from './components/Toast/Toast.jsx';
import OrderForm from './components/OrderForm/OrderForm.jsx';
import AdminDashboard from './components/Admin/AdminDashboard.jsx';
import { PHONE } from './data/products.js';
import { useProductsFirebase } from './hooks/useProductsFirebase.js';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cartOpen, setCartOpen] = useState(false);
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');
  const toastTimerRef = useRef(null);
  const { products, loading, error } = useProductsFirebase();

  // Handle hash-based routing for admin access
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setActivePage('admin');
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update hash when navigating to/from admin
  useEffect(() => {
    if (activePage === 'admin') {
      if (window.location.hash !== '#admin') {
        window.location.hash = '#admin';
      }
    } else {
      if (window.location.hash === '#admin') {
        window.location.hash = '';
      }
    }
  }, [activePage]);

  const total = useMemo(() => cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0), [cart]);

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
    
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem) {
        // Update quantity of existing item
        return prev.map((item) => 
          item.id === productId 
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prev, { ...product, quantity: 1, uid: `${Date.now()}-${Math.random()}` }];
      }
    });
    setCartOpen(true);
    
    const existingItem = cart.find((item) => item.id === productId);
    const message = existingItem 
      ? `${product.icon} "${product.name}" quantity updated`
      : `${product.icon} "${product.name}" added to cart`;
    showToast(message);
  };
  const removeFromCart = (uid) => {
    setCart((prev) => prev.filter((item) => item.uid !== uid));
  };

  const updateQuantity = (uid, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(uid);
      return;
    }
    setCart((prev) => 
      prev.map((item) => 
        item.uid === uid 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const orderOnWhatsApp = () => {
    if (!cart.length) return;
    let message = 'Hello! 👋\n\nI would like to order:\n\n';
    cart.forEach((item, index) => {
      const quantity = item.quantity || 1;
      message += `${index + 1}. ${item.icon} ${item.name} — Rs. ${item.price} × ${quantity}\n`;
    });
    message += `\n💰 Total: Rs. ${total.toLocaleString()}\n\nPlease share delivery details. Thank you! 🙏`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const openOrderForm = () => {
    setOrderFormOpen(true);
    setCartOpen(false);
  };

  const closeOrderForm = () => {
    setOrderFormOpen(false);
  };

  const handleOrderSuccess = () => {
    setCart([]);
    showToast('🎉 Order placed successfully! We will contact you soon.');
  };

  return (
    <div className="app">
      {activePage === 'admin' ? (
        <AdminDashboard onNavigate={navigate} />
      ) : (
        <>
          <Navbar activePage={activePage} cartCount={cart.length} onNavigate={navigate} onOpenCart={() => setCartOpen(true)} />
          {activePage === 'home' && <Home onNavigate={navigate} onAddToCart={addToCart} />}
          {activePage === 'shop' && <Shop onAddToCart={addToCart} products={products} loading={loading} error={error} />}
          {activePage === 'about' && <About />}
          <CartDrawer cart={cart} total={total} isOpen={cartOpen} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onOrder={orderOnWhatsApp} onOrderForm={openOrderForm} onUpdateQuantity={updateQuantity} />
          <OrderForm cart={cart} total={total} isOpen={orderFormOpen} onClose={closeOrderForm} onOrderSuccess={handleOrderSuccess} />
          <Toast message={toast} />
        </>
      )}
    </div>
  );
}
