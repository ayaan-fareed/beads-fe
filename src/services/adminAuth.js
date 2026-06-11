// Simple authentication service for admin dashboard
const ADMIN_PASSWORD = 'admin123'; // In production, this should be stored securely

class AdminAuthService {
  constructor() {
    this.isAuthenticated = false;
    this.authToken = null;
  }

  // Check if user is authenticated
  isLoggedIn() {
    return this.isAuthenticated || localStorage.getItem('adminAuth') === 'true';
  }

  // Authenticate with password
  login(password) {
    console.log('AdminAuthService: Login attempt');
    console.log('AdminAuthService: Input password:', password);
    console.log('AdminAuthService: Expected password:', ADMIN_PASSWORD);
    console.log('AdminAuthService: Password match:', password === ADMIN_PASSWORD);
    
    if (password === ADMIN_PASSWORD) {
      this.isAuthenticated = true;
      this.authToken = Date.now().toString(); // Simple token
      localStorage.setItem('adminAuth', 'true');
      localStorage.setItem('adminToken', this.authToken);
      console.log('AdminAuthService: Login successful, token stored');
      return { success: true, message: 'Login successful' };
    }
    console.log('AdminAuthService: Login failed - invalid password');
    return { success: false, message: 'Invalid password' };
  }

  // Logout user
  logout() {
    this.isAuthenticated = false;
    this.authToken = null;
    localStorage.removeItem('adminAuth');
    localStorage.removeItem('adminToken');
    return { success: true, message: 'Logged out successfully' };
  }

  // Validate session
  validateSession() {
    const storedAuth = localStorage.getItem('adminAuth');
    const storedToken = localStorage.getItem('adminToken');
    
    if (storedAuth === 'true' && storedToken) {
      this.isAuthenticated = true;
      this.authToken = storedToken;
      return true;
    }
    return false;
  }
}

export const adminAuth = new AdminAuthService();
