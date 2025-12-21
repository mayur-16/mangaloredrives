// src/pages/PackageDetails.jsx - COMPLETE WORKING VERSION
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, MessageCircle, Users, Mountain, Building2, Car, Shield, User, CheckCircle2, MapPin, Calendar, Clock } from 'lucide-react';

// Import all package data
import car5Seater from '@/assets/logos/5seatercar.webp';
import car7Seater from '@/assets/logos/7seatercar.webp';
import car8Seater from '@/assets/logos/8seatercar.webp';
import busIcon from '@/assets/logos/bus.webp';
import netravathiPeak from '@/assets/netravathi-peak.webp';
import kumaraParvatha from '@/assets/kumara-parvatha.webp';
import kudureMukha from '@/assets/kudure-mukha.webp';
import ranijhari from '@/assets/Rani_jhari.webp';
import tirupathiTemple from '@/assets/thirupathi_temple.webp';
import mantralayaTemple from '@/assets/mantralaya.webp';
import sabarimalaTemple from '@/assets/shabhari_malai_temple.webp';
import shirdiTemple from '@/assets/shirdi_temple.webp';

// Define all package data here
const VEHICLES_DATA = {
  1: {
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
  2: {
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
  3: {
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
  4: {
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
};

const ADVENTURE_DATA = {
  1: {
    id: 1,
    destination: 'Netravathi Peak',
    image: netravathiPeak,
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
  2: {
    id: 2,
    destination: 'Kumara Parvatha',
    image: kumaraParvatha,
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
  3: {
    id: 3,
    destination: 'Kuduremukha',
    image: kudureMukha,
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
  4: {
    id: 4,
    destination: 'Ranijhari Falls',
    image: ranijhari,
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
};

const TOUR_DATA = {
  1: {
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
  2: {
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
  3: {
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
  4: {
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
};

const PackageDetails = () => {
  const { type, id } = useParams();
  const [isMobile, setIsMobile] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from location.state OR fallback to static data
  const getPackageData = () => {
    // Try to get from navigation state first
    const stateData = location.state?.package || location.state?.vehicle;
    if (stateData) return stateData;

    // Fallback to static data based on type and id
    const numId = parseInt(id);
    if (type === 'rental') return VEHICLES_DATA[numId];
    if (type === 'adventure') return ADVENTURE_DATA[numId];
    if (type === 'tour') return TOUR_DATA[numId];
    
    return null;
  };

  const data = getPackageData();

  // Redirect to 404 if package doesn't exist
  React.useEffect(() => {
    if (!data) {
      navigate('/not-found', { replace: true });
    }
  }, [data, navigate]);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render anything if no data (will redirect)
  if (!data) return null;

  const handleWhatsAppEnquiry = () => {
    let message = '';

    if (type === 'rental') {
      message = `Hi! I'm interested in renting a ${data.name} (${data.passengers} passengers). Please provide more details and pricing.`;
    } else if (type === 'adventure') {
      message = `Hi! I'm interested in the ${data.destination} adventure package. Please provide more details and pricing.`;
    } else if (type === 'tour') {
      message = `Hi! I'm interested in the ${data.destination} tour package. Please provide more details and pricing.`;
    }

    const whatsappUrl = `https://wa.me/917676498124?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getIcon = () => {
    if (type === 'rental') return <Car size={isMobile ? 30 : 40} color="#0C516A" />;
    if (type === 'adventure') return <Mountain size={isMobile ? 28 : 40} color="#0C516A" />;
    if (type === 'tour') return <Building2 size={isMobile ? 28 : 40} color="#0C516A" />;
  };

  const getTitle = () => {
    if (type === 'rental') return data?.name || 'Vehicle Rental';
    return `${data?.destination || 'Package'}`;
  };

  const commonFacilities = [
    { icon: User, text: 'Expert Trekking Guide' },
    { icon: Shield, text: 'First Aid & Safety Equipment' },
    { icon: CheckCircle2, text: 'All Forest Permissions' },
    { icon: CheckCircle2, text: 'Accommodation Facilities' },
  ];

  const getPageSEO = () => {
    const baseUrl = 'https://mangaloredrives.in';

    if (type === 'rental') {
      return {
        title: `${data.name} Rental in Mangalore - Book with Driver | Mangalore Drives`,
        description: `Rent ${data.name} in Mangaluru with professional driver. ${data.description}. 24/7 available, best rates. Book AC vehicle for ${data.passengers} passengers.`,
        keywords: `${data.name} rental mangalore, ${data.name} hire mangaluru, ${data.passengers} seater car rental, car with driver mangalore`,
        canonicalUrl: `${baseUrl}/package/rental/${id}`,
        ogImage: `${baseUrl}${data.icon}`
      };
    } else if (type === 'adventure') {
      return {
        title: `${data.destination} Trek Package - Trekking with Mangalore Drives`,
        description: `${data.destination} trekking package from Mangaluru. ${data.description}. ${data.difficulty} trek. Duration: ${data.duration}. Best season: ${data.bestSeason}.`,
        keywords: `${data.destination} trek, ${data.destination} trekking package, western ghats trek, trekking from mangalore, ${data.destination.toLowerCase()} trek booking`,
        canonicalUrl: `${baseUrl}/package/adventure/${id}`,
        ogImage: `${baseUrl}${data.image}`
      };
    } else if (type === 'tour') {
      return {
        title: `${data.destination} Tour Package from Mangalore - Temple Yatra`,
        description: `${data.destination} darshan package from Mangaluru. Visit ${data.deity}. ${data.description}. Includes transport, accommodation & meals.`,
        keywords: `${data.destination} package tour, ${data.destination} from mangalore, ${data.deity} darshan, temple tour package mangalore, ${data.destination.toLowerCase()} yatra`,
        canonicalUrl: `${baseUrl}/package/tour/${id}`,
        ogImage: `${baseUrl}${data.image}`
      };
    }
  };

  const pageSEO = getPageSEO();

  return (
    <>
      <SEOHead {...pageSEO} pageType="product" />

      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        padding: '40px 20px'
      }}>
        <div style={{
          maxWidth: isMobile ? '100%' : '80vw',
          margin: '0 auto'
        }}>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: isMobile ? '9px 18px' : '12px 24px',
              backgroundColor: '#ffffff',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#000000',
              cursor: 'pointer',
              marginBottom: '30px',
              transition: 'all 0.3s ease'
            }}
          >
            <ChevronLeft size={20} />
            Back
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
            }}
          >
            {type !== 'rental' && data?.image && (
              <div style={{
                height: isMobile ? '35vh' : '50vh',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img
                  alt={`${data.destination} destination`}
                  loading="eager"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src={data.image} />
                {type === 'adventure' && data?.difficulty && (
                  <div style={{
                    position: 'absolute',
                    top: isMobile ? '10px' : '30px',
                    right: isMobile ? '10px' : '30px',
                    backgroundColor: 'rgba(12, 81, 106, 0.95)',
                    color: '#ffffff',
                    padding: isMobile ? '9px 20px' : '12px 24px',
                    borderRadius: '30px',
                    fontSize: isMobile ? '12px' : '16px',
                    fontWeight: '700',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {data.difficulty}
                  </div>
                )}
              </div>
            )}

            {type === 'rental' && data?.icon && (
              <div style={{
                height: isMobile ? '30vh' : '40vh',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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
                  alt={`${data.name}`}
                  src={data.icon}
                  loading="eager"
                  style={{
                    width: '80%',
                    height: '80%',
                    objectFit: 'contain',
                  }}
                />
              </div>
            )}

            <div style={{ padding: isMobile ? '20px' : '50px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                {getIcon()}
                <h1 style={{
                  fontSize: isMobile ? '23px' : '1.8rem',
                  fontWeight: '800',
                  color: '#000000'
                }}>
                  {getTitle()}
                </h1>
              </div>

              {type === 'adventure' && data?.specialty && (
                <div style={{
                  backgroundColor: '#f0f9ff',
                  padding: '20px',
                  borderRadius: '16px',
                  marginBottom: isMobile ? '25px' : '30px',
                  borderLeft: '4px solid #0C516A'
                }}>
                  <p style={{
                    fontSize: isMobile ? '15.5px' : '18px',
                    fontWeight: '700',
                    color: '#0C516A',
                    marginBottom: '8px'
                  }}>
                    {data.specialty}
                  </p>
                  <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    color: '#334155',
                    lineHeight: '1.6'
                  }}>
                    {data.description}
                  </p>
                </div>
              )}

              {type === 'tour' && data?.deity && (
                <div style={{
                  backgroundColor: '#fef3c7',
                  padding: '20px',
                  borderRadius: '16px',
                  marginBottom: isMobile ? '25px' : '30px',
                  borderLeft: '4px solid #d97706'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '10px'
                  }}>
                    <span style={{ fontSize: isMobile ? '20px' : '24px' }}>🙏</span>
                    <p style={{
                      fontSize: isMobile ? '15.5' : '18px',
                      fontWeight: '700',
                      color: '#d97706'
                    }}>
                      {data.deity}
                    </p>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#92400e',
                    fontStyle: 'italic',
                    marginBottom: '10px'
                  }}>
                    {data.significance}
                  </p>
                  <p style={{
                    fontSize: isMobile ? '14.5' : '16px',
                    color: '#334155',
                    lineHeight: '1.5'
                  }}>
                    {data.description}
                  </p>
                </div>
              )}

              {(type === 'adventure' || type === 'tour') && data?.duration && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                  marginBottom: isMobile ? '25px' : '30px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: isMobile ? '13px' : '15px',
                    backgroundColor: '#fef3c7',
                    borderRadius: '12px'
                  }}>
                    <Clock size={isMobile ? 20 : 24} color="#92400e" />
                    <div>
                      <p style={{ fontSize: '12px', color: '#78350f', marginBottom: '2px' }}>Duration</p>
                      <p style={{ fontSize: '16px', fontWeight: '600', color: '#92400e' }}>{data.duration}</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: isMobile ? '13px' : '15px',
                    backgroundColor: type === 'adventure' ? '#dcfce7' : '#fef9c3',
                    borderRadius: '12px'
                  }}>
                    <Calendar size={isMobile ? 20 : 24} color={type === 'adventure' ? '#166534' : '#d97706'} />
                    <div>
                      <p style={{ fontSize: '12px', color: type === 'adventure' ? '#15803d' : '#92400e', marginBottom: '2px' }}>Best Season</p>
                      <p style={{ fontSize: '16px', fontWeight: '600', color: type === 'adventure' ? '#166534' : '#d97706' }}>{data.bestSeason}</p>
                    </div>
                  </div>
                </div>
              )}

              {type === 'rental' && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: isMobile ? '12px 11px' : '20px',
                  backgroundColor: '#e6f2f7',
                  borderRadius: '16px',
                  marginBottom: isMobile ? '30px' : '40px'
                }}>
                  <Users size={isMobile ? 28 : 32} color="#0C516A" />
                  <div>
                    <span style={{
                      fontSize: '14px',
                      color: '#64748b',
                      display: 'block',
                      marginBottom: '5px'
                    }}>
                      Passenger Capacity
                    </span>
                    <span style={{
                      fontSize: isMobile ? '18px' : '24px',
                      fontWeight: '700',
                      color: '#0C516A'
                    }}>
                      {data?.passengers} Passengers
                    </span>
                  </div>
                </div>
              )}

              {type === 'adventure' && (
                <>
                  <div style={{ marginBottom: '40px' }}>
                    <h2 style={{
                      fontSize: isMobile ? '20px' : '24px',
                      fontWeight: '700',
                      color: '#000000',
                      marginBottom: '20px'
                    }}>
                      Package Includes
                    </h2>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: isMobile ? '13px' : '15px'
                    }}>
                      {commonFacilities.map((facility, idx) => {
                        const IconComponent = facility.icon;
                        return (
                          <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: isMobile ? '12px' : '15px',
                            backgroundColor: '#f0fdf4',
                            borderRadius: '12px',
                            border: '1px solid #86efac'
                          }}>
                            <IconComponent size={20} color="#166534" />
                            <span style={{
                              fontSize: '16px',
                              color: '#166534',
                              fontWeight: '500'
                            }}>
                              {facility.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {data?.highlights && (
                    <div style={{ marginBottom: isMobile ? '30px' : '40px' }}>
                      <h2 style={{
                        fontSize: isMobile ? '20px' : '24px',
                        fontWeight: '700',
                        color: '#000000',
                        marginBottom: '20px'
                      }}>
                        Destination Highlights
                      </h2>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}>
                        {data.highlights.map((highlight, idx) => (
                          <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: isMobile ? '11px' : '15px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0'
                          }}>
                            <CheckCircle2 size={20} color="#0C516A" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span style={{
                              fontSize: isMobile ? '13px' : '16px',
                              color: '#334155',
                              lineHeight: '1.6'
                            }}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {data?.enroute && data.enroute.length > 0 && (
                    <div style={{
                      padding: isMobile ? '16px' : '25px',
                      backgroundColor: '#fef3c7',
                      borderRadius: '16px',
                      marginBottom: isMobile ? '20px' : '30px',
                      border: '2px solid #fbbf24'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '15px'
                      }}>
                        <MapPin size={isMobile ? 20 : 24} color="#92400e" />
                        <h3 style={{
                          fontSize: isMobile ? '16px' : '20px',
                          fontWeight: '700',
                          color: '#92400e'
                        }}>
                          En-route Attractions
                        </h3>
                      </div>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px'
                      }}>
                        {data.enroute.map((place, idx) => (
                          <div key={idx} style={{
                            padding: isMobile ? '8px 14px' : '10px 18px',
                            backgroundColor: '#fef9c3',
                            borderRadius: '20px',
                            fontSize: isMobile ? '13px' : '15px',
                            color: '#78350f',
                            fontWeight: '500',
                            border: '1px solid #fde047'
                          }}>
                            {place}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {data?.features && type !== 'adventure' && (
                <div style={{ marginBottom: isMobile ? '25px' : '30px' }}>
                  <h2 style={{
                    fontSize: isMobile ? '20px' : '24px',
                    fontWeight: '700',
                    color: '#000000',
                    marginBottom: '20px'
                  }}>
                    Package Includes
                  </h2>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: isMobile ? '13px' : '15px'
                  }}>
                    {data.features.map((feature, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: isMobile ? '12px' : '15px',
                        backgroundColor: type === 'tour' ? '#fef9c3' : '#f8fafc',
                        borderRadius: '12px',
                        border: type === 'tour' ? '1px solid #fde047' : '1px solid #e2e8f0'
                      }}>
                        <CheckCircle2 size={20} color={type === 'tour' ? '#d97706' : '#0C516A'} />
                        <span style={{
                          fontSize: '16px',
                          color: type === 'tour' ? '#78350f' : '#334155',
                          fontWeight: '500'
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {type === 'tour' && data?.highlights && (
                <div style={{ marginBottom: isMobile ? '30px' : '35px' }}>
                  <h2 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#000000',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ fontSize: isMobile ? '24px' : '28px' }}>✨</span>
                    Spiritual Highlights
                  </h2>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    {data.highlights.map((highlight, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: isMobile ? '12px' : '15px',
                        backgroundColor: '#fefcf3',
                        borderRadius: '12px',
                        border: '1px solid #fed7aa'
                      }}>
                        <span style={{ fontSize: '18px', flexShrink: 0 }}>🕉️</span>
                        <span style={{
                          fontSize: isMobile ? '14.5px' : '16px',
                          color: '#334155',
                          lineHeight: '1.55'
                        }}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {type === 'tour' && data?.enroute && data.enroute.length > 0 && (
                <div style={{
                  padding: isMobile ? '16px' : '25px',
                  backgroundColor: '#fef3c7',
                  borderRadius: '16px',
                  marginBottom: isMobile ? '25px' : '30px',
                  border: '2px solid #fbbf24'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '15px'
                  }}>
                    <MapPin size={isMobile ? 20 : 24} color="#92400e" />
                    <h3 style={{
                      fontSize: isMobile ? '16px' : '20px',
                      fontWeight: '700',
                      color: '#92400e'
                    }}>
                      Sacred Stops En-route
                    </h3>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    {data.enroute.map((place, idx) => (
                      <div key={idx} style={{
                        padding: isMobile ? '8px 14px' : '10px 18px',
                        backgroundColor: '#fef9c3',
                        borderRadius: '20px',
                        fontSize: isMobile ? '13px' : '15px',
                        color: '#78350f',
                        fontWeight: '500',
                        border: '1px solid #fde047',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span style={{ fontSize: isMobile ? '14px' : '16px' }}>🛕</span>
                        {place}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{
                padding: isMobile ? '17px' : '26px',
                backgroundColor: '#dbeafe',
                borderRadius: '16px',
                marginBottom: isMobile ? '30px' : '40px',
                border: '2px solid #93c5fd'
              }}>
                <p style={{
                  fontSize: isMobile ? '14px' : '16px',
                  color: '#1e40af',
                  lineHeight: '1.6',
                  marginBottom: '10px'
                }}>
                  <strong>Note:</strong> {type === 'rental' ? 'Professional driver included with the vehicle. Fuel charges apply as per actual usage.' : type === 'adventure' ? 'Packages are customizable based on group size and requirements. Meals and accommodation can be arranged as per your preference.' : 'Contact us for detailed pricing and group discounts for bookings of 10+ people.'}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppEnquiry}
                style={{
                  width: '100%',
                  padding: '20px',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '16px',
                  fontSize: isMobile ? '15px' : '18px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#20BA5A'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#25D366'}
              >
                <MessageCircle size={isMobile ? 20 : 24} />
                Enquire Now on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;