import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const team = [
  {
    id: 1,
    name: "Alia Sharma",
    role: "Senior Hair Stylist",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Raj Malhotra",
    role: "Beard & Grooming Expert",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Sonia Verma",
    role: "Bridal Makeup Artist",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
  }
];

// Animation Logic: 
const getAnimation = (index) => {
  if (index === 0) return { x: -100, opacity: 0 };      
  if (index === 1) return { y: 50, scale: 0.8, opacity: 0 }; 
  if (index === 2) return { x: 100, opacity: 0 };      
  return { opacity: 0 };
};

const Stylists = () => {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000" 
          alt="Salon Background" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-4xl font-bold font-serif text-gray-800"
          >
            Meet Our <span className="text-salon-primary">Experts</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-600 font-medium"
          >
            The creative hands behind your perfect look.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={getAnimation(index)}
              whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }} 
              viewport={{ always: true }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              
              whileHover={{ y: -10 }} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* Social Icons Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                  <div className="p-3 bg-white rounded-full text-salon-primary hover:bg-salon-secondary hover:text-white transition"><FaInstagram /></div>
                  <div className="p-3 bg-white rounded-full text-salon-primary hover:bg-salon-secondary hover:text-white transition"><FaTwitter /></div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-salon-secondary font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stylists;