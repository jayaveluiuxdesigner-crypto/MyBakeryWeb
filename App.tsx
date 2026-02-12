
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuDisplay from './components/MenuDisplay';
import Banners from './components/Banners';
import Experts from './components/Experts';
import Testimonial from './components/Testimonial';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FullMenuModal from './components/FullMenuModal';
import FloatingChat from './components/FloatingChat';

const App: React.FC = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const toggleMenuModal = () => setIsMenuModalOpen(!isMenuModalOpen);

  return (
    <div className="min-h-screen flex flex-col relative bg-[#FDFBF7]">
      <Header onOpenMenu={toggleMenuModal} />
      <main className="flex-grow">
        <Hero onOpenMenu={toggleMenuModal} />
        <MenuDisplay onOpenMenu={toggleMenuModal} />
        <Banners />
        <Experts />
        <Testimonial />
        <Booking />
      </main>
      <Footer />
      
      <FullMenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
        <FloatingChat/>
    </div>
  );
};

export default App;
