import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-3xl font-bold text-red-500">NeoMart</h2>
          <p className="text-gray-400 text-sm mt-2">
            Your one-stop shop for the latest fashion and trends.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            <li><a href="/shop" className="text-gray-400 hover:text-white transition">Shop</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Returns</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Info</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-2xl"><FaYoutube /></a>
          </div>
        </div>

      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} NeoMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
