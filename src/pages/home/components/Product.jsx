export default function Product({ product }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={product.image || '/default-image.jpg'} alt={product.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-500">{product.description}</p>
          <p className="mt-2 text-xl font-bold">${product.price}</p>
        </div>
      </div>
    );
  }
  

