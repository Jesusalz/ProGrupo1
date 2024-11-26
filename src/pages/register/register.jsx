import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import ImagenCarrito from '../../../img_login.jpeg';
import { registerUser } from "../../services/auth";
import { message } from "antd";

export function Register() {
  const nav = useNavigate();
  const [isLoading, SetLoading] = useState(false);
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [name, SetName] = useState('')
  const [confirmPassword, SetconfirmPassword] = useState('')

  const handleName = (e) => {
    SetName(e.target.value)
  }
  const handleEmail = (e) => {
    SetEmail(e.target.value);
  }
  const handlePass = (e) => {
    SetPassword(e.target.value)
  }
  const handlePassConfirm = (e) => {
    SetconfirmPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetLoading(true);
    if (password !== confirmPassword) {
      message.info("The keys do not match.");
      SetLoading(false);
      return;
  }
    const data = {
      name: name,
      email: email,
      password: password
    }

    try {
      const response = await registerUser(data);
      message.success("It has been created successfully")
      nav("/login")
    } catch (error) {
      if(error.response.data.message){
        message.error(error.response.data.message)
      }else{
        message.error("An error has been found, try again.")
      }
    } finally {
      SetLoading(false);
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
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Create an Account</h1>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleName}
                className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmail}
                className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Enter your email"
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
                onChange={handlePass}
                className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-red-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handlePassConfirm}
                className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-red-500"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-red-500 hover:underline">
                Log in
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}

