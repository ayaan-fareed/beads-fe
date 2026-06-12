import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="productCard">
      <div className="productImage" aria-hidden="true">
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
  );
}
