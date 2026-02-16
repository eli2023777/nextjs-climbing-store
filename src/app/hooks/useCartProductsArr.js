"use client";
import { useState, useEffect } from "react";
// import initialProductsArr from "@/helpers/initialProductsArr";


const useCartProductsArr = () => {


    const [cartProducts, setCartProducts] = useState([]
        // () => {
        //     const saved = localStorage.getItem('cartProducts');
        //     return saved ? JSON.parse(saved) : []
        // }
    );

    // Add the new product with Sequential ID
    const addProductToCart = (newCartProduct) => {
        setCartProducts(prevCartProducts => [...prevCartProducts, newCartProduct]);
    };

    // Delete the new product with Sequential ID
    const deleteCartProduct = (cartProductToDelete) => {
        setCartProducts(prev => prev.filter(cartProduct => cartProduct?._id !== cartProductToDelete?._id));
    };


    useEffect(() => {
        const saved = localStorage.getItem('cartProducts');
        setCartProducts(saved ? JSON.parse(saved) : []);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        console.log("Cart Products updated:", cartProducts);
    }, [cartProducts]);



    return { addProductToCart, deleteCartProduct };

}

export default useCartProductsArr;



