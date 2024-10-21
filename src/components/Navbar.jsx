import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex justify-between items-center">
          {/* Logo aligned to the left, wrapped in a Link to go to the home page */}
          <Link to="/">
            <img
              src={Logo} // Replace with your logo path
              alt="Dubai Cruise"
              className="h-10"
            />
          </Link>

          {/* Contact number and Book Now button aligned to the right on larger screens */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="phone" className="text-orange-600">📞</span>
              <span className="text-gray-800">+971 52 52 52 746</span>
            </div>
            <Link to="/Booking" className="bg-orange-500 text-white px-4 py-2 rounded-lg border-2 hover:bg-white hover:border-2 hover:border-orange-500 hover:text-orange-500">
              Book Now
            </Link>
          </div>

          {/* Burger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation links visible only on larger screens */}
        <div className="hidden md:flex justify-start space-x-6 mt-4">
          <Link to="/MarinaCruise" className="text-gray-800 hover:text-orange-600">Marina Cruise</Link>
          <Link to="/CreekCruise" className="text-gray-800 hover:text-orange-600">Creek Cruise</Link>
          <Link to="/CanalCruise" className="text-gray-800 hover:text-orange-600">Canal Cruise</Link>
          <Link to="/Contact" className="text-gray-800 hover:text-orange-600">Contact</Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-4 rounded-lg shadow-md">
            <Link to="/MarinaCruise" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">Marina Cruise</Link>
            <Link to="/CreekCruise" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">Creek Cruise</Link>
            <Link to="/CanalCruise" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">Canal Cruise</Link>
            <Link to="/Contact" className="block py-2 px-4 text-orange-600 hover:bg-gray-100">Contact</Link>
            <a href="tel:+971525252746" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">
              📞 +971 52 52 52 746
            </a>
            <a to="/Booking" className="block bg-orange-500 text-white text-center py-2 px-4 rounded-lg border-2 hover:bg-white hover:border-2 hover:border-orange-500 hover:text-orange-500">
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
