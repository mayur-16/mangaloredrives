import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Church, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TourPackages = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    const checkMobile = () => {
        const mobile = window.innerWidth < 768;
        setIsMobile(mobile);
        if (mobile && carouselRef.current) {
            setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    const timer = setTimeout(checkMobile, 500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, [isInView]);

  const packages = [
    {
      id: 1,
      destination: 'Thirupathi Temple',
      price: 2700,
      image: 'https://images.unsplash.com/photo-1595872018818-97555653a011?q=80&w=1964&auto=format&fit=crop',
      features: ['1 Night Room Stay', 'Breakfast', 'Lunch', 'Dinner']
    },
    {
      id: 2,
      destination: 'Manthralaya Temple',
      price: 2600,
      image: 'https://images.unsplash.com/photo-1629107994193-70582f34e3e3?q=80&w=2070&auto=format&fit=crop',
      features: ['1 Night Room Stay', 'Breakfast', 'Lunch', 'Dinner']
    },
    {
      id: 3,
      destination: 'Shabarimala Temple',
      price: 2400,
      image: 'https://images.unsplash.com/photo-1583109871303-a61626354674?q=80&w=2070&auto=format&fit=crop',
      features: ['1 Night Room Stay', 'Breakfast', 'Lunch', 'Dinner']
    },
    {
      id: 4,
      destination: 'Shirdi Sai Baba Temple',
      price: 2700,
      image: 'https://images.unsplash.com/photo-1628178726588-44a6c5391c0e?q=80&w=1964&auto=format&fit=crop',
      features: ['1 Night Room Stay', 'Breakfast', 'Lunch', 'Dinner']
    }
  ];

  const handleEnquire = (pkg) => {
    navigate(`/package/tour/${pkg.id}`, { state: { package: pkg } });
  };

  return (
    <section
      id="tours"
      ref={ref}
      style={{
        padding: isMobile ? '80px 0' : '100px 0',
        backgroundColor: '#f8fafc',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{
            fontSize: isMobile ? '36px' : '48px',
            fontWeight: '800',
            color: '#000000',
            marginBottom: '20px'
          }}>
            Temple Tour Packages
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Spiritual journeys to India's most revered temples with comfortable accommodation and meals
          </p>
        </motion.div>
      </div>
      <motion.div
        ref={carouselRef}
        style={{
            cursor: isMobile ? 'grab' : 'default',
            overflow: 'hidden',
            paddingLeft: isMobile ? '20px' : '40px',
            paddingRight: isMobile ? '20px' : '40px',
            maxWidth: '1400px', 
            margin: '0 auto'
        }}
      >
        <motion.div
            drag={isMobile ? "x" : false}
            dragConstraints={{ right: 0, left: -carouselWidth }}
            whileTap={{ cursor: isMobile ? 'grabbing' : 'default' }}
            style={{
                display: 'flex',
                gap: '30px',
                padding: '20px 5px',
            }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: isMobile ? 0 : -10 }}
              style={{
                minWidth: isMobile ? '300px' : '350px',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s ease',
                pointerEvents: 'auto'
              }}
            >
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden', pointerEvents: 'none' }}>
                <img
                  alt={`${pkg.destination} pilgrimage destination`}
                  src={pkg.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  backgroundColor: '#0C516A', /* Updated color */
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  fontSize: '18px',
                  fontWeight: '700'
                }}>
                  ₹{pkg.price}/person
                </div>
              </div>

              <div style={{ padding: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '15px'
                }}>
                  <Church size={24} color="#0C516A" /> {/* Updated color */}
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#000000'
                  }}>
                    {pkg.destination}
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: '25px'
                }}>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#0C516A', /* Updated color */
                        borderRadius: '50%'
                      }} />
                      <span style={{ fontSize: '15px', color: '#64748b' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEnquire(pkg)}
                  style={{
                    width: '100%',
                    padding: '15px',
                    backgroundColor: '#0C516A', /* Updated color */
                    color: '#ffffff',
                    border: 'none',
borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0A4257'} /* Darker shade for hover */
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0C516A'} /* Updated color */
                >
                  View Details
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TourPackages;