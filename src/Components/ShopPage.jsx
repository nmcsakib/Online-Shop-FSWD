import { useEffect, useState } from "react";
import { Shop, ShopWrapper, PaginationButton } from "../Styles/GlobalStyles";
import useProducts from "../data/useProducts";
import CategoryMenu from "./CategoryMenu";
import ProductCard from "./ProductCard";
import SortButton from "./SortButton";
import {motion} from "framer-motion";

const ShopPage = () => {
    const categories = []
    const [sortingText, setSortingText] = useState("")
    const [products, setProducts] = useState([])
    const [categoryProducts, setCategoryProducts] = useState([])
    const [categoryDefaultText, setMainDefaultText] = useState("All Categories");
    const allProducts = useProducts();
    const [currentPage, setCurrentPage] = useState(0);


    // ====== Load All Products ==========
    allProducts?.map(category => {
        if (!categories.includes(category.category)) {
            categories.push(category.category)
        }
    })

    useEffect(() => {
        setProducts(allProducts)
    }, [allProducts])

    // ====== Select Categories ==========
    useEffect(() => {
        if (categoryDefaultText === "All Categories") {
            setProducts(allProducts);
            setCategoryProducts(allProducts);
        } else {
            const categoryNames = allProducts.filter((product) => product.category === categoryDefaultText)
            setProducts(categoryNames)
            setCategoryProducts(categoryNames)
            // console.log(categoryNames);
        }
        setCurrentPage(0);
    }, [categoryDefaultText, allProducts])


    // ====== Sorting Function ==========
    useEffect(() => {
        if (sortingText === "High to Low") {
            const sortByPrice = [...products];
            const sortedProducts = sortByPrice?.sort((a, b) => b?.price - a?.price);
            setProducts(sortedProducts)

        } else if (sortingText === "Low to High") {
            const sortByPrice = [...products];
            const sortedProducts = sortByPrice?.sort((a, b) => a?.price - b?.price);
            setProducts(sortedProducts)
        }
    }, [sortingText])


    // ====== Pagination ==========
    const itemsPerPage = 8;
    const totalProducts = categoryProducts.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage)
    const pageNumber = [...Array(totalPages).keys()]
    useEffect(() => {
        const startIndex = (currentPage) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsInPage = categoryProducts.slice(startIndex, endIndex);
        setProducts(productsInPage);
    }, [currentPage, categoryProducts]);
    console.log(totalPages, pageNumber, categoryProducts, products);


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
                    products?.map(product => <motion.div key={product?.id}
                        layout
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                         >
                            <ProductCard product={product}/>
                         </motion.div>)
                }
            </Shop>
            <div>
                <PaginationButton disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>Prev</PaginationButton>
                {
                    pageNumber.map(num => <PaginationButton bg={num === currentPage} onClick={() => setCurrentPage(num)} key={num}>{num + 1}</PaginationButton>)
                }
                <PaginationButton disabled={pageNumber.length === currentPage + 1} onClick={() => setCurrentPage(currentPage + 1)} >Next</PaginationButton>
            </div>
        </ShopWrapper>
    );
};

export default ShopPage;