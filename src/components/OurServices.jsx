import React from 'react';
import { motion } from 'framer-motion';
import { FaCut, FaPaintBrush, FaSpa, FaMagic } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Trendy Haircuts",
    desc: "Expert styling suited for your face shape.",
    icon: <FaCut />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 2,
    title: "Bridal Makeup",
    desc: "Glow on your big day with premium products.",
    icon: <FaPaintBrush />,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 3,
    title: "Rejuvenating Spa",
    desc: "Relax your mind and body with aromatic oils.",
    icon: <FaSpa />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Nail Artistry",
    desc: "Creative designs that stand out.",
    icon: <FaMagic />,
    color: "bg-yellow-100 text-yellow-600",
  }
];

// Animation Logic Helper
const getAnimation = (index) => {
  switch(index) {
    case 0: return { x: -100, y: 0 }; 
    case 1: return { x: 0, y: -100 }; 
    case 2: return { x: 0, y: 100 };  
    case 3: return { x: 100, y: 0 };  
    default: return { opacity: 0 };
  }
};

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE  */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=2000" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 font-serif"
          >
            Our Premium <span className="text-salon-secondary">Services</span>
          </motion.h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover a wide range of beauty treatments curated just for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              
              initial={{ opacity: 0, ...getAnimation(index) }} 
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ always: true }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -10 }} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group cursor-pointer"
            >
              
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-salon-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;