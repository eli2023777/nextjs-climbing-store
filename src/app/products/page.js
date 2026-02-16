// app/products/page.js
"use client";

import Link from 'next/link';
import styles from './page.module.css';
import useProductsArr from '@/hooks/useProductsArr';
import { useState, useEffect } from 'react';
import initialProductsArr from '@/helpers/initialProductsArr';

export default function ProductsPage() {


    const [products, setProducts] = useState(() => {
        []
        // const saved = localStorage.getItem('products');
        // return saved ? JSON.parse(saved) : initialProductsArr
    });

    useEffect(() => {
        const saved = localStorage.getItem('products');
        setProducts(saved ? JSON.parse(saved) : initialProductsArr);
    }, []);





    return (
        <div className={styles.container}>
            <h1>Our Products</h1>

            <Link href={'/products/add'}>
                <button>Add New Product</button>
            </Link >

            <ul className={styles.productLink}>
                {products?.map((product) => (
                    <li key={product._id} className={styles.productItem}>
                        <Link href={`/products/${product._id}`} className={styles.productLink}>
                            {product.name}
                        </Link>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
