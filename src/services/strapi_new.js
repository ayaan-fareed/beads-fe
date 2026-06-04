const API_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

class StrapiAPI {
  constructor() {
    this.baseURL = API_URL;
    this.token = API_TOKEN;
  }

  getHeaders(useToken = true) {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (this.token && useToken) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getHeaders(true),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Strapi API Error:', error);
      throw error;
    }
  }

  async requestWithoutToken(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getHeaders(false), // No token
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Strapi API Error (no token):', error);
      throw error;
    }
  }

  async getProducts() {
    try {
      console.log('🔍 Testing Strapi API connection...');
      
      // First test basic connectivity
      const testResponse = await this.testConnection();
      if (!testResponse.success) {
        console.warn('⚠️ Strapi API connection failed:', testResponse.error);
        return [];
      }

      // Use the Article collection type endpoint - first without token, then with token
      let response;
      try {
        console.log('📰 Trying /api/articles without token');
        response = await this.requestWithoutToken('/api/articles');
        console.log('✅ Articles endpoint (no token) successful:', response);
      } catch (error) {
        console.log('❌ /api/articles without token failed, trying with token');
        try {
          response = await this.request('/api/articles?populate=*');
          console.log('✅ Articles endpoint (with token) successful:', response);
        } catch (error2) {
          console.log('❌ All article endpoints failed');
          console.log('💡 Common solutions:');
          console.log('   1. Check if Article content-type is published in Strapi admin');
          console.log('   2. Check API permissions in Settings > Roles > Public');
          console.log('   3. Verify the API token has Article permissions');
          return [];
        }
      }
      
      const articles = response.data || response || [];
      console.log(`📊 Found ${articles.length} articles`);
      return articles;
    } catch (error) {
      console.error('🚨 Critical error fetching products:', error);
      return [];
    }
  }

  async testConnection() {
    try {
      const response = await fetch(`${this.baseURL}/admin`, {
        method: 'HEAD',
        mode: 'cors'
      });
      return { success: response.ok, status: response.status };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getProduct(id) {
    try {
      const response = await this.request(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }
}

export const strapiAPI = new StrapiAPI();
