import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For mobile icons (comes with shadcn/lucide)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-white text-2xl font-bold tracking-wide hover:scale-105 transition-transform"
        >
          Feedback App
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/add"
            className="text-white text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            Add Feedback
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 text-white flex flex-col items-center space-y-4 py-4 animate-slideDown">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>
          <Link
            to="/add"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-300 transition"
          >
            Add Feedback
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
