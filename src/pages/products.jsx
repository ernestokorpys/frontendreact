import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shopbackend-production-4e8c.up.railway.app/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map(product => (
                    <div key={product.ID}>
                        <h2>{product.ProductName}</h2>
                        <p>Cost: {product.Cost}</p>
                        <img src={product.Picture} alt={product.ProductName} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
