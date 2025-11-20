import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const heroHeight = heroSection ? heroSection.offsetHeight : 600;
      const scrollPosition = window.scrollY;
      
      setScrolled(scrollPosition > 50);
      setPastHero(scrollPosition > heroHeight - 100);
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
    
    // Initial check
    handleScroll();
    
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

  // Determine background color based on scroll position and mobile view
  const getBackgroundColor = () => {
    if (isMenuOpen) return 'rgba(255, 255, 255, 0.95)';
    if (isMobile && !pastHero) return 'rgba(173, 216, 230, 0.3)'; // Light blue transparent
    if (scrolled || pastHero) return 'rgba(255, 255, 255, 0.95)';
    return '#ffffff';
  };

  const getBackdropFilter = () => {
    if (isMenuOpen) return 'blur(10px)';
    if (isMobile && !pastHero) return 'blur(10px)';
    if (scrolled || pastHero) return 'blur(10px)';
    return 'none';
  };

  const getBoxShadow = () => {
    if (isMenuOpen) return '0 2px 20px rgba(0, 0, 0, 0.1)';
    if (isMobile && !pastHero) return 'none';
    if (scrolled || pastHero) return '0 2px 20px rgba(0, 0, 0, 0.1)';
    return 'none';
  };

  // Determine text color based on scroll and mobile state
  const getTextColor = () => {
    if (isMobile && !pastHero) return '#ffffff';
    return '#0C516A';
  };

  const getIconColor = () => {
    if (isMobile && !pastHero) return '#ffffff';
    return '#000000';
  };

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
        backgroundColor: getBackgroundColor(),
        backdropFilter: getBackdropFilter(),
        boxShadow: getBoxShadow(),
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
        <AnimatePresence mode="wait">
          {(!isMobile || pastHero) && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              style={{ cursor: 'pointer', zIndex: 1001 }}
              onClick={() => scrollToSection('home')}
            >
              <span style={{
                fontSize: '24px',
                fontWeight: '700',
                color: getTextColor(),
                letterSpacing: '-0.5px'
              }}>
                Mangalore Drives
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {isMobile ? (
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              zIndex: 1001,
              marginLeft: (!pastHero && isMobile) ? 'auto' : '0'
            }}
          >
            {isMenuOpen ? <X size={28} color='#000000' /> : <Menu size={28} color={getIconColor()} />}
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
                  color: activeSection === item.id ? '#0C516A' : '#000000',
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
                      backgroundColor: '#0C516A',
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
                  color: activeSection === item.id ? '#0C516A' : '#000000',
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