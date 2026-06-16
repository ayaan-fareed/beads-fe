import React, { useState } from 'react';
import ImageGalleryModal from '../ImageGalleryModal/ImageGalleryModal';
import ProductQuickView from '../ProductQuickView/ProductQuickView';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleImageClick = () => {
    if (product.image) {
      setIsQuickViewOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
  };

  return (
    <>
      <article className="productCard">
        <div className="productImage" onClick={handleImageClick} aria-hidden="true">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            product.icon
          )}
        </div>
      <div className="productBody">
          <div className="productTop">
            <span className="productTag">{product.tag}</span>
            {/* Debug: Show badge value */}
            {console.log('Product badge:', product.badge, 'Type:', typeof product.badge)}
            {product.badge && (
              <span className={`badge badge${product.badge}`}>
                {product.badge === 'best' ? 'BEST SELLER' : product.badge.toUpperCase()}
              </span>
            )}
          </div>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <div className="productFooter">
            <span className="price">Rs. {product.price}</span>
            <button className="addBtn" onClick={() => onAddToCart(product.id)}>+ Add to Cart</button>
          </div>
        </div>
      </article>
      
      <ProductQuickView 
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
        product={product}
        onAddToCart={onAddToCart}
      />
      
      <ImageGalleryModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={product}
      />
    </>
  );
}
