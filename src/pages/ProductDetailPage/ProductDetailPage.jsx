import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ProductDetail } from '../home/components/ProductDetail';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error al obtener los detalles del producto:', error));
  }, [id]);

  if (!product) return <p>Cargando detalles del producto...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  );
};
