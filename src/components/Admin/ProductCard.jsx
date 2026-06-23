import React from 'react';
import './ProductCard.css';

export default function ProductCard({ product, onEdit, onDelete }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="adminProductCard">
      <div className="productRow">
        <div className="adminProductImage">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <div className="placeholderIcon">{product.icon}</div>
          )}
        </div>
        <div className="productName">
          <h4>{product.name}</h4>
          <div className="productCategory">{product.category}</div>
          {product.badge && (
            <span className={`productBadge badge${product.badge}`}>
              {product.badge.toUpperCase()}
            </span>
          )}
          <p className="productDescription">{product.description}</p>
          <div className="productPrice">{formatPrice(product.price)}</div>
          <div className="productActions">
            <button className="actionBtn editBtn" onClick={onEdit}>
              ✏️ Edit
            </button>
            <button className="actionBtn deleteBtn" onClick={onDelete}>
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
