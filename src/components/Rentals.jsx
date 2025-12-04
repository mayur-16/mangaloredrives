import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, MapPin, CheckCircle2, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import car5Seater from '@/assets/logos/5seatercar.webp';
import car7Seater from '@/assets/logos/7seatercar.webp';
import car8Seater from '@/assets/logos/8seatercar.webp';
import busIcon from '@/assets/logos/bus.webp';

const useInView = (options = {}) => {
  const [isInView, setIsInView] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, {
      threshold: options.threshold || 0.1,
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
};

  const vehicles = [
    {
      id: 1,
      name: '5 Seater Car',
      passengers: 4,
      icon: car5Seater,
      specialty: 'Perfect for Families',
      description: 'Comfortable sedan ideal for city tours and short trips',
      features: [
        'AC / Non Ac comfort with professional driver',
        'Spacious luggage compartment',
        'Fuel-efficient for long drives',
        'Ideal for airport transfers'
      ],
      suitableFor: ['Airport Transfers', 'City Tours', 'Family Outings'],
      availability: '24/7 Available'
    },
    {
      id: 2,
      name: '7 Seater Car',
      passengers: 6,
      icon: car7Seater,
      specialty: 'Premium SUV Experience',
      description: 'Spacious SUV perfect for group travel and outstation tours',
      features: [
        'Premium AC SUV with expert driver',
        'Extra luggage space',
        'Comfortable for long journeys',
        'Perfect for temple tours'
      ],
      suitableFor: ['Temple Tours', 'Outstation Trips', 'Group Travel'],
      availability: '24/7 Available'
    },
    {
      id: 3,
      name: '8 Seater Car',
      passengers: 7,
      icon: car8Seater,
      specialty: 'Comfortable Group Travel',
      description: 'Premium comfort for larger groups and family gatherings',
      features: [
        'Luxury AC / Non Ac vehicle with skilled driver',
        'Maximum comfort for 7 passengers',
        'Ample storage for group luggage',
        'Ideal for wedding events'
      ],
      suitableFor: ['Wedding Transfers', 'Large Groups', 'Corporate Events'],
      availability: '24/7 Available'
    },
    {
      id: 4,
      name: 'Mini Bus',
      passengers: 15,
      icon: busIcon,
      specialty: 'Budget-Friendly for Large Groups',
      description: 'Perfect for long trip with friends, school trips, and large gatherings',
      features: [
        'AC / Non Ac mini bus with experienced driver',
        'Seating for up to 15 passengers',
        'Cost-effective group transport',
        'Suitable for multi-day tours'
      ],
      suitableFor: ['Corporate Events', 'School Trips', 'Pilgrimages', 'Long tours'],
      availability: 'Advance Booking Required'
    }
  ];

const Rentals = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (carouselRef.current) {
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



  const handleEnquire = (vehicle) => {
    navigate(`/package/rental/${vehicle.id}`, { state: { vehicle } });
  };

  return (
    <section
      id="vehicle-rentals"
      ref={ref}
      style={{
        padding: isMobile ? '35px 0' : '80px 0',
        backgroundColor: '#f8fafc',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 25px' : '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '15px' : '40px' }}
        >
          <h2 style={{
            fontSize: isMobile ? '24px' : '45px',
            fontWeight: '800',
            color: '#000000',
            marginBottom: '20px'
          }}>
            Our Vehicle Rentals
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            color: '#64748b',
            maxWidth: '1200px',
            margin: '0 auto',
            lineHeight: '1.6',
            textAlign: isMobile ? 'justify' : 'center',
          }}>
            Premium chauffeur-driven car rental services in Mangaluru. Choose from our fleet of well-maintained AC vehicles including sedans, SUVs, tempo travellers, and mini buses for local trips, outstation tours, airport transfers, and temple visits. 24/7 availability with professional drivers.
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={carouselRef}
        style={{
          cursor: 'grab',
          overflow: 'hidden',
          paddingLeft: isMobile ? '15px' : '40px',
          paddingRight: isMobile ? '15px' : '40px',
          maxWidth: '1450px',
          margin: '0 auto'
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          style={{
            display: 'flex',
            gap: isMobile ? '10px' : '30px',
            padding: isMobile ? '10px 5px' : '20px 5px',
          }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                minWidth: isMobile ? '80vw' : '350px',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s ease',
                pointerEvents: 'auto'
              }}
            >
              <div style={{
                position: 'relative',
                height: isMobile ? '26vh' : '220px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
                backgroundColor: '#f8fafc',
                pointerEvents: 'none'
              }}>
                <motion.img
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  alt={`${vehicle.name}`}
                  src={vehicle.icon}
                  loading="lazy"
                  style={{
                    width: '80%',
                    height: '80%',
                    objectFit: 'contain',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: isMobile ? '15px' : '20px',
                  right: isMobile ? '15px' : '20px',
                  backgroundColor: 'rgba(12, 81, 106, 0.9)',
                  color: '#ffffff',
                  padding: isMobile ? '7px 12px' : '8px 16px',
                  borderRadius: '20px',
                  fontSize: isMobile ? '11px' : '13px',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Clock size={isMobile ? 12 : 14} />
                  {vehicle.availability}
                </div>
              </div>

              <div style={{ padding: isMobile ? '15px' : '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: isMobile ? '12px' : '15px'
                }}>
                  <Users size={isMobile ? 20 : 24} color="#0C516A" />
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#000000'
                  }}>
                    {vehicle.name}
                  </h3>
                </div>

                <div style={{
                  backgroundColor: '#f0f9ff',
                  padding: isMobile ? '8px' : '12px',
                  borderRadius: '10px',
                  marginBottom: isMobile ? '10px' : '15px',
                  borderLeft: '3px solid #0C516A'
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#0C516A',
                    marginBottom: '4px'
                  }}>
                    {vehicle.specialty}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#64748b',
                    lineHeight: '1.4'
                  }}>
                    {vehicle.description}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  marginBottom: isMobile ? '12px' : '15px',
                  padding: isMobile ? '10px' : '12px',
                  backgroundColor: '#e6f2f7',
                  borderRadius: '12px'
                }}>
                  <Users size={isMobile ? 17 : 20} color="#0C516A" />
                  <span style={{
                    fontSize: isMobile ? '13px' : '16px',
                    fontWeight: '600',
                    color: '#0C516A'
                  }}>
                    Up to {vehicle.passengers} Passengers
                  </span>
                </div>

                <div style={{
                  marginBottom: '15px'
                }}>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '8px'
                  }}>
                    Includes:
                  </p>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}>
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px'
                      }}>
                        <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{
                          fontSize: '13px',
                          color: '#64748b',
                          lineHeight: '1.4'
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  marginBottom: isMobile ? '18px' : '20px',
                  padding: isMobile ? '8px' : '12px',
                  backgroundColor: '#fef3c7',
                  borderRadius: '10px'
                }}>
                  <MapPin size={16} color="#92400e" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#92400e', marginBottom: '4px' }}>
                      Suitable For
                    </p>
                    <p style={{ fontSize: '12px', color: '#78350f', lineHeight: '1.4' }}>
                      {vehicle.suitableFor.join(' • ')}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEnquire(vehicle)}
                  style={{
                    width: '100%',
                    padding: isMobile ? '11px' : '15px',
                    backgroundColor: '#0C516A',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0A4257'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0C516A'}
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

export { vehicles };
export default Rentals;