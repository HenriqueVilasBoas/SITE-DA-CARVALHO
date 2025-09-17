import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Services from '../components/Services';
import NewsSection from '../components/NewsSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FAFFEE]">
      <Header />
      <Hero />
      <FeaturedProjects />
      <Services />
      <NewsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomePage;