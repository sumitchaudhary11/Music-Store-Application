import React, { useState } from 'react';
import ProductList from './productListing';
import JSON from './db.json';

const Products = () => {
    const [title] = useState('Products Page');
    const [products] = useState(JSON); // Initialize products with your JSON data here

    console.log(products);

    return (
        <div>
            <h2>{title}</h2>
            <ProductList prodlist={products} />
        </div>
    );
};

export default Products;
