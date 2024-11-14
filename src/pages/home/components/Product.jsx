import { Link } from 'react-router-dom';  

export default function Product({ product }) {
  return (
    <div className="bg-red-400 w-full grid justify-center items-center shadow-lg rounded-lg overflow-hidden">
      <Link to={`/product/${product.id}`}
        className='flex justify-center items-center'>
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="w-28 h-28 object-cover"
          />
      </Link>
      <div className="p-2">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="mt-2 text-xl font-bold">${product.price}</p>
      </div>
    </div>
  );
}
