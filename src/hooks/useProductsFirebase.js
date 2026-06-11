import { useState, useEffect } from 'react';
import { firebaseAPI } from '../services/firebase.js';
import { products as mockProducts } from '../data/products.js';

// Map Firebase category names to frontend category names
function mapCategory(category) {
  const categoryMap = {
    'Necklaces': 'Necklace',
    'Earrings': 'Earrings',
    'Rings': 'Ring',
    'Bracelets': 'Bracelet',
    'necklaces': 'Necklace',
    'earrings': 'Earrings',
    'rings': 'Ring', 
    'bracelets': 'Bracelet'
  };
  
  return categoryMap[category] || category || 'Product';
}

export function useProductsFirebase() {
  const [products, setProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        
        // Test Firebase connection first
        const testResult = await firebaseAPI.testConnection();
        if (!testResult.success) {
          console.warn('⚠️ Firebase connection failed:', testResult.error);
          setProducts(mockProducts);
          setUsingMockData(true);
          setError(null);
          return;
        }

        // Fetch products from Firebase
        const firebaseProducts = await firebaseAPI.getProducts();
        
        if (firebaseProducts.length === 0) {
          console.log('No products found in Firebase, using mock data');
          setProducts(mockProducts);
          setUsingMockData(true);
          setError(null);
        } else {
          // Transform Firebase products to match existing product structure
          const transformedProducts = firebaseProducts.map(product => {
            return {
              id: product.id,
              name: product.name || product.title || 'Unknown Product',
              tag: mapCategory(product.category || product.tag || 'Product'),
              desc: product.description || product.desc || 'No description available',
              price: product.price || Math.floor(Math.random() * 1000) + 300,
              icon: product.icon || '📿',
              badge: product.badge || '',
              image: product.image || product.imageUrl || null
            };
          });
          
          setProducts(transformedProducts);
          setUsingMockData(false);
          setError(null);
          console.log(`✅ Successfully loaded ${transformedProducts.length} products from Firebase`);
        }
      } catch (err) {
        console.log('Firebase Error, falling back to mock data:', err.message);
        setProducts(mockProducts);
        setUsingMockData(true);
        setError(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const refetch = async () => {
    setLoading(true);
    try {
      const firebaseProducts = await firebaseAPI.getProducts();
      if (firebaseProducts.length > 0) {
        const transformedProducts = firebaseProducts.map(product => ({
          id: product.id,
          name: product.name || product.title || 'Unknown Product',
          tag: mapCategory(product.category || product.tag || 'Product'),
          desc: product.description || product.desc || 'No description available',
          price: product.price || Math.floor(Math.random() * 1000) + 300,
          icon: product.icon || '📿',
          badge: product.badge || '',
          image: product.image || product.imageUrl || null
        }));
        setProducts(transformedProducts);
        setUsingMockData(false);
      }
    } catch (err) {
      console.error('Refetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, usingMockData, refetch };
}
