import { useMemo, useState, useEffect } from 'react';
import Footer from '../Footer/Footer.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import SkeletonCard from '../SkeletonCard/SkeletonCard.jsx';
import './Shop.css';

// Categories for filtering
const categories = ['All', 'Necklace', 'Earrings', 'Bracelet', 'Ring'];

export default function Shop({ onAddToCart, products, loading, error, onNavigate }) {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && categories.includes(category)) {
      setFilter(category);
    }

    const handleCategoryChange = () => {
      const newParams = new URLSearchParams(window.location.search);
      const newCategory = newParams.get('category');
      setFilter(newCategory && categories.includes(newCategory) ? newCategory : 'All');
    };

    window.addEventListener('categoryChange', handleCategoryChange);
    return () => window.removeEventListener('categoryChange', handleCategoryChange);
  }, []);

  const filteredProducts = useMemo(() => {
    if (filter === 'All') return products;
    return products.filter((item) => item.tag === filter);
  }, [filter, products]);

  return (
    <main>
      <section className="shopHeader">
        <span>Curated Collection</span>
        <h2>Our Collection</h2>
        <p>Every piece is unique and handmade with love.</p>
      </section>

      <section className="filterBar" aria-label="Product filters">
        {categories.map((category) => (
          <button key={category} className={`filterBtn ${filter === category ? 'active' : ''}`} onClick={() => setFilter(category)}>
            {category === 'All' ? 'All' : `${category}s`}
          </button>
        ))}
      </section>

      <section className="shopGrid">
        {loading && (
          // Show skeleton cards while loading
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))
        )}
        {error && <p className="errorMessage">Error loading products: {error}</p>}
        {!loading && !error && (
          filteredProducts.length ? filteredProducts.map((product) => (
            <ProductCard key={product.uid} product={product} onAddToCart={onAddToCart} />
          )) : <p className="emptyProducts">No products found in {filter} category.</p>
        )}
      </section>
      <Footer onNavigate={onNavigate} />
    </main>
  );
}
