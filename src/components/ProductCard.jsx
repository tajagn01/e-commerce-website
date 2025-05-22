const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={image}
          alt={name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <button className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 