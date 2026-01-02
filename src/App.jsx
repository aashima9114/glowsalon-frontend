import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin'; 

function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/login' || location.pathname === '/admin';

  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      {!hideNavbarFooter && <Navbar />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} /> {/* <-- Add Route Here */}
        </Routes>
      </main>

      {!hideNavbarFooter && <Footer />}
      
    </div>
  );
}

export default App;