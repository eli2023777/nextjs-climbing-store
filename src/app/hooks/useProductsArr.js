"use client";
import { useState, useEffect } from "react";
import initialProductsArr from "@/helpers/initialProductsArr";


const useProductsArr = () => {


    const [products, setProducts] = useState([]
        // () => {
        //     const saved = localStorage.getItem('products');
        //     return saved ? JSON.parse(saved) : initialProductsArr

        // }
    );


    useEffect(() => {
        const saved = localStorage.getItem('products');
        setProducts(saved ? JSON.parse(saved) : initialProductsArr);
    }, []);


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



