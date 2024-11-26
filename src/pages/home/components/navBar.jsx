import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Nav } from '../../../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ClearUser } from '../../../store/authSlice';
import { FaSignOutAlt } from 'react-icons/fa';

export const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const nav = useNavigate();
  const userLog = useSelector((state)=> state.user.userLogged);

  const handleLogOut = (e)=>{
    e.preventDefault();
    localStorage.removeItem('accessToken')
    dispatch(ClearUser())
    nav('/login')
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); // Limpia el input después de buscar
    }
  };
// Color del NavBar
  return (
    <>
      <header className="border-b-2 border-gray-400 flex justify-center items-center gap-16 m-auto p-6">
      <h1 className='flex w-72 font-bold text-2xl'>Grupo 1</h1>
      <Nav />
      <div className='flex justify-center items-center bg-slate-100 rounded gap-4 shadow-slate-500'>
        <input type="text"
          placeholder="What are you looking for?"
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={handleSearch}
          className="bg-slate-100 w-56 p-2 rounded-lg focus:outline-none"/>
          <button>
            <MagnifyingGlassIcon className="w-6 h-6 m-2 bg-slate text-gray-400 cursor-pointer" />
          </button>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Link to="/favorite">
          <HeartIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
        </Link>
        <Link to="/cart">
          <ShoppingCartIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
        </Link>
        {userLog && userLog.name ? (
                <div className="flex justify-center items-center gap-2">
                  <UserCircleIcon className="w-6 h-6 hover:text-gray-400 cursor-pointer" />
                  <button className="flex items-center justify-center gap-1 hover:text-gray-400 cursor-pointer" onClick={handleLogOut}><FaSignOutAlt/>Log Out</button>
                </div>
          ) : ""}
      </div>
    </header>
    </>
  )
}