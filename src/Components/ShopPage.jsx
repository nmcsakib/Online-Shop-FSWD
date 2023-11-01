import { Shop } from "../Styles/GlobalStyles";
import useProducts from "../data/useProducts";
import ProductCard from "./ProductCard";

const ShopPage = () => {
    const products = useProducts();
    console.log(products);
    return (
        <Shop>
          {
            products.map(product => <ProductCard key={product?.id} product={product}/>)
          }
        </Shop>
    );
};

export default ShopPage;