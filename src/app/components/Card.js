/**
 * 
 * START
 * 
 */

const Card = (props) => {
  const { product } = props;
  return (
    <div className="card" style={{ height: 600 + "px" }}>
      <img
        src={product.images[0]}
        style={{ height: 300 + "px" }}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body">
        <ul>
          <li>Price: {product.price}</li>
          <li>Weight: {product.weight}</li>
          <li>Discount: {product.discountPercentage} %</li>
        </ul>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
};

export default Card;

/**
 * 
 * END
 * 
 */