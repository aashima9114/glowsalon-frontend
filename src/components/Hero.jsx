import React from 'react';
import { motion } from 'framer-motion';


import heroBg from '../assets/hero-bg.jpg';
import product1 from '../assets/product-1.png';
import product2 from '../assets/product-2.png'; 

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center">
      
     
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" 
          alt="Salon Background" 
          className="w-full h-full object-cover"
        />
        {}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent opacity-90"></div>
      </div>

      {/* 2. FLOATING BEAUTY PRODUCTS (Animations) */}
      {/* Floating Product 1  */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 md:right-32 z-20 w-32 md:w-48"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/3382/3382782.png" alt="Shampoo" className="drop-shadow-2xl" />
      </motion.div>

      {/* Floating Product 2 */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-1/3 z-20 w-24 md:w-40"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/9303/9303538.png" alt="Scissors" className="drop-shadow-2xl" />
      </motion.div>

      {/* 3. MAIN CONTENT (Text & Buttons) */}
      <div className="relative z-30 container mx-auto px-6 md:px-12 mt-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-salon-secondary font-bold tracking-widest uppercase text-sm bg-pink-100 px-3 py-1 rounded-full">
            ✨ Premium Salon Experience
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mt-4 font-serif">
            Unlock Your <br/>
            <span className="text-salon-primary">Inner Glow</span>
          </h1>

          <p className="mt-6 text-lg text-gray-800 leading-relaxed font-light">
            Experience world-class hair styling, skincare, and spa treatments. 
            Where luxury meets comfort.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-salon-secondary text-white rounded-full font-bold shadow-lg hover:bg-pink-700 transition">
              Book Appointment
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-salon-primary border-2 border-salon-primary rounded-full font-bold hover:bg-purple-100 transition">
              View Services
            </motion.button>
          </div>

          {/* Customer Trust Badge */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Trusted by 5,000+ Happy Clients
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;