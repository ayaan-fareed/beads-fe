import React, { useState, useEffect } from 'react';
import { uploadImageToCloudinary } from '../../services/cloudinary.js';
import './ProductForm.css';

const categories = ['Necklace', 'Earrings', 'Ring', 'Bracelet'];
const badges = ['', 'hot', 'new', 'sale', 'best'];
const icons = ['📿', '💎', '💍', '✨', '🌸', '💗', '🪬', '👂', '🔮', '🎀'];

export default function ProductForm({ product, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Necklace',
    description: '',
    price: '',
    icon: '📿',
    badge: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState('');

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        category: product.category || 'Necklace',
        description: product.description || '',
        price: product.price || '',
        icon: product.icon || '📿',
        badge: product.badge || '',
        image: product.image || ''
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleIconSelect = (icon) => {
    setFormData(prev => ({
      ...prev,
      icon
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageUploading(true);
    setImageUploadError('');

    try {
      const { url } = await uploadImageToCloudinary(file);
      setFormData(prev => ({
        ...prev,
        image: url
      }));
    } catch (error) {
      console.error('Image upload error:', error);
      setImageUploadError(error.message || 'Failed to upload image. Please try again.');
    } finally {
      setImageUploading(false);
    }
  };

  const handleImageUrlChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      image: value
    }));
    if (imageUploadError) {
      setImageUploadError('');
    }
  };

  return (
    <div className="productFormContainer">
      <div className="formHeader">
        <h2>{product ? 'Edit Product' : 'Add New Product'}</h2>
        <button className="closeBtn" onClick={onCancel}>✕</button>
      </div>

      <form onSubmit={handleSubmit} className="productForm">
        <div className="formRow">
          <div className="formGroup">
            <label htmlFor="name">Product Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              disabled={loading}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="errorText">{errors.name}</span>}
          </div>

          <div className="formGroup">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              disabled={loading}
              className={errors.category ? 'error' : ''}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && <span className="errorText">{errors.category}</span>}
          </div>
        </div>

        <div className="formGroup">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            disabled={loading}
            rows={3}
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <span className="errorText">{errors.description}</span>}
        </div>

        <div className="formRow">
          <div className="formGroup">
            <label htmlFor="price">Price (Rs.) *</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              disabled={loading}
              min="0"
              step="1"
              className={errors.price ? 'error' : ''}
            />
            {errors.price && <span className="errorText">{errors.price}</span>}
          </div>

          <div className="formGroup">
            <label htmlFor="badge">Badge</label>
            <select
              id="badge"
              name="badge"
              value={formData.badge}
              onChange={handleChange}
              disabled={loading}
            >
              {badges.map(badge => (
                <option key={badge} value={badge}>
                  {badge === 'best' ? 'Best Seller' : badge ? badge.charAt(0).toUpperCase() + badge.slice(1) : 'No Badge'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="formGroup">
          <label htmlFor="image">Product Image</label>
          <div className="imageUploadControls">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={loading || imageUploading}
              className="imageFileInput"
            />
            {imageUploading && (
              <span className="uploadStatus">Uploading to Cloudinary...</span>
            )}
          </div>
          {imageUploadError && <span className="errorText">{imageUploadError}</span>}

          <div className="formGroup imageUrlGroup">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="url"
              id="imageUrl"
              name="image"
              value={formData.image}
              onChange={handleImageUrlChange}
              placeholder="Cloudinary URL will appear here after upload"
              disabled={loading || imageUploading}
            />
          </div>

          {formData.image && (
            <div className="imagePreview">
              <img
                src={formData.image}
                alt="Preview"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          )}
        </div>

        <div className="formGroup">
          <label>Icon</label>
          <div className="iconSelector">
            {icons.map(icon => (
              <button
                key={icon}
                type="button"
                className={`iconOption ${formData.icon === icon ? 'selected' : ''}`}
                onClick={() => handleIconSelect(icon)}
                disabled={loading}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div className="formActions">
          <button
            type="button"
            className="cancelBtn"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="submitBtn"
            disabled={loading}
          >
            {loading ? 'Saving...' : (product ? 'Update Product' : 'Add Product')}
          </button>
        </div>
      </form>
    </div>
  );
}
