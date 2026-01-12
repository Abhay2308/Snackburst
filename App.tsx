
import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Testimonials } from './components/Testimonials';
import { BrandStory } from './components/BrandStory';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brandOrange selection:text-white">
      <AnnouncementBar />
      <div className="relative mt-[64px] md:mt-[80px]">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Testimonials />
          <BrandStory />
          <Feedback />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
