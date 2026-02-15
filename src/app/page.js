"use client";


import Image from "next/image";
import styles from "@/page.module.css";
import Link from "next/link";
import { useState } from 'react';
import initialProductsArr from "@/helpers/initialProductsArr";
import Header from "@/components/Header";
import CartBtn from "@/components/CartBtn";




export default function Home() {

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : initialProductsArr
  });

  return (

    <div
      className={styles.page}
    >


      <Header headline={'Welcome to our online shop!'} />

      {/* ---- Only for Admin */}
      <Link href={'/products/add'}>
        <button>Add New Product</button>
      </Link >
      {/* ---- */}

      <ul className={styles.productsGrid} >
        {products.map((product) => (
          <li key={product._id} className={styles.productItem}>
            <Link href={`/products/${product._id}`} className={styles.productLink}>
              <img className={styles.productImg}
                src={`/images/products/${product.img}.png`} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>
            <CartBtn id={product._id} />
          </li>
        ))}
      </ul>

    </div>
  );
}
