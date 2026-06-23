import React, { useState, useEffect } from 'react';
import { firebaseAPI } from '../../services/firebase.js';
import './OrderManager.css';

const statusOptions = ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'];

export default function OrderManager() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      setLoading(true);
      setError('');
      const firebaseOrders = await firebaseAPI.getOrders();
      setOrders(firebaseOrders);
    } catch (err) {
      setError('Failed to load orders: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customerPhone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const result = await firebaseAPI.updateOrderStatus(orderId, newStatus);
      if (result.success) {
        setOrders(prevOrders => 
          prevOrders.map(order => 
            order.id === orderId ? { ...order, status: newStatus } : order
          )
        );
      } else {
        setError('Failed to update order status: ' + result.error);
      }
    } catch (err) {
      setError('Failed to update order status: ' + err.message);
    }
  };

  const deleteOrder = async (orderId) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        const result = await firebaseAPI.deleteOrder(orderId);
        if (result.success) {
          setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
        } else {
          setError('Failed to delete order: ' + result.error);
        }
      } catch (err) {
        setError('Failed to delete order: ' + err.message);
      }
    }
  };

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: '#ff922b',
      confirmed: '#51cf66',
      processing: '#339af0',
      shipped: '#845ef7',
      delivered: '#20c997',
      cancelled: '#ff6b6b'
    };
    return colors[status] || '#868e96';
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (showOrderDetails && selectedOrder) {
    return (
      <div className="orderDetailsContainer">
        <div className="orderDetailsHeader">
          <h2>Order Details - {selectedOrder.id}</h2>
          <button className="backBtn" onClick={() => setShowOrderDetails(false)}>
            ← Back to Orders
          </button>
        </div>
        
        <div className="orderDetailsContent">
          <div className="orderInfoSection">
            <h3>Customer Information</h3>
            <div className="infoGrid">
              <div className="infoItem">
                <label>Name:</label>
                <span>{selectedOrder.customerName}</span>
              </div>
              <div className="infoItem">
                <label>Phone:</label>
                <span>{selectedOrder.customerPhone}</span>
              </div>
              <div className="infoItem">
                <label>Email:</label>
                <span>{selectedOrder.customerEmail}</span>
              </div>
              <div className="infoItem">
                <label>Address:</label>
                <span>{selectedOrder.deliveryAddress}</span>
              </div>
            </div>
          </div>

          <div className="orderItemsSection">
            <h3>Order Items</h3>
            <div className="itemsList">
              {selectedOrder.items.map((item, index) => (
                <div key={index} className="orderItem">
                  <span className="itemName">{item.name}</span>
                  <span className="itemQuantity">Qty: {item.quantity}</span>
                  <span className="itemPrice">{formatPrice(item.price)}</span>
                  <span className="itemTotal">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="orderSummary">
            <div className="summaryItem">
              <label>Subtotal:</label>
              <span>{formatPrice(selectedOrder.totalAmount)}</span>
            </div>
            <div className="summaryItem">
              <label>Delivery:</label>
              <span>Free</span>
            </div>
            <div className="summaryItem total">
              <label>Total:</label>
              <span>{formatPrice(selectedOrder.totalAmount)}</span>
            </div>
          </div>

          <div className="orderActions">
            <div className="statusUpdate">
              <label>Update Status:</label>
              <select
                value={selectedOrder.status}
                onChange={(e) => updateOrderStatus(selectedOrder.id, e.target.value)}
                className="statusSelect"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <button className="deleteOrderBtn" onClick={() => deleteOrder(selectedOrder.id)}>
              Delete Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="orderManager">
        <div className="loadingState">
          <div className="loadingSpinner"></div>
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="orderManager">
        <div className="errorMessage">
          <p>{error}</p>
          <button onClick={loadOrders} className="retryBtn">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="orderManager">
      <div className="orderHeader">
        <h1>Order Management</h1>
        <div className="orderStats">
          <div className="statCard">
            <span className="statNumber">{orders.length}</span>
            <span className="statLabel">Total Orders</span>
          </div>
          <div className="statCard">
            <span className="statNumber">{orders.filter(o => o.status === 'pending').length}</span>
            <span className="statLabel">Pending</span>
          </div>
          <div className="statCard">
            <span className="statNumber">{orders.filter(o => o.status === 'delivered').length}</span>
            <span className="statLabel">Delivered</span>
          </div>
        </div>
      </div>

      <div className="orderFilters">
        <div className="searchFilter">
          <input
            type="text"
            placeholder="Search by name, phone, or order ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchInput"
          />
        </div>
        
        <div className="statusFilter">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="statusFilterSelect"
          >
            <option value="all">All Status</option>
            {statusOptions.map(status => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="ordersTable">
        <div className="tableHeader">
          <div>Order ID</div>
          <div>Customer</div>
          <div>Phone</div>
          <div>Items</div>
          <div>Total</div>
          <div>Status</div>
          <div>Date</div>
          <div>Actions</div>
        </div>
        
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => (
            <div key={order.id} className="tableRow">
              <div className="orderId">{order.id}</div>
              <div className="customerName">{order.customerName}</div>
              <div className="customerPhone">{order.customerPhone}</div>
              <div className="itemsCount">{order.items.length} items</div>
              <div className="totalAmount">{formatPrice(order.totalAmount)}</div>
              <div className="status">
                <span 
                  className="statusBadge"
                  style={{ backgroundColor: getStatusColor(order.status) }}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              <div className="orderDate">{order.orderDate}</div>
              <div className="actions">
                <button 
                  className="viewBtn"
                  onClick={() => viewOrderDetails(order)}
                >
                  View
                </button>
                <button 
                  className="deleteBtn"
                  onClick={() => deleteOrder(order.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="emptyState">
            <p>No orders found</p>
          </div>
        )}
      </div>
    </div>
  );
}
