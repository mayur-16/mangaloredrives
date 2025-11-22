import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Building2, ArrowRight, MapPin, Calendar, Users, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import tirupathiTemple from '@/assets/thirupathi_temple.webp';
import mantralayaTemple from '@/assets/mantralaya.webp';
import sabarimalaTemple from '@/assets/shabhari_malai_temple.webp';
import shirdiTemple from '@/assets/shirdi_temple.webp';

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

  const packages = [
    {
      id: 1,
      destination: 'Tirupati Balaji Temple',
      image: tirupathiTemple,
      deity: 'Lord Venkateswara',
      significance: 'Most visited pilgrimage site in the world',
      description: 'Seek blessings at the abode of Lord Venkateswara in the sacred Tirumala hills',
      enroute: ['Kanipakam Vinayaka Temple', 'Sri Kalahasti Temple'],
      highlights: [
        'Darshan of Lord Venkateswara at the sanctum sanctorum',
        'Visit to the seven sacred hills of Tirumala',
        'Participate in temple rituals and ceremonies',
        'Experience the divine atmosphere of Tirumala',
        'Explore ancient temple architecture and history',
        'Receive the sacred Tirupati Laddu Prasadam'
      ],
      features: ['Comfortable AC accommodation', 'Traditional vegetarian meals', 'Temple darshan arrangements', 'Professional guide assistance'],
      duration: '2 Days / 1 Night',
      bestSeason: 'September to March'
    },
    {
      id: 2,
      destination: 'Mantralayam',
      image: mantralayaTemple,
      deity: 'Sri Raghavendra Swamy',
      significance: 'Holy Brindavanam of Sri Raghavendra Swamy',
      description: 'Experience divine grace at the sacred Samadhi of Sri Raghavendra Swamy',
      enroute: ['Alampur Jogulamba Temple', 'Tungabhadra River Ghats'],
      highlights: [
        'Darshan at the sacred Brindavanam of Sri Raghavendra',
        'Attend daily Puja and Abhishekam ceremonies',
        'Visit Panchamukhi Anjaneya Temple',
        'Take holy dip in Tungabhadra River',
        'Explore the meditation caves and sacred places',
        'Receive blessed Prasadam and holy offerings'
      ],
      features: ['Dharamshala accommodation', 'Satvik meals provided', 'Morning & evening darshan', 'Spiritual discourse arrangements'],
      duration: '2 Days / 1 Night',
      bestSeason: 'October to February'
    },
    {
      id: 3,
      destination: 'Sabarimala Temple',
      image: sabarimalaTemple,
      deity: 'Lord Ayyappa',
      significance: 'Sacred hilltop shrine of Lord Ayyappa',
      description: 'Embark on a spiritual journey to the divine abode of Lord Ayyappa',
      enroute: ['Pamba River', 'Sannidhanam Forest Path'],
      highlights: [
        'Trek through sacred forest path to Sannidhanam',
        'Darshan of Lord Ayyappa at the main shrine',
        'Visit Makaravilakku viewing point',
        'Holy bath at Pamba River',
        'Experience the unique Ayyappa devotional tradition',
        'Witness the sacred 18 holy steps ascent'
      ],
      features: ['Basic accommodation facilities', 'Simple vegetarian meals', 'Guided trekking support', 'Vratham observance assistance'],
      duration: '2 Days / 1 Night',
      bestSeason: 'November to January'
    },
    {
      id: 4,
      destination: 'Shirdi Sai Baba Temple',
      image: shirdiTemple,
      deity: 'Sai Baba of Shirdi',
      significance: 'Sacred Samadhi Mandir of Sai Baba',
      description: 'Experience the eternal love and blessings of Sai Baba at his holy abode',
      enroute: ['Shani Shingnapur', 'Trimbakeshwar Temple'],
      highlights: [
        'Darshan at the sacred Samadhi Mandir',
        'Visit Dwarkamai and Chavadi',
        'Attend the divine Aarti ceremonies',
        'Experience Sai Baba\'s Kakad and Shej Aarti',
        'Explore Lendi Garden and other sacred sites',
        'Receive Udi and blessed Prasadam'
      ],
      features: ['Comfortable lodging near temple', 'Meal arrangements included', 'Priority darshan booking', 'Complete temple tour guidance'],
      duration: '2 Days / 1 Night',
      bestSeason: 'October to March'
    }
  ];

  const handleEnquire = (pkg) => {
    navigate(`/package/tour/${pkg.id}`, { state: { package: pkg } });
  };

  return (
    <section
      id="temple-tours"
      ref={ref}
      style={{
        padding: isMobile ? '40px 0' : '80px 0',
        backgroundColor: '#fefcf3',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 25px' : '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
        
          <h2 style={{
            fontSize: isMobile ? '30px' : '45px',
            fontWeight: '800',
            color: '#000000',
            marginBottom: '20px'
          }}>
            Temple Tour Packages
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#78350f',
            maxWidth: '1200px',
            margin: '0 auto',
            lineHeight: '1.6',
            textAlign: isMobile ?'justify':'center',
          }}>
            Sacred pilgrimage journeys to divine shrines with organized darshan, comfortable accommodation and spiritual experiences. Complete packages include AC transport with driver, temple entry arrangements, and guided tours to holy temples across India.
          </p>
        </motion.div>
      </div>
      
      <motion.div
        ref={carouselRef}
        style={{
            cursor: 'grab',
            overflow: 'hidden',
            paddingLeft: isMobile ? '20px' : '40px',
            paddingRight: isMobile ? '20px' : '40px',
            maxWidth: '1400px', 
            margin: '0 auto'
        }}
      >
        <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -carouselWidth }}
            whileTap={{ cursor: 'grabbing' }}
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
              whileHover={{ y: -10 }}
              style={{
                minWidth: isMobile ? '78vw' : '350px',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(217, 119, 6, 0.15)',
                border: '1px solid #fed7aa',
                transition: 'all 0.3s ease',
                pointerEvents: 'auto'
              }}
            >
              <div style={{ position: 'relative', height: isMobile ?'30vh':'250px', overflow: 'hidden', pointerEvents: 'none' }}>
                <img
                  alt={`${pkg.destination} pilgrimage destination`}
                  src={pkg.image}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(217, 119, 6, 0.95)',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Sparkles size={14} />
                  Sacred Yatra
                </div>
              </div>

              <div style={{ padding: isMobile ? '20px' :'30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '15px'
                }}>
                  <Building2 size={24} color="#d97706" />
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#000000'
                  }}>
                    {pkg.destination}
                  </h3>
                </div>

                <div style={{
                  backgroundColor: '#fef3c7',
                  padding: '12px',
                  borderRadius: '10px',
                  marginBottom: '15px',
                  borderLeft: '3px solid #d97706'
                }}>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#d97706',
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    🙏 {pkg.deity}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#92400e',
                    lineHeight: '1.4',
                    fontStyle: 'italic'
                  }}>
                    {pkg.significance}
                  </p>
                </div>

                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  lineHeight: '1.5',
                  marginBottom: '15px'
                }}>
                  {pkg.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  marginBottom: '20px',
                  padding: '12px',
                  backgroundColor: '#fef3c7',
                  borderRadius: '10px',
                }}>
                  <MapPin size={16} color="#92400e" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#92400e', marginBottom: '4px' }}>
                      Sacred Stops En-route
                    </p>
                    <p style={{ fontSize: '12px', color: '#78350f', lineHeight: '1.4' }}>
                      {pkg.enroute.join(' • ')}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEnquire(pkg)}
                  style={{
                    width: '100%',
                    padding: isMobile ?'12px':'15px',
                    backgroundColor: '#d97706',
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
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#b45309'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#d97706'}
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