import React from 'react';
import './ProductCard.css';

export default function ProductCard({ product, onEdit, onDelete }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="adminProductCard">
      <div className="cardHeader">
        <div className="productIcon">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            product.icon
          )}
        </div>
        <div className="productInfo">
          <h3 className="productName">{product.name}</h3>
          <span className="productCategory">{product.category}</span>
          {product.badge && (
            <span className={`productBadge badge${product.badge}`}>
              {product.badge.toUpperCase()}
            </span>
          )}
        </div>
      </div>

      <div className="cardBody">
        <p className="productDescription">{product.description}</p>
        <div className="productPrice">
          <strong>{formatPrice(product.price)}</strong>
        </div>
      </div>

      <div className="cardActions">
        <button className="editBtn" onClick={onEdit}>
          ✏️ Edit
        </button>
        <button className="deleteBtn" onClick={onDelete}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
