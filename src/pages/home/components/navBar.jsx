export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <h1 className="text-2xl font-bold">Grupo 1</h1>
        
        
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-400">Login</a>
          </li>
          <li>
            <a href="/register" className="hover:text-gray-400">Register</a>
          </li>
        </ul>

        
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
}
