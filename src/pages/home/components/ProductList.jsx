import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api'; 
import Product from './Product';

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data.products))  
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
    </div>
  );
};
