import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ text, onClick, variant = 'primary', className = '' }) => {

  const baseStyles = "px-8 py-3 rounded-full font-bold shadow-md transition-all duration-300 flex items-center justify-center";
  
  
  const variants = {
    primary: "bg-salon-primary text-white hover:bg-purple-800 hover:shadow-lg",
    secondary: "bg-salon-secondary text-white hover:bg-pink-700 hover:shadow-lg",
    outline: "bg-transparent border-2 border-salon-primary text-salon-primary hover:bg-purple-50",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;