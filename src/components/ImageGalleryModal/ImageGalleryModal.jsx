import React, { useState } from 'react';
import './ImageGalleryModal.css';

export default function ImageGalleryModal({ isOpen, onClose, product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !product) return null;

  // Show only the uploaded product image
  const productImages = [product.image].filter(Boolean); // Remove any null/undefined images

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modalBackdrop" onClick={handleBackdropClick}>
      <div className="modalContent">
        <button className="closeButton" onClick={onClose} aria-label="Close gallery">
          ×
        </button>
        
        <div className="mainImageContainer">
          {productImages.length > 1 && (
            <button 
              className="navButton prevButton" 
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          
          <div className="mainImage">
            <img 
              src={productImages[currentImageIndex]} 
              alt={`${product.name}`}
            />
          </div>
          
          {productImages.length > 1 && (
            <button 
              className="navButton nextButton" 
              onClick={handleNext}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>

        {productImages.length > 1 && (
          <div className="thumbnailContainer">
            {productImages.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
                aria-label={`Go to image ${index + 1}`}
              >
                <img src={image} alt={`${product.name} - Thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        )}

        <div className="productInfo">
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <span className="price">Rs. {product.price}</span>
        </div>
      </div>
    </div>
  );
}
