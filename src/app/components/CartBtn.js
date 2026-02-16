"use client";


import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaCartPlus } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { useParams, useRouter } from 'next/navigation';
import useCartProductsArr from '@/hooks/useCartProductsArr';
import initialProductsArr from '@/helpers/initialProductsArr';




const CartBtn = ({ id }) => {

    const [products, setProducts] = useState();
    const [cartProducts, setCartProducts] = useState();


    useEffect(() => {
        const saved = localStorage.getItem('products');
        setProducts(saved ? JSON.parse(saved) : initialProductsArr);
        setCartProducts(JSON.parse(localStorage.getItem('cartProducts')));
    }, []);

    // const saved = localStorage.getItem('products');
    // const products = saved ? JSON.parse(saved) : initialProductsArr;
    // console.log('products: ', products);


    // const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));


    // Search product by id
    const product = products?.find((product) => product?._id === id);


    const [isProductInCart, setIsProductInCart] = useState(
        Boolean(cartProducts?.find((product) => product?._id === id))
    );

    const { addProductToCart, deleteCartProduct } = useCartProductsArr();

    // useEffect(() => {
    //     setIsProductInCart(isProductInCart);
    // }, [isProductInCart]);


    return (
        <div>
            <Button variant={isProductInCart ? 'success' : 'primary'}
                onClick={() => {
                    !isProductInCart ? addProductToCart(product) : deleteCartProduct(product);
                    setIsProductInCart(prev => !prev);
                }}>

                {isProductInCart ?
                    <BsCartCheckFill />
                    :
                    <FaCartPlus />
                }

            </Button>
        </div>
    )
}

export default CartBtn
