import React, { useState, useEffect } from 'react';
import './SettingsPanel.css';

export default function SettingsPanel() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Stainless Sparkle',
    siteEmail: 'contact@elegantbeads.com',
    sitePhone: '+92 308 916 8530',
    siteAddress: 'Karachi, Pakistan',
    currency: 'PKR',
    taxRate: 0,
    shippingFee: 0,
    socialLinks: {
      facebook: '',
      instagram: '@stainless_sparkle01',
      twitter: ''
    }
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('adminSettings');
    if (savedSettings) {
      setSiteSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Validate inputs
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage('All fields are required');
      setMessageType('error');
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setMessage('New password must be at least 6 characters long');
      setMessageType('error');
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('New password and confirm password do not match');
      setMessageType('error');
      setLoading(false);
      return;
    }

    // Check current password (in production, this would be server-side)
    const storedPassword = localStorage.getItem('adminPassword') || 'admin123';
    
    if (currentPassword !== storedPassword) {
      setMessage('Current password is incorrect');
      setMessageType('error');
      setLoading(false);
      return;
    }

    // Update password
    try {
      localStorage.setItem('adminPassword', newPassword);
      setMessage('Password changed successfully!');
      setMessageType('success');
      
      // Clear form
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to change password. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleSettingsUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      localStorage.setItem('adminSettings', JSON.stringify(siteSettings));
      setMessage('Settings updated successfully!');
      setMessageType('success');
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to update settings. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleSettingChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setSiteSettings(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setSiteSettings(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  return (
    <div className="settingsPanel">
      <div className="settingsHeader">
        <h1>Settings</h1>
        <p>Manage your admin panel and site settings</p>
      </div>

      {message && (
        <div className={`message ${messageType}`}>
          {message}
        </div>
      )}

      <div className="settingsGrid">
        <div className="settingsCard">
          <h2>🔐 Security Settings</h2>
          <form onSubmit={handlePasswordChange} className="settingsForm">
            <div className="formGroup">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                disabled={loading}
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password (min 6 characters)"
                disabled={loading}
                required
                minLength={6}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                disabled={loading}
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="updateBtn" disabled={loading}>
              {loading ? 'Updating...' : 'Change Password'}
            </button>
          </form>
        </div>

        <div className="settingsCard">
          <h2>🌐 Site Settings</h2>
          <form onSubmit={handleSettingsUpdate} className="settingsForm">
            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="siteName">Site Name</label>
                <input
                  type="text"
                  id="siteName"
                  value={siteSettings.siteName}
                  onChange={(e) => handleSettingChange('siteName', e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="siteEmail">Site Email</label>
                <input
                  type="email"
                  id="siteEmail"
                  value={siteSettings.siteEmail}
                  onChange={(e) => handleSettingChange('siteEmail', e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="sitePhone">Site Phone</label>
                <input
                  type="tel"
                  id="sitePhone"
                  value={siteSettings.sitePhone}
                  onChange={(e) => handleSettingChange('sitePhone', e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="formGroup">
                <label htmlFor="siteAddress">Site Address</label>
                <input
                  type="text"
                  id="siteAddress"
                  value={siteSettings.siteAddress}
                  onChange={(e) => handleSettingChange('siteAddress', e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="currency">Currency</label>
                <select
                  id="currency"
                  value={siteSettings.currency}
                  onChange={(e) => handleSettingChange('currency', e.target.value)}
                  disabled={loading}
                >
                  <option value="PKR">Pakistani Rupee (PKR)</option>
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="GBP">British Pound (GBP)</option>
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="taxRate">Tax Rate (%)</label>
                <input
                  type="number"
                  id="taxRate"
                  value={siteSettings.taxRate}
                  onChange={(e) => handleSettingChange('taxRate', parseFloat(e.target.value) || 0)}
                  disabled={loading}
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="shippingFee">Shipping Fee</label>
              <input
                type="number"
                id="shippingFee"
                value={siteSettings.shippingFee}
                onChange={(e) => handleSettingChange('shippingFee', parseFloat(e.target.value) || 0)}
                disabled={loading}
                min="0"
                step="0.01"
              />
            </div>

            <button type="submit" className="updateBtn" disabled={loading}>
              {loading ? 'Updating...' : 'Update Site Settings'}
            </button>
          </form>
        </div>

        <div className="settingsCard">
          <h2>📱 Social Media Links</h2>
          <form onSubmit={handleSettingsUpdate} className="settingsForm">
            <div className="formGroup">
              <label htmlFor="facebook">Facebook</label>
              <input
                type="url"
                id="facebook"
                value={siteSettings.socialLinks.facebook}
                onChange={(e) => handleSettingChange('socialLinks.facebook', e.target.value)}
                placeholder="https://facebook.com/yourpage"
                disabled={loading}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="instagram">Instagram</label>
              <input
                type="text"
                id="instagram"
                value={siteSettings.socialLinks.instagram}
                onChange={(e) => handleSettingChange('socialLinks.instagram', e.target.value)}
                placeholder="@yourusername"
                disabled={loading}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="twitter">Twitter</label>
              <input
                type="url"
                id="twitter"
                value={siteSettings.socialLinks.twitter}
                onChange={(e) => handleSettingChange('socialLinks.twitter', e.target.value)}
                placeholder="https://twitter.com/yourhandle"
                disabled={loading}
              />
            </div>

            <button type="submit" className="updateBtn" disabled={loading}>
              {loading ? 'Updating...' : 'Update Social Links'}
            </button>
          </form>
        </div>

        <div className="settingsCard">
          <h2>🗃️ Data Management</h2>
          <div className="dataActions">
            <div className="actionItem">
              <h3>Export Data</h3>
              <p>Download your products, orders, and customer data</p>
              <button className="exportBtn" onClick={() => {
                // Export functionality
                const data = {
                  products: JSON.parse(localStorage.getItem('products') || '[]'),
                  settings: siteSettings,
                  exportDate: new Date().toISOString()
                };
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `elegant-beads-data-${new Date().toISOString().split('T')[0]}.json`;
                a.click();
                URL.revokeObjectURL(url);
              }}>
                📥 Export All Data
              </button>
            </div>

            <div className="actionItem">
              <h3>Clear Cache</h3>
              <p>Clear temporary data and refresh the application</p>
              <button className="clearBtn" onClick={() => {
                if (confirm('Are you sure you want to clear the cache? This will remove temporary data only.')) {
                  localStorage.removeItem('adminAuth');
                  localStorage.removeItem('adminToken');
                  window.location.reload();
                }
              }}>
                🗑️ Clear Cache
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
