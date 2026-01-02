import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/OurServices'; 
import Stylists from '../components/Stylists';
import Gallery from '../components/Gallery';


const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Stylists />
      <Gallery />
    </>
  );
};

export default Home;