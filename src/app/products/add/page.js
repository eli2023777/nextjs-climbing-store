// app/products/add/page.js

"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Product from '@/models/Product'
import useProductsArr from '@/hooks/useProductsArr';

export default function AddProductPage() {

    const [product, setProduct] = useState(new Product);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const router = useRouter();

    const { addProduct } = useProductsArr();


    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = new Product(product._id, product.name,
            product.description, product.price);

        newProduct._id = Date.now().toString();
        newProduct.name = name;
        newProduct.description = description;
        newProduct.price = price;

        addProduct(newProduct);


        // here we save the product
        console.log("New Product Added: ", newProduct);


        // After adding, the user get back to products
        router.push('/products');
    };

    return (
        <div>
            <h1>Add new Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type="text"
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='description'>Description</label>
                    <input
                        type="text"
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='price'>Price</label>
                    <input
                        type="text"
                        id='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}
