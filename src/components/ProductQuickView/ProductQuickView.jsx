import React, { useState } from 'react';
import './ProductQuickView.css';

export default function ProductQuickView({ isOpen, onClose, product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product.id);
    }
  };

  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="quickViewBackdrop" onClick={handleBackdropClick}>
      <div className="quickViewModal">
        {/* Close Button */}
        <button className="quickViewClose" onClick={onClose} aria-label="Close popup">
          ✕
        </button>

        <div className="quickViewContent">
          {/* Left Side - Product Image */}
          <div className="quickViewImage">
            {product.image ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <div className="quickViewPlaceholder">
                {product.icon}
              </div>
            )}
            
            {/* Badge */}
            {product.badge && (
              <div className={`quickViewBadge badge${product.badge}`}>
                {product.badge === 'best' ? 'BEST SELLER' : product.badge.toUpperCase()}
              </div>
            )}
          </div>

          {/* Right Side - Product Details */}
          <div className="quickViewDetails">
            <h2 className="quickViewName">{product.name}</h2>
            <p className="quickViewDescription">{product.desc || product.description}</p>
            
            <div className="quickViewPrice">
              {formatPrice(product.price)}
            </div>

            {/* Quantity Selector */}
            <div className="quickViewQuantity">
              <label>Quantity:</label>
              <div className="quantityControls">
                <button 
                  className="quantityBtn"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="quantityValue">{quantity}</span>
                <button 
                  className="quantityBtn"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="quickViewActions">
              <button className="addToCartBtn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className="quickViewInfo">
              <div className="infoItem">
                <span className="infoIcon">🚚</span>
                <span>Delivery: 2-4 Days</span>
              </div>
              <div className="infoItem">
                <span className="infoIcon">💎</span>
                <span>Quality Assurance</span>
              </div>
              <div className="infoItem">
                <span className="infoIcon">🔄</span>
                <span>7 Days Return</span>
              </div>
            </div>

            {/* Secure Payment Message */}
            <div className="securePayment">
              <span className="lockIcon">🔒</span>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
