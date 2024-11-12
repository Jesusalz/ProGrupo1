import { Link } from 'react-router-dom';  

export default function Product({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-500">{product.description}</p>
        <p className="mt-2 text-xl font-bold">${product.price}</p>
        <p className="text-sm text-gray-600">Stock: {product.stock}</p>
      </div>
    </div>
  );
}
