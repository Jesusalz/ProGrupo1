import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, total } = useSelector(state => state.cart);
  const userLog = useSelector((state) => state.user.userLogged); // Accede al usuario logueado desde el authSlice
  const isAuthenticated = !!userLog; // Verifica si el usuario está autenticado

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  }

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <button 
          onClick={() => navigate('/')}
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Continue Shopping
        </button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {items.map(item => (
            <div 
              key={item.id} 
              className="flex items-center bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-6 flex-grow">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-blue-600 font-bold">${item.price}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300 transition-colors"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                  <button
                    className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300 transition-colors"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700 transition-colors transform hover:scale-110"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl text-blue-600 font-bold">${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02]"
            onClick={handleClick}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
