import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); // Limpia el input después de buscar
    }
  };
// Color del NavBar
  return (
    <nav className="bg-red-700  backdrop-blur-lg text-white w-full">   
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Grupo 1</h1>

        <form onSubmit={handleSearch} className="flex-1 hidden md:flex items-center mx-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
          />
          <button type="submit" className="ml-2">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
          </button>
        </form>

        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white-400" : "hover:text-gray-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "hover:text-gray-400"
              }
            >
              iniciar sesión
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "hover:text-gray-400"
              }
            >
              Registro
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <UserCircleIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
          <ShoppingCartIcon className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
        </div>

        <div className="md:hidden">
          <button className="text-gray-400 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
