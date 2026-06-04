import { useState, useEffect } from 'react';
import { strapiAPI } from '../../services/strapi.js';
import './APIStatus.css';

export default function APIStatus() {
  const [status, setStatus] = useState('checking');
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function checkAPI() {
      try {
        setStatus('checking');
        
        // Test basic connection
        const connectionTest = await strapiAPI.testConnection();
        
        if (!connectionTest.success) {
          setStatus('offline');
          setDetails({ error: 'Cannot connect to Strapi server' });
          return;
        }

        // Test products endpoint
        const products = await strapiAPI.getProducts();
        
        if (products.length === 0) {
          setStatus('no-data');
          setDetails({ 
            message: 'Strapi Cloud is connected but no articles accessible',
            suggestions: [
              'Go to your Strapi Cloud admin panel',
              'Navigate to Settings > Roles > Public',
              'Enable Article permissions (find and findOne actions)',
              'Make sure articles are published',
              'Check if API token has correct permissions for Strapi Cloud'
            ]
          });
        } else {
          setStatus('connected');
          setDetails({ productCount: products.length, dataType: 'articles' });
        }
      } catch (error) {
        setStatus('error');
        setDetails({ error: error.message });
      }
    }

    checkAPI();
  }, []);

  const getStatusIcon = () => {
    switch (status) {
      case 'checking': return '🔄';
      case 'connected': return '✅';
      case 'no-data': return '⚠️';
      case 'offline': return '❌';
      case 'error': return '🚨';
      default: return '❓';
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'checking': return 'Checking API connection...';
      case 'connected': return `Connected! Found ${details.productCount} ${details.dataType || 'articles'}`;
      case 'no-data': return 'Strapi Cloud connected but no articles accessible';
      case 'offline': return 'Cannot connect to Strapi';
      case 'error': return 'API Error';
      default: return 'Unknown status';
    }
  };

  return (
    <div className="api-status">
      <div className="api-status-header">
        <span className="status-icon">{getStatusIcon()}</span>
        <span className="status-message">{getStatusMessage()}</span>
      </div>
      
      {status === 'no-data' && details.suggestions && (
        <div className="api-suggestions">
          <h4>Suggestions:</h4>
          <ul>
            {details.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
      
      {details.error && (
        <div className="api-error">
          <strong>Error:</strong> {details.error}
        </div>
      )}
    </div>
  );
}
