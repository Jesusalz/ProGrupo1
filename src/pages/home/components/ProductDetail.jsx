import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Obtener el producto por ID
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error al obtener los detalles del producto:', error));
  }, [id]);

  if (!product) return <p>Cargando detalles del producto...</p>;

  return (
    <div>
      <h1>{producto.title}</h1>
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Marca:</strong> {product.brand}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
    </div>
  );
};

export default ProductDetail;
