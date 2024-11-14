import React from 'react';

export const ProductDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Marca:</strong> {product.brand}</p>
      <p><strong>Categoría:</strong> {product.category}</p>

      <div>
        <h3>Imágenes del producto:</h3>
        <div className="flex space-x-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen del producto ${index + 1}`}
              className="w-32 h-32 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};


