import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mountain, ArrowRight, MapPin } from 'lucide-react';
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
      destination: 'Netravathi Peak',
      image: 'src/assets/netravathi-peak.jpeg',
      specialty: 'Sunset & Sunrise Views',
      description: 'Experience breathtaking 360° views of Western Ghats',
      enroute: ['Kukke Subramanya Temple', 'Somwarpet Forest'],
      highlights: [
        'Highest peak in Pushpagiri range at 1,800m',
        'Dense evergreen forests with diverse wildlife',
        'Ancient pilgrimage route with historical significance',
        'Spectacular cloud formations and mist-covered valleys',
        'Rich biodiversity - home to exotic birds and butterflies'
      ],
      difficulty: 'Moderate to Challenging',
      duration: '2 Days / 1 Night',
      bestSeason: 'October to February'
    },
    {
      id: 2,
      destination: 'Kumara Parvatha',
      image: 'src/assets/kumara-parvatha.jpg',
      specialty: 'Karnataka\'s 2nd Highest Peak',
      description: 'Challenge yourself with one of the toughest treks',
      enroute: ['Kukke Subramanya Temple', 'Pushpagiri Wildlife Sanctuary'],
      highlights: [
        'Standing tall at 1,712m above sea level',
        'Thrilling steep climbs and rocky terrains',
        'Panoramic views of Western Ghats mountain ranges',
        'Trek through pristine Shola forests',
        'Famous camping spot at Bhattara Mane',
        'Early morning cloud sea phenomenon'
      ],
      difficulty: 'Challenging',
      duration: '2 Days / 1 Night',
      bestSeason: 'November to March'
    },
    {
      id: 3,
      destination: 'Kuduremukha',
      image: 'src/assets/kudure-mukha.jpeg',
      specialty: 'Horse Face Mountain',
      description: 'Trek to the iconic horse-shaped peak',
      enroute: ['Kalasa Temple', 'Horanadu Annapoorneshwari Temple'],
      highlights: [
        'Unique horse face-shaped peak at 1,894m',
        'Part of Kudremukh National Park',
        'Rolling grasslands and scenic meadows',
        'Crystal clear streams and waterfalls',
        'Rich iron ore mountain ranges',
        'Spot Malabar Giant Squirrels and Lion-tailed Macaques'
      ],
      difficulty: 'Moderate',
      duration: '2 Days / 1 Night',
      bestSeason: 'September to February'
    },
    {
      id: 4,
      destination: 'Ranijhari Falls',
      image: 'src/assets/netravathi-peak.jpeg',
      specialty: 'Hidden Waterfall Paradise',
      description: 'Discover the secret cascade in deep forests',
      enroute: ['Dharmasthala Temple', 'Charmadi Ghat Viewpoint'],
      highlights: [
        'Secluded waterfall surrounded by dense forest',
        'Natural swimming pool at the base',
        'Trek through coffee plantations and spice gardens',
        'Relatively easier trek suitable for beginners',
        'Perfect spot for nature photography',
        'Refreshing forest bathing experience'
      ],
      difficulty: 'Easy to Moderate',
      duration: '1 Day Trip',
      bestSeason: 'October to March'
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
            Customizable packages with expert guides, safety equipment, and all permits included
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
                pointerEvents: 'auto'
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
                  backgroundColor: 'rgba(12, 81, 106, 0.9)',
                  color: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)'
                }}>
                  {pkg.difficulty}
                </div>
              </div>

              <div style={{ padding: '30px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px'
                }}>
                  <Mountain size={24} color="#0C516A" />
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#000000'
                  }}>
                    {pkg.destination}
                  </h3>
                </div>

                <div style={{
                  backgroundColor: '#f0f9ff',
                  padding: '12px',
                  borderRadius: '10px',
                  marginBottom: '15px',
                  borderLeft: '3px solid #0C516A'
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#0C516A',
                    marginBottom: '4px'
                  }}>
                    {pkg.specialty}
                  </p>
                  <p style={{
                    fontSize: '13px',
                    color: '#64748b',
                    lineHeight: '1.4'
                  }}>
                    {pkg.description}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  marginBottom: '20px',
                  padding: '12px',
                  backgroundColor: '#fef3c7',
                  borderRadius: '10px'
                }}>
                  <MapPin size={16} color="#92400e" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#92400e', marginBottom: '4px' }}>
                      En-route Attractions
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
                    padding: '15px',
                    backgroundColor: '#0C516A',
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

export default AdventurePackages;