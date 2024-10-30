import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
 
  <nav className="bg-white fixed top-0 left-4  z-10 w-full">
  <div className="flex items-center gap-4 justify-between py-4 px-6 md:px-10">
    {/* Logo */}
    <div className="text-3xl font-bold text-black">Guza</div>

    {/* Menu Items for Desktop and Tablet */}
    <div className="hidden md:flex space-x-6">
      <a href="#" className="text-gray-700 hover:text-orange-300 font-medium">Home</a>
      <a href="#" className="text-gray-700 hover:text-orange-300 font-medium">Shop</a>
      <a href="#" className="text-gray-700 hover:text-orange-300 font-medium">Products</a>
      <a href="#" className="text-gray-700 hover:text-orange-300 font-medium">Pages</a>
      <a href="#" className="text-gray-700 hover:text-orange-300 font-medium">Blog</a>
      <a href="#" className="text-gray-700 hover:text-orange-300 font-medium">Contact</a>
    </div>

    {/* Right Side Icons (always visible) */}
    <div className="flex  items-center space-x-4 ml-auto">
      {/* Search Icon */}
      <button className="text-gray-700 hover:text-orange-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 4a7 7 0 017 7 7 7 0 11-7-7zm0 2a5 5 0 105 5 5 5 0 00-5-5zm7.5 9.5l5 5"></path>
        </svg>
      </button>

      {/* Contact Icon */}
      <button className="text-gray-700 hover:text-orange-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8l6 6m0 0l3-3m-3 3l-6 6m9-15h6a2 2 0 012 2v14a2 2 0 01-2 2h-6m-6 0h6M5 3h6"></path>
        </svg>
      </button>

      {/* Love Icon with Badge */}
      <div className="relative">
        <button className="text-gray-700 hover:text-orange-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8 7.1a5.5 5.5 0 00-7.8 0l-1.1 1.1-1.1-1.1a5.5 5.5 0 00-7.8 7.8l8.9 8.9 8.9-8.9a5.5 5.5 0 000-7.8z"></path>
          </svg>
        </button>
        <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs px-1">3</span>
      </div>

      {/* Lock Icon with Badge */}
      <div className="relative">
        <button className="text-gray-700 hover:text-orange-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17v-6a5 5 0 00-5-5h-1A5 5 0 001 12h0v9h22v-9h-7m-2 3h0v5m-2 0h0"></path>
          </svg>
        </button>
        <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs px-1">1</span>
      </div>
      
      {/* Hamburger Icon for Mobile */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden">
      <div className="flex flex-col items-start space-y-4 px-6 pb-4">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Shop</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Pages</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
      </div>
    </div>
  )}
</nav>

  );
};

export default Navbar;
