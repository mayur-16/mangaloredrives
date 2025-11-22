import React, { useEffect, useState } from 'react';
import SEOHead from '@/components/SEOHead'; // Create this new component
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Rentals from '@/components/Rentals';
import AdventurePackages from '@/components/AdventurePackages';
import TourPackages from '@/components/TourPackages';
import Footer from '@/components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'vehicle-rentals', 'adventure-packages', 'temple-tours'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEOHead />
      <div style={{ backgroundColor: '#ffffff' }}>
        <Header activeSection={activeSection} />
        <Hero />
        <Rentals />
        <AdventurePackages />
        <TourPackages />
        <Footer />
      </div>
    </>
  );
}

export default App;