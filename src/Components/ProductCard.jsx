import { CartButton, SingleProduct } from "../Styles/GlobalStyles";
import { FaCartPlus } from "react-icons/fa";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { img, name, seller, ratings, price } = product;
    
  const handleImageError = (event) => {
      event.target.src = '/imageNotFound.jpg';
    };
  
  return (
    <SingleProduct>
      <img src={img} alt={name}  onError={handleImageError} />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <CartButton>
        <span className="circle" aria-hidden="true">
          <span className="btn-icon">
            <FaCartPlus className="w-5 h-5" />
          </span>
        </span>
        <p>add to cart</p>
      </CartButton>
    </SingleProduct>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    seller: PropTypes.string.isRequired,
    ratings: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
