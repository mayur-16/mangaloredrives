import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Rentals = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const vehicles = [
    { id: 1, name: '5 Seater Car', passengers: 5, icon: '🚗' },
    { id: 2, name: '7 Seater Car', passengers: 7, icon: '🚙' },
    { id: 3, name: '8 Seater Car', passengers: 8, icon: '🚐' },
    { id: 4, name: '15 Seater Tempo Traveller', passengers: 15, icon: '🚌' }
  ];

  const handleEnquire = (vehicle) => {
    navigate(`/package/rental/${vehicle.id}`, { state: { vehicle } });
  };

  return (
    <section
      id="rentals"
      ref={ref}
      style={{
        padding: isMobile ? '80px 20px' : '100px 40px',
        backgroundColor: '#f8fafc'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
            Our Vehicle Rentals
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Choose from our fleet of well-maintained vehicles with professional drivers
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s ease'
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  fontSize: '80px',
                  textAlign: 'center',
                  marginBottom: '20px'
                }}
              >
                {vehicle.icon}
              </motion.div>

              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#000000',
                marginBottom: '15px',
                textAlign: 'center'
              }}>
                {vehicle.name}
              </h3>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '30px',
                padding: '15px',
                backgroundColor: '#e6f2f7', /* Updated color */
                borderRadius: '12px'
              }}>
                <Users size={24} color="#0C516A" /> {/* Updated color */}
                <span style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0C516A' /* Updated color */
                }}>
                  {vehicle.passengers} Passengers
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleEnquire(vehicle)}
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
                Enquire Now
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rentals;