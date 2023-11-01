import { CartButton, SingleProduct } from "../Styles/GlobalStyles";
import {FaCartPlus} from "react-icons/fa"
const ProductCard = ({product}) => {
    const { img, name, seller, ratings, price } = product;
    return (
        <SingleProduct>
             <img src={img} alt={name} />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <CartButton>
          
            <span className="circle" aria-hidden="true">
              <span className="btn-icon">
                    <FaCartPlus className='w-5 h-5'/>
              </span>
               
            </span>
            <p>add to cart</p>
                </CartButton>
        </SingleProduct>
    );
};

export default ProductCard;