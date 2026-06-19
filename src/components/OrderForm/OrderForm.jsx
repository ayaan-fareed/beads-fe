import React, { useState } from 'react';
import { firebaseAPI } from '../../services/firebase.js';
import './OrderForm.css';

export default function OrderForm({ cart, total, isOpen, onClose, onOrderSuccess }) {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    deliveryAddress: '',
    customerCity: '',
    paymentMethod: 'cod',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate form
    if (!formData.customerName.trim() || !formData.customerPhone.trim() || !formData.deliveryAddress.trim() || !formData.customerCity.trim()) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      // Create order data
      const orderData = {
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerEmail: formData.customerEmail,
        deliveryAddress: formData.deliveryAddress,
        customerCity: formData.customerCity,
        paymentMethod: formData.paymentMethod,
        notes: formData.notes,
        items: cart.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity || 1,
          icon: item.icon
        })),
        totalAmount: total,
        orderDate: new Date().toISOString().split('T')[0]
      };

      // Save to Firebase
      const result = await firebaseAPI.createOrder(orderData);
      
      if (result.success) {
        onOrderSuccess();
        onClose();
      } else {
        setError('Failed to place order. Please try again.');
      }
    } catch (err) {
      setError('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="orderFormOverlay">
      <div className="orderFormContainer">
        <div className="orderFormHeader">
          <h2>Complete Your Order</h2>
          <button className="closeBtn" onClick={onClose}>✕</button>
        </div>

        <div className="orderSummary">
          <h3>Order Summary</h3>
          <div className="summaryItems">
            {cart.map((item) => (
              <div key={item.uid} className="summaryItem">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="itemImage" />
                ) : (
                  <div className="itemImagePlaceholder" />
                )}
                <span className="itemName">{item.name} × {item.quantity || 1}</span>
                <span className="itemPrice">Rs. {(item.price * (item.quantity || 1)).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="summaryTotal">
            <strong>Total: Rs. {total.toLocaleString()}</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="orderForm">
          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="customerName">Name *</label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="customerPhone">Phone *</label>
              <input
                type="tel"
                id="customerPhone"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="customerEmail">Email</label>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="customerCity">City *</label>
              <input
                type="text"
                id="customerCity"
                name="customerCity"
                value={formData.customerCity}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>
          </div>

          <div className="formGroup">
            <label htmlFor="deliveryAddress">Address *</label>
            <textarea
              id="deliveryAddress"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              required
              disabled={loading}
              rows={2}
            />
          </div>

          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="cod">Cash on Delivery</option>
                <option value="bank">Bank Transfer</option>
                <option value="easy Paisa">EasyPaisa</option>
                <option value="jazzCash">JazzCash</option>
              </select>
            </div>

            <div className="formGroup">
              <label htmlFor="notes">Order Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                disabled={loading}
                rows={1}
              />
            </div>
          </div>

          {error && <div className="errorMessage">{error}</div>}

          <div className="formActions">
            <button type="button" className="cancelBtn" onClick={onClose} disabled={loading}>
              Cancel
            </button>
            <button type="submit" className="submitBtn" disabled={loading}>
              {loading ? 'Placing Order...' : 'Place Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
