import React, { useState } from 'react';

export const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sección de imágenes */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 
                  ${selectedImage === index ? 'border-red-500' : 'border-transparent'}`}
              >
                <img
                  src={image}
                  alt={`Vista ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-lg text-gray-500 mt-2">{product.brand}</p>
          </div>

          <div className="space-y-2">
            <p className="text-2xl font-bold text-red-600">${product.price}</p>
            <p className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} unidades disponibles` : 'Sin stock'}
            </p>
          </div>

          <div className="border-t border-b py-4">
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Detalles</h3>
            <p><span className="font-medium">Categoría:</span> {product.category}</p>
            <p><span className="font-medium">Marca:</span> {product.brand}</p>
          </div>

          {product.stock > 0 && (
            <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


