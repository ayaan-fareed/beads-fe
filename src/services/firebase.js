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
}

export const firebaseAPI = new FirebaseAPI();
export { db };
