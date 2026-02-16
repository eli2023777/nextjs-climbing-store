// app/products/[id]/page.js
"use client";

import { useParams, useRouter } from 'next/navigation';
import styles from './page.module.css';
import ProductsArr from '@/hooks/useProductsArr';
import initialProductsArr from '@/helpers/initialProductsArr';
import CartBtn from '@/components/CartBtn';


export async function generateStaticParams() {
    const products = await fetch("https://fakestoreapi.com/products")
        .then(res => res.json());

    return products.map(product => ({
        id: product.id.toString(),
    }));
}

const ProductDetailPage = () => {



    const { id } = useParams();
    const router = useRouter();


    const saved = localStorage.getItem('products');
    const products = saved ? JSON.parse(saved) : initialProductsArr;



    // Search product by id
    const product = products.find((product) => product?._id === id);


    // If product not found, return a message
    if (!product) return <p>Product not found!</p>;


    return (
        <div className={styles.container}>
            <a className={styles.backButton} onClick={() => router.back()}>Back</a>
            <h1>{product?.name}</h1>
            <img className={styles.productImg}
                src={`/images/products/${product?.img}.png`} alt={product?.name} />
            <div className={styles.flexPriceAndCart}>
                <h1>{product?.price}</h1>


                <CartBtn id={id} />

            </div>
            <p className={styles.description}>{product?.description}</p>
        </div>
    );

}

export default ProductDetailPage
