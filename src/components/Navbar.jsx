import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" }, 
    { name: "Services", href: "#services" },
    { name: "Stylists", href: "#team" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-5xl font-bold text-salon-primary cursor-pointer tracking-wider font-serif">
          <u>GLOW</u><span className="text-salon-secondary"><u>SALON</u></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6 mr-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-700 hover:text-salon-secondary font-medium transition-all hover:underline hover:underline-offset-4"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* LOGIN BUTTON LINKED TO /login */}
          <Link to="/login">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2 border-2 border-salon-primary text-salon-primary rounded-full font-semibold hover:bg-salon-primary hover:text-white transition-all duration-300"
            >
              <FaUserCircle size={20} />
              <span>Login</span>
            </motion.button>
          </Link>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-salon-secondary text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-pink-700 transition-all"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {navOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute w-full px-6 py-4 shadow-xl flex flex-col space-y-4 border-t border-gray-100"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-700 font-medium hover:text-salon-secondary"
              onClick={() => setNavOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <hr className="border-gray-100" />
          
          {/* Mobile Login Button Linked */}
          <Link to="/login" onClick={() => setNavOpen(false)}>
            <button className="flex items-center justify-center gap-2 w-full border-2 border-salon-primary text-salon-primary py-2 rounded-full font-semibold">
              <FaUserCircle size={18} /> Login
            </button>
          </Link>

          <button className="bg-salon-secondary text-white py-2 rounded-full font-semibold w-full shadow-md">
            Book Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;