import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex flex-wrap justify-between items-center">

        <div className="w-full md:w-auto text-center md:text-left">
          <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-wide text-gray-800">NeoMart</Link>
        </div>

        <div className="w-full md:w-auto flex flex-col md:flex-row items-center md:space-x-8 text-center md:text-left space-y-2 md:space-y-0 py-2 md:py-0">
          <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-gray-900 hover:underline">Home</Link>
          <Link to="/shop" className="text-lg font-semibold text-gray-700 hover:text-gray-900 hover:underline">Shop</Link>
          <Link to="/about" className="text-lg font-semibold text-gray-700 hover:text-gray-900 hover:underline">About</Link>
          <Link to="/contact" className="text-lg font-semibold text-gray-700 hover:text-gray-900 hover:underline">Contact</Link>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end items-center space-x-6">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-gray-900 transition" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {products.length}
              </span>
            )}
          </Link>
          <button onClick={() => navigate('/login')} className="hidden md:block text-lg font-medium text-gray-700 hover:text-gray-900">Login | Register</button>
          <button className="block md:hidden text-2xl" onClick={() => navigate('/login')}>
            <FaUser className="text-gray-700 hover:text-gray-900 transition" />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
