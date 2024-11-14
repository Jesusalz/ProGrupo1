import React, {useState} from "react";
import ImagenCarrito from '../../../img_login.jpeg'
export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail === email && storedPassword === password) {
      setErrorMessage('');
      console.log('Logueado exitosamente!');
    } else {
      setErrorMessage('Contraseña o email invalidos.');
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
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-0 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-blue-500"
              placeholder="Ingresa tu email o número de teléfono"
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
      </div>
    </div>
  </div>
  );
}