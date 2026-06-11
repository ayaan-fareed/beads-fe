import { useState, useEffect } from 'react';
import { firebaseAPI } from '../../services/firebase.js';
import './APIStatus.css';

export default function APIStatus() {
  const [status, setStatus] = useState('checking');
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function checkAPI() {
      try {
        setStatus('checking');
        
        // Test basic connection
        const connectionTest = await firebaseAPI.testConnection();
        
        if (!connectionTest.success) {
          setStatus('offline');
          setDetails({ error: 'Cannot connect to Firebase' });
          return;
        }

        // Test products endpoint
        const products = await firebaseAPI.getProducts();
        
        if (products.length === 0) {
          setStatus('no-data');
          setDetails({ 
            message: 'Firebase is connected but no products accessible',
            suggestions: [
              'Go to your Firebase Console',
              'Navigate to Firestore Database',
              'Create a "products" collection',
              'Add sample product documents',
              'Check Firestore rules allow read access'
            ]
          });
        } else {
          setStatus('connected');
          setDetails({ productCount: products.length, dataType: 'products' });
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
      case 'connected': return `Connected! Found ${details.productCount} ${details.dataType || 'products'}`;
      case 'no-data': return 'Firebase connected but no products accessible';
      case 'offline': return 'Cannot connect to Firebase';
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
