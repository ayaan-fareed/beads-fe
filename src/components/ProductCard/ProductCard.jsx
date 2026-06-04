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
          {product.badge === 'new' && <span className="badge badgeNew">NEW</span>}
          {product.badge === 'hot' && <span className="badge badgeHot">HOT</span>}
          {!product.badge && <span />}
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
