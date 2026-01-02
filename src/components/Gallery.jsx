import React from 'react';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

// Gallery Images Data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    category: "Hair Styling",
    size: "col-span-1 md:col-span-1 row-span-2", 
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    category: "Bridal Makeup",
    size: "col-span-1 md:col-span-2 row-span-1", 
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800",
    category: "Nail Art",
    size: "col-span-1 md:col-span-1 row-span-1", 
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800",
    category: "Facial & Spa",
    size: "col-span-1 md:col-span-1 row-span-1", 
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    category: "Event Ready",
    size: "col-span-1 md:col-span-1 row-span-1", 
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    category: "Salon Interior",
    size: "col-span-1 md:col-span-2 row-span-1", 
  },
];

// Random Animation Generator (Deterministic based on index)
const getRandomDirection = (index) => {
  const directions = [
    { x: -100, y: 0 },   
    { y: -100, x: 0 },   
    { x: 100, y: 0 },    
    { y: 100, x: 0 },    
    { x: -100, y: 100 }, 
    { x: 100, y: -100 }, 
  ];

  return { ...directions[index % directions.length], opacity: 0 };
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
          alt="Gallery Background" 
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold font-serif text-gray-800"
          >
            Our <span className="text-salon-secondary">Masterpieces</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-500"
          >
            A glimpse into our world of beauty and elegance.
          </motion.p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              
              initial={getRandomDirection(index)}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }} 
              className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-md ${image.size}`}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.category} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-salon-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                <FaPlus className="text-3xl mb-2 animate-bounce" />
                <p className="font-semibold text-lg tracking-wide">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-salon-primary text-salon-primary font-bold rounded-full hover:bg-salon-primary hover:text-white transition-colors duration-300"
          >
            View All Gallery
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;