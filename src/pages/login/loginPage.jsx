import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/authSlice';
import ImagenCarrito from '../../../img_login.jpeg';

export function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(login({ email, password }));
      console.log('Respuesta del servidor:', resultAction); // Para ver la respuesta completa
      
      if (resultAction.meta.requestStatus === 'fulfilled') {
        setErrorMessage('');
        navigate('/home');
      } else {
        // Obtener el mensaje de error específico de la API
        const errorMsg = resultAction.payload?.message || resultAction.error?.message;
        setErrorMessage(errorMsg || 'Error al iniciar sesión. Por favor intente nuevamente.');
      }
    } catch (error) {
      console.log('Error detallado:', error); // Para ver el error completo
      setErrorMessage(error.message || 'Error al iniciar sesión');
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="hidden md:flex items-center justify-center bg-blue-50 w-full md:w-1/2">
        <img
          src={ImagenCarrito}
          alt="Descripción de la imagen"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Log in to Exclusive</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email or Phone Number
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Ingresa tu email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-red-500"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-1/2 bg-red-500 text-white py-1 rounded-md hover:bg-red-600 transition duration-300"
              >
                Log In
              </button>
              <div className="text-right ml-2">
                <a href="/forgot-password" className="text-red-500 hover:underline text-sm">
                  Forget Password?
                </a>
              </div>
            </div>
          </form>
          <Link to={"/register"} 
          className="block text-center w-full bg-gray-200 text-gray-800 p-3 rounded-md hover:bg-gray-300 transition duration-300 mt-4">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
