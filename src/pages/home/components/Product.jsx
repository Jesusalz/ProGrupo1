import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cartSlice';
import { addToFavorites } from '../../../store/favoriteSlice'; 
import Favorite from '../../../../public/favorite.svg';
import View from '../../../../public/view.svg';

export default function Product({ product }) {
  const navigate = useNavigate(); // Hook para redirigir
  const userLog = useSelector((state) => state.user.userLogged); // Accede al usuario logueado desde el authSlice
  const isAuthenticated = !!userLog; // Verifica si el usuario está autenticado
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleAddToFavorites = () => {
    if (!isAuthenticated) {
      // Si no está autenticado, redirigir a la página de inicio de sesión
      navigate('/login');
    } else {
      // Si está autenticado, despachar la acción para agregar a favoritos
      dispatch(addToFavorites(product));
    }
  };

  return (
    <div className="relative bg-slate-50 border rounded-lg p-4 shadow-md group">
      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
        -35%
      </div>
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button 
          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          onClick={handleAddToFavorites} // Añade el manejador de clics
        >
          <img src={Favorite} alt="favorite product" />
        </button>
        <Link to={`./product/${product.id}`} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
          <img src={View} alt="View product" />
        </Link>
      </div>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-36 object-contain"
      />

      <button onClick={handleAddToCart}
        className="w-full bg-black text-white text-sm font-semibold py-2 mt-4 rounded hover:bg-gray-800 transition opacity-0 group-hover:opacity-100"
      >
        Add To Cart
      </button>

      <h3 className="mt-4 text-sm font-medium text-gray-800">{product.title}</h3>
      <div className="flex items-center justify-start mt-2 space-x-2">
        <span className="text-red-500 font-bold text-lg">${product.price}</span>
        <span className="text-gray-400 line-through text-sm">${(product.price * 1.3).toFixed(2)}</span>
      </div>

      <div className="flex items-center mt-2">
        <div className="flex text-yellow-400 text-sm">
          {"★".repeat(product.rating)}
        </div>
        <span className="ml-2 text-gray-500 text-xs">{product.rating}</span>
      </div>
    </div>
  );
}