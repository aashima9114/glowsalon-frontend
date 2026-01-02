import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: About & Logo */}
        <div className="space-y-6">
          <div className="text-3xl font-bold text-white font-serif tracking-wider">
            GLOW<span className="text-salon-secondary">SALON</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Your premium destination for luxury hair care, styling, and wellness treatments. 
            Step in and let your inner beauty shine.
          </p>
          <div className="flex space-x-4">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
              <a key={index} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-salon-secondary hover:text-white transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {['Home', 'Services', 'Our Stylists', 'Gallery', 'Book Appointment'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-salon-secondary transition-colors flex items-center">
                  <span className="mr-2">›</span> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-salon-secondary mt-1" size={20} />
              <span>Tower B3, Spaze I-Tech Park, Sector 49, Gurugram, Haryana-122018, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-salon-secondary" size={18} />
              <span>+91 9717101758</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-salon-secondary" size={18} />
              <span>info@glowsalon.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} GlowSalon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;