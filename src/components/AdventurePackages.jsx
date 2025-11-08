import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mountain, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdventurePackages = () => {
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
    
    // Run once on mount and then on resize
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Timeout to recalculate after initial render and potential layout shifts
    const timer = setTimeout(checkMobile, 500);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, [isInView]); // Re-calculate when it comes into view

  const packages = [
    {
      id: 1,
      destination: 'Netravathi Peak',
      price: 2700,
      image: 'https://horizons-cdn.hostinger.com/0ad8efd7-7eaf-4e43-9362-605452a45d21/netravathi-peak-UF7i8.jpeg',
      features: ['1 Night Room Stay', 'Breakfast', '2 Dinners', 'Fruits & Dry Fruits']
    },
    {
      id: 2,
      destination: 'Kumara Parvatha',
      price: 2800,
      image: 'https://horizons-cdn.hostinger.com/0ad8efd7-7eaf-4e43-9362-605452a45d21/kumara-parvatha-G8BJH.jpg',
      features: ['1 Night Room Stay', 'Breakfast', '2 Dinners', 'Fruits & Dry Fruits']
    },
    {
      id: 3,
      destination: 'Kuduremukha',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1604131584033-5407a51b85f2?q=80&w=2070&auto=format&fit=crop',
      features: ['1 Night Room Stay', 'Breakfast', '2 Dinners', 'Fruits & Dry Fruits']
    },
    {
      id: 4,
      destination: 'Ranijhari Falls',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1594161899182-3e285d38f886?q=80&w=1932&auto=format&fit=crop',
      features: ['1 Night Room Stay', 'Breakfast', '2 Dinners', 'Fruits & Dry Fruits']
    }
  ];

  const handleEnquire = (pkg) => {
    navigate(`/package/adventure/${pkg.id}`, { state: { package: pkg } });
  };

  return (
    <section
      id="adventure"
      ref={ref}
      style={{
        padding: isMobile ? '80px 0' : '100px 0',
        backgroundColor: '#ffffff',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <h2 style={{
            fontSize: isMobile ? '36px' : '48px',
            fontWeight: '800',
            color: '#000000',
            marginBottom: '20px'
          }}>
            Adventure Packages
          </h2>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '18px', color: '#64748b' }}>Powered by</span>
            <img
              src="https://horizons-cdn.hostinger.com/0ad8efd7-7eaf-4e43-9362-605452a45d21/thenomadway_logo-q8zbP.jpeg"
              alt="The Nomad Way Logo"
              style={{
                height: '40px',
                width: 'auto'
              }}
            />
          </div>
          <p style={{
            fontSize: '18px',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Includes guide fees, forest fees, first aid, and all essentials for an unforgettable trekking experience
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
            style={{
                display: 'flex',
                gap: '30px',
                padding: '20px 5px',
            }}
            whileTap={{ cursor: isMobile ? 'grabbing' : 'default' }}
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
                pointerEvents: 'auto' // ensure buttons inside are clickable
              }}
            >
              <div style={{ position: 'relative', height: '250px', overflow: 'hidden', pointerEvents: 'none' }}>
                <img
                  alt={`${pkg.destination} trekking destination`}
                  src={pkg.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
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
                  <Mountain size={24} color="#0C516A" /> {/* Updated color */}
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

export default AdventurePackages;