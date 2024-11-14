<<<<<<< Updated upstream
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
=======
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Nav } from '../../../components';
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
    <header className="border-b-2 border-gray-400 flex justify-center items-center gap-6 w-full m-auto p-6">
      <h1 className='flex w-40 font-bold text-2xl'>Grupo 1</h1>
      <Nav />
      <div className='flex justify-center items-center bg-slate-100 rounded gap-4 shadow-slate-500'>
        <input type="text"
          placeholder="What are you looking for?"
          className="bg-slate-100 w-56 p-2 rounded-lg focus:outline-none"/>
          <button>
            <MagnifyingGlassIcon className="w-6 h-6 m-2 bg-slate text-gray-400 cursor-pointer" />
>>>>>>> Stashed changes
          </button>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Link to="/favorite">
          <HeartIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
        </Link>
        <Link to="/cart">
          <ShoppingCartIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
        </Link>
        {/*<UserCircleIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />*/}
      </div>
    </header>
  );
<<<<<<< Updated upstream
};
=======
}
>>>>>>> Stashed changes
