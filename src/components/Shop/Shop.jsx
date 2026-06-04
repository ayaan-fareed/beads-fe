import { useMemo, useState } from 'react';
import { categories } from '../../data/products.js';
import Footer from '../Footer/Footer.jsx';
import ProductCard from '../ProductCard/ProductCard.jsx';
import APIStatus from '../APIStatus/APIStatus.jsx';
import './Shop.css';

export default function Shop({ onAddToCart, products, loading, error }) {
  const [filter, setFilter] = useState('All');
  const filteredProducts = useMemo(() => filter === 'All' ? products : products.filter((item) => item.tag === filter), [filter, products]);

  return (
    <main>
      <section className="shopHeader">
        <span>Curated Collection</span>
        <h2>Our Collection</h2>
        <p>Every piece is unique and handmade with love.</p>
      </section>

      <APIStatus />

      <section className="filterBar" aria-label="Product filters">
        {categories.map((category) => (
          <button key={category} className={`filterBtn ${filter === category ? 'active' : ''}`} onClick={() => setFilter(category)}>
            {category === 'All' ? 'All' : `${category}s`}
          </button>
        ))}
      </section>

      <section className="shopGrid">
        {loading && <p className="loadingMessage">Loading products...</p>}
        {error && <p className="errorMessage">Error loading products: {error}</p>}
        {!loading && !error && (
          filteredProducts.length ? filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          )) : <p className="emptyProducts">No products found.</p>
        )}
      </section>
      <Footer />
    </main>
  );
}
