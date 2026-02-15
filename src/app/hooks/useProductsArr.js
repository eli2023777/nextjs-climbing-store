"use client";
import { useState, useEffect } from "react";
import initialProductsArr from "@/helpers/initialProductsArr";


const useProductsArr = () => {


    const [products, setProducts] = useState(
        () => {
            const saved = localStorage.getItem('products');
            return saved ? JSON.parse(saved) : initialProductsArr
            // [
            //     { _id: '0', name: 'Product 1', description: 'This is product 1', price: '90$' },
            //     { _id: '1', name: 'Product 2', description: 'This is product 2', price: '130$' },
            //     { _id: '2', name: 'Product 3', description: 'This is product 3', price: '300$' },
            //     { _id: '3', name: 'Product 3', description: 'This is product 4', price: '250$' },
            // ];


        });

    // Adding the new product with Sequential ID
    const addProduct = (newProduct) => {

        setProducts(prevProducts => {
            const lastId = prevProducts.length ? prevProducts[prevProducts.length - 1]._id : 0;
            const productWithId = { ...newProduct, _id: lastId + 1 };
            return [...prevProducts, productWithId]
        });

    };


    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
        console.log("Products updated:", products);
    }, [products]);

    return { addProduct };

}

export default useProductsArr;



