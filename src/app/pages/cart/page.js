
"use client";


import { useState, useEffect } from 'react';
import styles from "@/page.module.css";
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import { FaTrash } from "react-icons/fa";
import useCartProductsArr from '@/hooks/useCartProductsArr';




const Cart = () => {


    const [products, setProducts] = useState(() => {
        []
        // const saved = localStorage.getItem('cartProducts');
        // return saved ? JSON.parse(saved) : []
    });

    useEffect(() => {
        const saved = localStorage.getItem('cartProducts');
        setProducts(saved ? JSON.parse(saved) : initialProductsArr);
    }, []);

    const { deleteCartProduct } = useCartProductsArr();


    // Delete the new product with Sequential ID
    const deleteProduct = (cartProductToDelete) => {
        setProducts(prev => prev.filter(cartProduct => cartProduct?._id !== cartProductToDelete._id));
    };


    // useEffect(() => {
    //     console.log('products: ', products);
    // }, [])



    return (
        <div className={styles.page}>
            <h1>Cart</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur laborum adipisci unde praesentium nesciunt dicta voluptas iste non consequatur. Commodi architecto, ullam non cum repellat alias. Dolor modi sint soluta.</p>



            <ul className={styles.productsGrid} >
                {products?.map((product) => {
                    if (!product) return null;
                    return (
                        <li key={product._id} className={styles.productItem}>
                            <Link href={`/products/${product?._id}`} className={styles.productLink}>
                                {product?.name}
                                <img className={styles.productImg}
                                    src={`/images/products/${product?.img}.png`} alt={product?.name} />
                            </Link>

                            {/* Cart Btn */}
                            <Button variant='danger'
                                onClick={() => { deleteCartProduct(product); deleteProduct(product); }}
                            >
                                <FaTrash />
                            </Button>
                        </li>
                    );
                })}
            </ul>

        </div>
    )
}

export default Cart
