import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
        setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'vehicle-rentals', label: 'Rentals' },
    { id: 'adventure-packages', label: 'Adventure Packages' },
    { id: 'temple-tours', label: 'Tour Packages' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled || isMenuOpen ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
        backdropFilter: scrolled || isMenuOpen ? 'blur(10px)' : 'none',
        boxShadow: scrolled || isMenuOpen ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <nav style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '20px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ cursor: 'pointer', zIndex: 1001 }}
          onClick={() => scrollToSection('home')}
        >
          <span style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#0C516A', /* Updated color */
            letterSpacing: '-0.5px'
          }}>
            Mangalore Drives
          </span>
        </motion.div>

        {isMobile ? (
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 1001 }}
          >
            {isMenuOpen ? <X size={28} color="#000000" /> : <Menu size={28} color="#000000" />}
          </motion.button>
        ) : (
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: activeSection === item.id ? '600' : '500',
                  color: activeSection === item.id ? '#0C516A' : '#000000', /* Updated color */
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '8px 0',
                  transition: 'color 0.3s ease'
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#0C516A', /* Updated color */
                      borderRadius: '2px'
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        )}
      </nav>
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: activeSection === item.id ? '#0C516A' : '#000000', /* Updated color */
                  cursor: 'pointer',
                  padding: '10px 0',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;