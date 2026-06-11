import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbdkwLwUk60oZ1IDO4acsawLQ7eoTfFNQ",
  authDomain: "stainless-sparkle.firebaseapp.com",
  projectId: "stainless-sparkle",
  storageBucket: "stainless-sparkle.firebasestorage.app",
  messagingSenderId: "148591472230",
  appId: "1:148591472230:web:cd08f4d4216886f85807a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class FirebaseAPI {
  constructor() {
    this.db = db;
  }

  async testConnection() {
    try {
      // Try to access the products collection
      const productsRef = collection(this.db, 'products');
      const snapshot = await getDocs(productsRef);
      return { success: true, count: snapshot.size };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getProducts() {
    try {
      console.log('🔍 Fetching products from Firebase...');
      
      const productsRef = collection(this.db, 'products');
      const snapshot = await getDocs(productsRef);
      
      if (snapshot.empty) {
        console.log('No products found in Firebase collection');
        return [];
      }
      
      const products = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        products.push({
          id: doc.id,
          ...data
        });
      });
      
      console.log(`📊 Found ${products.length} products in Firebase`);
      return products;
    } catch (error) {
      console.error('🚨 Error fetching products from Firebase:', error);
      throw error;
    }
  }

  async getProduct(id) {
    try {
      const productRef = doc(this.db, 'products', id);
      const productDoc = await getDoc(productRef);
      
      if (productDoc.exists()) {
        return {
          id: productDoc.id,
          ...productDoc.data()
        };
      } else {
        console.log('No product found with ID:', id);
        return null;
      }
    } catch (error) {
      console.error('Error fetching product from Firebase:', error);
      return null;
    }
  }

  // Transform Firebase data to match existing product structure
  transformProduct(product) {
    return {
      id: product.id,
      name: product.name || product.title || 'Unknown Product',
      tag: product.category || product.tag || 'Product',
      desc: product.description || product.desc || 'No description available',
      price: product.price || Math.floor(Math.random() * 1000) + 300,
      icon: product.icon || '📿',
      badge: product.badge || '',
      image: product.image || product.imageUrl || null
    };
  }

  async getTransformedProducts() {
    try {
      const products = await this.getProducts();
      return products.map(product => this.transformProduct(product));
    } catch (error) {
      console.error('Error getting transformed products:', error);
      return [];
    }
  }

  // Admin operations
  async addProduct(productData) {
    try {
      console.log('📝 Adding new product to Firebase...');
      
      const productsRef = collection(this.db, 'products');
      const docRef = await addDoc(productsRef, {
        name: productData.name,
        category: productData.category,
        description: productData.description,
        price: Number(productData.price),
        icon: productData.icon || '📿',
        badge: productData.badge || '',
        image: productData.image || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      
      console.log(`✅ Product added with ID: ${docRef.id}`);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('🚨 Error adding product:', error);
      return { success: false, error: error.message };
    }
  }

  async updateProduct(id, productData) {
    try {
      console.log(`📝 Updating product ${id} in Firebase...`);
      
      const productRef = doc(this.db, 'products', id);
      await updateDoc(productRef, {
        name: productData.name,
        category: productData.category,
        description: productData.description,
        price: Number(productData.price),
        icon: productData.icon || '📿',
        badge: productData.badge || '',
        image: productData.image || null,
        updatedAt: new Date().toISOString()
      });
      
      console.log(`✅ Product ${id} updated successfully`);
      return { success: true };
    } catch (error) {
      console.error('🚨 Error updating product:', error);
      return { success: false, error: error.message };
    }
  }

  async deleteProduct(id) {
    try {
      console.log(`🗑️ Deleting product ${id} from Firebase...`);
      
      const productRef = doc(this.db, 'products', id);
      await deleteDoc(productRef);
      
      console.log(`✅ Product ${id} deleted successfully`);
      return { success: true };
    } catch (error) {
      console.error('🚨 Error deleting product:', error);
      return { success: false, error: error.message };
    }
  }

  async setProduct(id, productData) {
    try {
      console.log(`📝 Setting product ${id} in Firebase...`);
      
      const productRef = doc(this.db, 'products', id);
      await setDoc(productRef, {
        name: productData.name,
        category: productData.category,
        description: productData.description,
        price: Number(productData.price),
        icon: productData.icon || '📿',
        badge: productData.badge || '',
        image: productData.image || null,
        createdAt: productData.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      
      console.log(`✅ Product ${id} set successfully`);
      return { success: true };
    } catch (error) {
      console.error('🚨 Error setting product:', error);
      return { success: false, error: error.message };
    }
  }

  // Order Management Operations
  async createOrder(orderData) {
    try {
      console.log('🛍️ Creating new order in Firebase...');
      
      const ordersRef = collection(this.db, 'orders');
      const docRef = await addDoc(ordersRef, {
        ...orderData,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      
      console.log(`✅ Order created with ID: ${docRef.id}`);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('🚨 Error creating order:', error);
      return { success: false, error: error.message };
    }
  }

  async getOrders() {
    try {
      console.log('🔍 Fetching orders from Firebase...');
      
      const ordersRef = collection(this.db, 'orders');
      const snapshot = await getDocs(ordersRef);
      
      if (snapshot.empty) {
        console.log('No orders found in Firebase collection');
        return [];
      }
      
      const orders = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        orders.push({
          id: doc.id,
          ...data
        });
      });
      
      // Sort by creation date (newest first)
      orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
      console.log(`📊 Found ${orders.length} orders in Firebase`);
      return orders;
    } catch (error) {
      console.error('🚨 Error fetching orders from Firebase:', error);
      throw error;
    }
  }

  async updateOrderStatus(orderId, newStatus) {
    try {
      console.log(`📝 Updating order ${orderId} status to ${newStatus}...`);
      
      const orderRef = doc(this.db, 'orders', orderId);
      await updateDoc(orderRef, {
        status: newStatus,
        updatedAt: new Date().toISOString()
      });
      
      console.log(`✅ Order ${orderId} status updated successfully`);
      return { success: true };
    } catch (error) {
      console.error('🚨 Error updating order status:', error);
      return { success: false, error: error.message };
    }
  }

  async deleteOrder(orderId) {
    try {
      console.log(`🗑️ Deleting order ${orderId} from Firebase...`);
      
      const orderRef = doc(this.db, 'orders', orderId);
      await deleteDoc(orderRef);
      
      console.log(`✅ Order ${orderId} deleted successfully`);
      return { success: true };
    } catch (error) {
      console.error('🚨 Error deleting order:', error);
      return { success: false, error: error.message };
    }
  }

  // Analytics Operations
  async getAnalyticsData() {
    try {
      console.log('📊 Fetching analytics data from Firebase...');
      
      const [products, orders] = await Promise.all([
        this.getProducts(),
        this.getOrders()
      ]);

      // Calculate analytics
      const totalRevenue = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);
      const totalOrders = orders.length;
      const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

      // Calculate monthly sales data
      const monthlyData = this.calculateMonthlySales(orders);
      
      // Calculate top products
      const topProducts = this.calculateTopProducts(orders, products);
      
      // Calculate category stats
      const categoryStats = this.calculateCategoryStats(products, orders);

      return {
        totalRevenue,
        totalOrders,
        avgOrderValue,
        monthlyData,
        topProducts,
        categoryStats,
        recentOrders: orders.slice(0, 10)
      };
    } catch (error) {
      console.error('🚨 Error fetching analytics data:', error);
      throw error;
    }
  }

  calculateMonthlySales(orders) {
    const monthlyData = {};
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Initialize all months with 0
    months.forEach(month => {
      monthlyData[month] = { sales: 0, orders: 0 };
    });

    orders.forEach(order => {
      const date = new Date(order.createdAt);
      const month = months[date.getMonth()];
      if (monthlyData[month]) {
        monthlyData[month].sales += order.totalAmount || 0;
        monthlyData[month].orders += 1;
      }
    });

    return Object.entries(monthlyData).map(([month, data]) => ({
      month,
      sales: data.sales,
      orders: data.orders
    }));
  }

  calculateTopProducts(orders, products) {
    const productSales = {};
    
    orders.forEach(order => {
      if (order.items) {
        order.items.forEach(item => {
          if (!productSales[item.name]) {
            productSales[item.name] = { sales: 0, revenue: 0 };
          }
          productSales[item.name].sales += item.quantity || 1;
          productSales[item.name].revenue += (item.price || 0) * (item.quantity || 1);
        });
      }
    });

    return Object.entries(productSales)
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5);
  }

  calculateCategoryStats(products, orders) {
    const categoryStats = {};
    
    products.forEach(product => {
      const category = product.category || 'Other';
      if (!categoryStats[category]) {
        categoryStats[category] = { sales: 0, revenue: 0 };
      }
    });

    orders.forEach(order => {
      if (order.items) {
        order.items.forEach(item => {
          const product = products.find(p => p.name === item.name);
          if (product) {
            const category = product.category || 'Other';
            if (categoryStats[category]) {
              categoryStats[category].sales += item.quantity || 1;
              categoryStats[category].revenue += (item.price || 0) * (item.quantity || 1);
            }
          }
        });
      }
    });

    const totalSales = Object.values(categoryStats).reduce((sum, cat) => sum + cat.sales, 0);
    
    return Object.entries(categoryStats).map(([category, data]) => ({
      category,
      sales: data.sales,
      revenue: data.revenue,
      percentage: totalSales > 0 ? Math.round((data.sales / totalSales) * 100) : 0
    }));
  }
}

export const firebaseAPI = new FirebaseAPI();
export { db };
