import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ImagenCarrito from '../../../img_login.jpeg';
import { loginUser } from "../../services/auth";
import { SetUserLog } from "../../store/authSlice";

export function LoginPage() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, SetLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    SetLoading(true)
    e.preventDefault();
    if(password === '' || email === '') return message.info("Invalid information")
    const datos = {
        email: email,
        password: password
    }

    console.log(datos)
    try {
      const response = await loginUser(datos);
      console.log(response)
      const user = response.data.user
      const accessToken = response.data.backendTokens.accessToken
      localStorage.setItem("accessToken", accessToken);
      dispatch(SetUserLog(user))
      nav('/')
    } catch (error) {
      message.error("Error al iniciar sesión")
    }finally{
      SetLoading(false)
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

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-1/2 bg-red-500 text-white py-1 rounded-md hover:bg-red-600 transition duration-300"
                onClick={handleSubmit} 
                disabled={isLoading}
              >
                {isLoading ? 'Loading..' : 'Log In'}
              </button>
              <div className="text-right ml-2">
                <a href="/forgot-password" className="text-red-500 hover:underline text-sm">
                  Forget Password?
                </a>
              </div>
            </div>
          <Link to={"/register"} 
          className="block text-center w-full bg-gray-200 text-gray-800 p-3 rounded-md hover:bg-gray-300 transition duration-300 mt-4">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
