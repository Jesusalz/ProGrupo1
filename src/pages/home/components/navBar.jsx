import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Nav } from '../../../components';
import { Link } from 'react-router-dom';
import { ClearUser } from '../../../store/authSlice';
import { FaSignOutAlt } from 'react-icons/fa';

export const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const userLog = useSelector((state) => state.user.userLogged);
  const cartItems = useSelector(state => state.cart?.items || []);
  const total = useSelector(state => state.cart?.total || 0);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('accessToken')
    dispatch(ClearUser())
    navigate('/login')
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="border-b-2 border-gray-400 flex justify-center items-center gap-16 m-auto p-6">
      <h1 className='flex w-72 font-bold text-2xl'>Grupo 1</h1>
      <Nav />
      <div className='flex justify-center items-center bg-slate-100 rounded gap-4 shadow-slate-500'>
        <input
          type="text"
          placeholder="What are you looking for?"
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={handleSearch}
          className="bg-slate-100 w-56 p-2 rounded-lg focus:outline-none"
        />
        <button>
          <MagnifyingGlassIcon className="w-6 h-6 m-2 bg-slate text-gray-400 cursor-pointer" />
        </button>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative"
          >
            <ShoppingCartIcon className="w-6 h-6  hover:text-gray-400 cursor-pointer" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          {isCartOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
              <div className="p-4 ">
                <h3 className="text-lg font-semibold mb-2">Shopping Cart</h3>
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty</p>
                ) : (
                  <>
                    <div className="max-h-96 overflow-auto">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex items-center gap-2 py-2 border-b">
                          <img src={item.images[0]} alt={item.title} className="w-12 h-12 object-cover rounded" />
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
            <button className="flex items-center justify-center gap-1 hover:text-gray-400 cursor-pointer" onClick={handleLogOut}><FaSignOutAlt />Log Out</button>
          </div>
        ) : ""}
      </div>
    </header>
  );
};