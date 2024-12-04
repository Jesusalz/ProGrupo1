import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect, useRef } from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Nav } from '../../../components';
import { Link } from 'react-router-dom';
import { ClearUser } from '../../../store/authSlice';
import { FaSignOutAlt } from 'react-icons/fa';
import { searchProducts } from '../../../services/api';

// Función de debounce
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export const NavBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const cartRef = useRef(null);
  const searchRef = useRef(null);

  const userLog = useSelector((state) => state.user.userLogged);
  const cartItems = useSelector(state => state.cart?.items || []);
  const total = useSelector(state => state.cart?.total || 0);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Función de búsqueda con debounce
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query.trim() === '') {
        setSearchResults([]);
        setShowDropdown(false);
        return;
      }

      setIsLoading(true);
      try {
        const results = await searchProducts(query);
        setSearchResults(results.products || []);
        setShowDropdown(true);
      } catch (error) {
        console.error('Error en la búsqueda:', error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 500),
    []
  );

  // Efecto para manejar la búsqueda
  useEffect(() => {
    if (searchTerm.trim()) {
      debouncedSearch(searchTerm);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchTerm, debouncedSearch]);

  // Efecto para manejar clics fuera del dropdown de carrito
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('accessToken');
    window.location.href = '/';
    dispatch(ClearUser());
  };

  const handleSearchSelect = (productId) => {
    navigate(`/product/${productId}`);
    setShowDropdown(false);
    setSearchTerm('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?search=${encodeURIComponent(searchTerm)}`);
      setShowDropdown(false);
      setSearchTerm('');
    }
  };

  return (
    <header className="border-b-2 border-gray-400 flex justify-center items-center gap-16 m-auto p-6 relative">
      <h1 className='flex w-72 font-bold text-2xl'>Grupo 1</h1>
      <Nav />
      
      <div 
        ref={searchRef}
        className='relative flex justify-center items-center bg-slate-100 rounded gap-4 shadow-slate-500'
      >
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-slate-100 w-56 p-2 rounded-lg focus:outline-none"
        />
        <button onClick={handleSearchSubmit}>
          <MagnifyingGlassIcon className="w-6 h-6 m-2 bg-slate text-gray-400 cursor-pointer" />
        </button>

        {showDropdown && searchResults.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-50 max-h-80 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">Buscando...</div>
            ) : (
              searchResults.map(product => (
                <div
                  key={product.id}
                  onClick={() => handleSearchSelect(product.id)}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-12 h-12 object-cover mr-4 rounded"
                  />
                  <div>
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className='flex justify-center items-center gap-2'>
        <div 
          ref={cartRef}
          className="relative flex items-center justify-center"
        >
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative"
          >
            <ShoppingCartIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          {isCartOpen && (
            <div className="absolute top-full right-0 mt-4 w-80 bg-white rounded-lg shadow-xl z-50">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Shopping Cart</h3>
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  <>
                    <div className="max-h-96 overflow-auto">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex items-center gap-2 py-2 border-b">
                          <img 
                            src={item.images[0]} 
                            alt={item.title} 
                            className="w-12 h-12 object-cover rounded" 
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                      <Link
                        to="/cart"
                        className="block w-full bg-black text-white text-center py-2 rounded-lg mt-4 hover:bg-gray-800"
                        onClick={() => setIsCartOpen(false)}
                      >
                        View Cart
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {userLog && userLog.name ? (
          <div className="flex justify-center items-center gap-2">
            <Link to="/favorite">
              <HeartIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            </Link>
            <UserCircleIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
            <button 
              className="flex items-center justify-center gap-1 hover:text-gray-400 cursor-pointer" 
              onClick={handleLogOut}
            >
              <FaSignOutAlt />Log Out
            </button>
          </div>
        ) : ""}
      </div>
    </header>
  );
};