import { useEffect, useState } from "react";
import { Shop, ShopWrapper } from "../Styles/GlobalStyles";
import useProducts from "../data/useProducts";
import CategoryMenu from "./CategoryMenu";
import ProductCard from "./ProductCard";
import SortButton from "./SortButton";

const ShopPage = () => {
    const categories = []
    const [sortingText, setSortingText] = useState("")
    const [products, setProducts] = useState([])
    const [categoryDefaultText, setMainDefaultText] = useState("All Categories");
    const allProducts = useProducts();

    allProducts?.map(category => {
        if (!categories.includes(category.category)) {
            categories.push(category.category)
           }
  }  )

  useEffect(() => {
    setProducts(allProducts)

},[allProducts])

useEffect(() => {
if(categoryDefaultText === "All Categories"){
    setProducts(allProducts);
} else{
    const categoryNames = allProducts.filter((product) => product.category === categoryDefaultText )
    setProducts(categoryNames)
    console.log(categoryNames);
}
},[categoryDefaultText])
 
useEffect(() => {
    const sortByPrice = [...products];
    if(sortingText === "High to Low"){
        const sortedProducts = sortByPrice?.sort((a, b) => b?.price - a?.price);
        setProducts(sortedProducts)
        
    }else if(sortingText === "Low to High"){
        const sortedProducts = sortByPrice?.sort((a, b) => a?.price - b?.price);
        setProducts(sortedProducts)
    }
},[sortingText])

console.log(sortingText, products);
return (
        <ShopWrapper>
<div className="buttonWrapper">
<CategoryMenu 
options={categories}
mainDefaultText={categoryDefaultText}
setMainDefaultText={setMainDefaultText}
/>
<SortButton
setSortingText={setSortingText}
/>
</div>
        <Shop>
          {
              products?.map(product => <ProductCard key={product?.id} product={product}/>)
            }
        </Shop>
            </ShopWrapper>
    );
};

export default ShopPage;