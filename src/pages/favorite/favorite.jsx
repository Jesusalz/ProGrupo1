import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

export function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favoritos</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No tienes productos en favoritos.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((item) => (
            <li key={item.id} className="bg-white border rounded-lg shadow-md p-4">
              <img src={item.images[0]} alt={item.title} className="w-full h-36 object-contain mb-2" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <div className="flex items-center justify-between mt-2">
                <span className="text-red-500 font-bold text-lg">${item.price}</span>
               
                <Link to={`/product/${item.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Ver Producto
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}