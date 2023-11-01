import { useState, useEffect } from 'react';

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/products.json");
      const json = await response.json();
      setProducts(json);
    };
    fetchData();
  }, []);

  return products;
}

export default useProducts;
