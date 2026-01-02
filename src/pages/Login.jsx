import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaGoogle, FaCut, FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2070&auto=format&fit=crop" 
          alt="Bright Salon Background" 
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-500/50 to-orange-400/40 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between h-full py-12 gap-10">
        
        {/* LEFT SIDE CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white md:w-1/2 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
              <FaCut className="text-3xl text-pink-600" />
            </div>
            <span className="text-xl font-semibold tracking-widest uppercase text-white-700">Beauty & Style</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 leading-tight drop-shadow-lg">
            GLOW<span className="text-pink-600">SALON</span>
          </h1>

          <p className="text-xl md:text-2xl text-pink-100 font-medium max-w-lg drop-shadow-md leading-relaxed">
            "Where artistry meets beauty to reveal your inner glow."
          </p>
          <h1 className="mt-4 text-pink-200/80">Crafted by specialists, just for you.</h1>
          
          <Link to="/" className="inline-block mt-24 text-white-900 hover:text-white transition-colors underline-offset-4 hover:underline">
            ← Back to Home
          </Link>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-[450px] w-full"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-white text-center mb-2">Hello!</h1>
              <h2 className="text-pink-600 text-center mb-8">We are really happy to see you again!</h2>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Username" 
                    className="w-full px-5 py-4 rounded-xl bg-white/20 border border-white/10 text-black placeholder-blue-500 focus:outline-none focus:border-pink-600 focus:bg-white/30 transition-all shadow-inner"
                  />
                </div>
                
                {/* PASSWORD FIELD WITH ICON FIX */}
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="w-full px-5 py-4 rounded-xl bg-white/20 border border-white/10 text-black placeholder-blue-500 focus:outline-none focus:border-pink-600 focus:bg-white/30 transition-all shadow-inner pr-12"
                  />
                  
                  {/* Eye Icon Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-white transition-colors text-xl focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <Link to="/admin"> 
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-salon-primary to-salon-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-600 transition-all mt-4"
                  >
                    Sign in
                  </motion.button>
                </Link>
              </form>

              <div className="mt-8 text-center">
                <p className="text-pink-200 mb-4">or sign in with</p>
                <div className="flex justify-center gap-4">
                  <motion.button whileHover={{ y: -3 }} className="p-3 bg-white/20 rounded-full text-white hover:bg-white hover:text-blue-600 transition-all shadow-md">
                    <FaFacebookF size={20} />
                  </motion.button>
                  <motion.button whileHover={{ y: -3 }} className="p-3 bg-white/20 rounded-full text-white hover:bg-white hover:text-red-500 transition-all shadow-md">
                    <FaGoogle size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Login;