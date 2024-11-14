import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function Nav() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className='flex items-center justify-center gap-6'>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar productos..."
          className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none border"
        />
        <button type="submit" className="bg-gray-100 px-4 py-2 rounded-r-lg border-l-0 border hover:bg-gray-200">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
        </button>
      </form>

      <ul className="hidden md:flex gap-4 justify-center items-center cursor-pointer">
        <li>
          <NavLink to="/"
            className={({ isActive }) => isActive ? "text-white-400" : "hover:text-gray-400"
            }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"
            className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"
            }>About</NavLink>
        </li>
        <li>
          <NavLink to="/login"
            className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}
          >Sign up</NavLink>
        </li>
      </ul>
    </nav>
  );
}
