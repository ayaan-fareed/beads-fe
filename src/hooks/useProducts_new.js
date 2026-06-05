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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingMockData, setUsingMockData] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setUsingMockData(false);
        
        const strapiProducts = await strapiAPI.getProducts();
        
        if (strapiProducts.length === 0) {
          console.log('No products found in Strapi, falling back to mock data');
          setProducts(mockProducts);
          setUsingMockData(true);
          setError(null);
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
          
          setProducts(transformedProducts);
          setUsingMockData(false);
          setError(null);
        }
      } catch (err) {
        console.log('API Error, falling back to mock data:', err.message);
        setProducts(mockProducts);
        setUsingMockData(true);
        setError(null); // Don't show error to user, just use mock data
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error, usingMockData, refetch: () => fetchProducts() };
}
