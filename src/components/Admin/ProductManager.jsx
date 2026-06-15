import React, { useState, useEffect } from 'react';
import { firebaseAPI } from '../../services/firebase.js';
import ProductForm from './ProductForm.jsx';
import ProductCard from './ProductCard.jsx';
import './ProductManager.css';

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Necklace', 'Earrings', 'Ring', 'Bracelet'];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const firebaseProducts = await firebaseAPI.getProducts();
      
      const transformedProducts = firebaseProducts.map(product => ({
        id: product.id,
        name: product.name || product.title || 'Unknown Product',
        category: product.category || product.tag || 'Product',
        description: product.description || product.desc || 'No description available',
        price: product.price || 0,
        icon: product.icon || '📿',
        badge: product.badge || '',
        image: product.image || product.imageUrl || null
      }));
      
      setProducts(transformedProducts);
      setError('');
    } catch (err) {
      setError('Failed to load products: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }

    try {
      const result = await firebaseAPI.deleteProduct(productId);
      if (result.success) {
        setProducts(products.filter(p => p.id !== productId));
      } else {
        setError('Failed to delete product: ' + result.error);
      }
    } catch (err) {
      setError('Failed to delete product: ' + err.message);
    }
  };

  const handleFormSubmit = async (productData) => {
    try {
      let result;
      
      if (editingProduct) {
        result = await firebaseAPI.updateProduct(editingProduct.id, productData);
      } else {
        result = await firebaseAPI.addProduct(productData);
      }

      if (result.success) {
        setShowForm(false);
        setEditingProduct(null);
        loadProducts(); // Reload products to get latest data
      } else {
        setError('Failed to save product: ' + result.error);
      }
    } catch (err) {
      setError('Failed to save product: ' + err.message);
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  if (showForm) {
    return (
      <ProductForm
        product={editingProduct}
        onSubmit={handleFormSubmit}
        onCancel={handleFormCancel}
      />
    );
  }

  // Calculate statistics for summary cards
  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.badge !== 'SOLD OUT').length;
  const uniqueCategories = [...new Set(products.map(p => p.category))].length;

  return (
    <div className="productManager">
      <div className="managerHeader">
        <h1>Product Management</h1>
        <button className="addProductBtn" onClick={handleAddProduct}>
          ➕ Add New Product
        </button>
      </div>

      {/* Summary Cards */}
      <div className="summaryCards">
        <div className="summaryCard">
          <div className="cardIcon">📦</div>
          <div className="cardContent">
            <h3>Total Products</h3>
            <p className="cardValue">{totalProducts}</p>
          </div>
        </div>
        <div className="summaryCard">
          <div className="cardIcon">✅</div>
          <div className="cardContent">
            <h3>Active Products</h3>
            <p className="cardValue">{activeProducts}</p>
          </div>
        </div>
        <div className="summaryCard">
          <div className="cardIcon">🏷️</div>
          <div className="cardContent">
            <h3>Categories</h3>
            <p className="cardValue">{uniqueCategories}</p>
          </div>
        </div>
      </div>

      {error && <div className="errorMessage">{error}</div>}

      <div className="filtersSection">
        <div className="searchFilter">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchInput"
          />
        </div>
        
        <div className="categoryFilter">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="categorySelect"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'All' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="productsStats">
        <span className="stat">Total: {products.length} products</span>
        <span className="stat">Showing: {filteredProducts.length} products</span>
      </div>

      {loading ? (
        <div className="loadingState">
          <div className="loadingSpinner"></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <>
          <div className="productsTable">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEdit={() => handleEditProduct(product)}
                  onDelete={() => handleDeleteProduct(product.id)}
                />
              ))
            ) : (
              <div className="emptyState">
                <p>No products found</p>
                <button className="addProductBtn" onClick={handleAddProduct}>
                  Add your first product
                </button>
              </div>
            )}
          </div>
          
          {/* Floating Action Button for Mobile */}
          <button className="floatingAddBtn" onClick={handleAddProduct}>
            +
          </button>
        </>
      )}
    </div>
  );
}
