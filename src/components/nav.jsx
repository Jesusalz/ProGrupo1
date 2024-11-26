import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Nav() { 
  const cartItems = useSelector(state => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className='flex items-center justify-center'>
        <ul className="hidden md:flex gap-4 justify-center items-center cursor-pointer">
            <li>
                <NavLink to="/"
                    className={({ isActive }) => isActive ? "text-white-400" : "hover:text-gray-400"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about"
                    className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>
                    About
                </NavLink>
            </li>
          
            <li>
                <NavLink to="/login"
                    className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>
                    Sign up
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

