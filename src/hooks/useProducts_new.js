import { useState, useEffect } from 'react';
import { strapiAPI } from '../services/strapi.js';
import { products as mockProducts } from '../data/products.js';

// Map API category names to frontend category names
function mapCategory(category) {
  const categoryMap = {
    'Necklaces': 'Necklace',
    'Earrings': 'Earrings', // Keep plural for Earrings since categories array uses 'Earrings'
    'Rings': 'Ring',
    'Bracelets': 'Bracelet',
    'necklaces': 'Necklace',
    'earrings': 'Earrings', // Keep plural for Earrings
    'rings': 'Ring', 
    'bracelets': 'Bracelet'
  };
  
  return categoryMap[category] || category || 'Product';
}

export function useProducts() {
  const [products, setProducts] = useState(mockProducts); // Start with mock data immediately
  const [loading, setLoading] = useState(false); // Not loading since we have mock data
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Try to fetch from API in background without blocking UI
        const strapiProducts = await strapiAPI.getProducts();
        
        if (strapiProducts.length === 0) {
          console.log('No products found in Strapi, using mock data');
          // Keep using mock data, no need to update state
        } else {
          // Transform Strapi products to match existing product structure
          const transformedProducts = strapiProducts.map(product => {
            // Handle image from Strapi Cloud response
            let imageUrl = null;
            if (product.image && product.image.length > 0) {
              imageUrl = product.image[0].url || product.image[0].formats?.medium?.url || product.image[0].formats?.small?.url;
            } else if (product.attributes?.image && product.attributes.image.data && product.attributes.image.data.length > 0) {
              const imageData = product.attributes.image.data[0].attributes;
              imageUrl = imageData.url || imageData.formats?.medium?.url || imageData.formats?.small?.url;
            }

            return {
              id: product.id,
              name: product.name || product.attributes?.name || product.title || product.attributes?.title || 'Unknown Product',
              tag: mapCategory(product.category || product.attributes?.category || product.tag || product.attributes?.tag || 'Product'),
              desc: product.description || product.attributes?.description || product.desc || product.attributes?.desc || 'No description available',
              price: product.price || product.attributes?.price || Math.floor(Math.random() * 1000) + 300, // Random price if not specified
              icon: product.icon || product.attributes?.icon || '📿', // Default product icon
              badge: product.badge || product.attributes?.badge || '',
              image: imageUrl // Add image URL from Strapi Cloud
            };
          });
          
          // Update with real data if available
          setProducts(transformedProducts);
          setUsingMockData(false);
          setError(null);
        }
      } catch (err) {
        console.log('API Error, continuing with mock data:', err.message);
        // Keep using mock data, no need to update state
        setError(null); // Don't show error to user
      }
    }

    // Start API call after component mounts, but don't block UI
    const timeoutId = setTimeout(fetchProducts, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return { products, loading, error, usingMockData, refetch: () => fetchProducts() };
}
