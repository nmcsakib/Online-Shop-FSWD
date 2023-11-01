import { useEffect, useState } from "react";
import { Shop, ShopWrapper } from "../Styles/GlobalStyles";
import useProducts from "../data/useProducts";
import CategoryMenu from "./CategoryMenu";
import ProductCard from "./ProductCard";
import SortButton from "./SortButton";

const ShopPage = () => {
    const categories = []
    const [prods, setProds] = useState([])
    const [mainDefaultText, setMainDefaultText] = useState("All Categories");
    // const [categories, setCategories] = useState([])
    const products = useProducts();
    products.map(category => {
        if (!categories.includes(category.category)) {
            categories.push(category.category)
           }
  }  )

  useEffect(() => {
    setProds(products)

},[products])

useEffect(() => {

    const filters = products.filter((product) => product.category === mainDefaultText )
    setProds(filters)
    console.log(filters);
},[mainDefaultText])
 
    return (
        <ShopWrapper>
<div className="buttonWrapper">
<CategoryMenu 
options={categories}
mainDefaultText={mainDefaultText}
setMainDefaultText={setMainDefaultText}
/>
<SortButton
defaultText={`Sort`}
/>
</div>
        <Shop>
          {
              prods?.map(product => <ProductCard key={product?.id} product={product}/>)
            }
        </Shop>
            </ShopWrapper>
    );
};

export default ShopPage;