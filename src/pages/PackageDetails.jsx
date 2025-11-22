import React from 'react';
import SEOHead from '@/components/SEOHead';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, MessageCircle, Users, Mountain, Building2, Car, Shield, User, CheckCircle2, MapPin, Calendar, Clock } from 'lucide-react';

const PackageDetails = () => {
  const { type, id } = useParams();
  const [isMobile, setIsMobile] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.package || location.state?.vehicle;

  React.useEffect(() => {
     const checkMobile = () => setIsMobile(window.innerWidth < 768);
     checkMobile();
     window.addEventListener('resize', checkMobile);
     return () => window.removeEventListener('resize', checkMobile);
   }, []);


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
    if (type === 'rental') return <Car size={isMobile?30:40} color="#0C516A" />;
    if (type === 'adventure') return <Mountain size={isMobile?30:40} color="#0C516A" />;
    if (type === 'tour') return <Building2 size={isMobile?30:40} color="#0C516A" />;
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

  const tourFacilities = [
    { icon: CheckCircle2, text: 'Temple Darshan Arrangements' },
    { icon: User, text: 'Experienced Guide Support' },
    { icon: CheckCircle2, text: 'Comfortable Accommodation' },
    { icon: CheckCircle2, text: 'Traditional Vegetarian Meals' },
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
          maxWidth: isMobile?'100%':'80vw',
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
              padding: isMobile?'9px 18px':'12px 24px',
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
                height: isMobile?'35vh':'50vh',
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
                  src={data.image}/>
                {type === 'adventure' && data?.difficulty && (
                  <div style={{
                    position: 'absolute',
                    top: isMobile?'10px':'30px',
                    right: isMobile?'10px':'30px',
                    backgroundColor: 'rgba(12, 81, 106, 0.95)',
                    color: '#ffffff',
                    padding: isMobile?'9px 20px':'12px 24px',
                    borderRadius: '30px',
                    fontSize: isMobile?'12px':'16px',
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
                height: isMobile?'30vh':'40vh',
                overflow: 'hidden',
                position: 'relative'
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
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
               
              </div>
            )}

            <div style={{ padding: isMobile?'20px':'50px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                {getIcon()}
                <h1 style={{
                  fontSize: isMobile?'25px':'1.8rem',
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
                  marginBottom: '30px',
                  borderLeft: '4px solid #0C516A'
                }}>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#0C516A',
                    marginBottom: '8px'
                  }}>
                    {data.specialty}
                  </p>
                  <p style={{
                    fontSize: '16px',
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
                  marginBottom: '30px',
                  borderLeft: '4px solid #d97706'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '10px'
                  }}>
                    <span style={{ fontSize: '24px' }}>🙏</span>
                    <p style={{
                      fontSize: '18px',
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
                    fontSize: '16px',
                    color: '#334155',
                    lineHeight: '1.6'
                  }}>
                    {data.description}
                  </p>
                </div>
              )}

              {type === 'adventure' && data?.duration && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '15px',
                    backgroundColor: '#fef3c7',
                    borderRadius: '12px'
                  }}>
                    <Clock size={24} color="#92400e" />
                    <div>
                      <p style={{ fontSize: '12px', color: '#78350f', marginBottom: '2px' }}>Duration</p>
                      <p style={{ fontSize: '16px', fontWeight: '600', color: '#92400e' }}>{data.duration}</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '15px',
                    backgroundColor: '#dcfce7',
                    borderRadius: '12px'
                  }}>
                    <Calendar size={24} color="#166534" />
                    <div>
                      <p style={{ fontSize: '12px', color: '#15803d', marginBottom: '2px' }}>Best Season</p>
                      <p style={{ fontSize: '16px', fontWeight: '600', color: '#166534' }}>{data.bestSeason}</p>
                    </div>
                  </div>
                </div>
              )}

              {type === 'tour' && data?.duration && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '15px',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '15px',
                    backgroundColor: '#fef3c7',
                    borderRadius: '12px'
                  }}>
                    <Clock size={24} color="#92400e" />
                    <div>
                      <p style={{ fontSize: '12px', color: '#78350f', marginBottom: '2px' }}>Duration</p>
                      <p style={{ fontSize: '16px', fontWeight: '600', color: '#92400e' }}>{data.duration}</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '15px',
                    backgroundColor: '#fef9c3',
                    borderRadius: '12px'
                  }}>
                    <Calendar size={24} color="#d97706" />
                    <div>
                      <p style={{ fontSize: '12px', color: '#92400e', marginBottom: '2px' }}>Best Season</p>
                      <p style={{ fontSize: '16px', fontWeight: '600', color: '#d97706' }}>{data.bestSeason}</p>
                    </div>
                  </div>
                </div>
              )}

              {type === 'rental' && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: isMobile?'15px 10px':'20px',
                  backgroundColor: '#e6f2f7',
                  borderRadius: '16px',
                  marginBottom: '40px'
                }}>
                  <Users size={isMobile?28:32} color="#0C516A" />
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
                      fontSize: isMobile?'18px':'24px',
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
                      fontSize: isMobile?'20px':'24px',
                      fontWeight: '700',
                      color: '#000000',
                      marginBottom: '20px'
                    }}>
                      Package Includes
                    </h2>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '15px'
                    }}>
                      {commonFacilities.map((facility, idx) => {
                        const IconComponent = facility.icon;
                        return (
                          <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: isMobile?'12px':'15px',
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
                    <div style={{ marginBottom: '40px' }}>
                      <h2 style={{
                        fontSize: isMobile?'20px':'24px',
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
                            padding: isMobile?'12px':'15px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0'
                          }}>
                            <CheckCircle2 size={20} color="#0C516A" style={{ marginTop: '2px', flexShrink: 0 }} />
                            <span style={{
                              fontSize: '16px',
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
                      padding: isMobile?'16px':'25px',
                      backgroundColor: '#fef3c7',
                      borderRadius: '16px',
                      marginBottom: isMobile?'20px':'30px',
                      border: '2px solid #fbbf24'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '15px'
                      }}>
                        <MapPin size={isMobile?20:24} color="#92400e" />
                        <h3 style={{
                          fontSize: isMobile?'17px':'20px',
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
                            padding: isMobile?'8px 14px':'10px 18px',
                            backgroundColor: '#fef9c3',
                            borderRadius: '20px',
                            fontSize: '15px',
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
                <div style={{ marginBottom: isMobile?'25px':'30px' }}>
                  <h2 style={{
                    fontSize: isMobile?'20px':'24px',
                    fontWeight: '700',
                    color: '#000000',
                    marginBottom: '20px'
                  }}>
                    Package Includes
                  </h2>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '15px'
                  }}>
                    {data.features.map((feature, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: isMobile?'12px':'15px',
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
                <div style={{ marginBottom: isMobile?'30px':'35px' }}>
                  <h2 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#000000',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ fontSize: '28px' }}>✨</span>
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
                        padding: isMobile?'12px':'15px',
                        backgroundColor: '#fefcf3',
                        borderRadius: '12px',
                        border: '1px solid #fed7aa'
                      }}>
                        <span style={{ fontSize: '18px', flexShrink: 0 }}>🕉️</span>
                        <span style={{
                          fontSize: '16px',
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

              {type === 'tour' && data?.enroute && data.enroute.length > 0 && (
                <div style={{
                  padding: isMobile?'16px':'25px',
                  backgroundColor: '#fef3c7',
                  borderRadius: '16px',
                  marginBottom: isMobile?'25px':'30px',
                  border: '2px solid #fbbf24'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '15px'
                  }}>
                    <MapPin size={24} color="#92400e" />
                    <h3 style={{
                      fontSize: isMobile?'17px':'20px',
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
                        padding: isMobile?'8px 14px':'10px 18px',
                        backgroundColor: '#fef9c3',
                        borderRadius: '20px',
                        fontSize: '15px',
                        color: '#78350f',
                        fontWeight: '500',
                        border: '1px solid #fde047',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <span style={{ fontSize: '16px' }}>🛕</span>
                        {place}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{
                padding: isMobile?'18px':'26px',
                backgroundColor: '#dbeafe',
                borderRadius: '16px',
                marginBottom: isMobile?'30px':'40px',
                border: '2px solid #93c5fd'
              }}>
                <p style={{
                  fontSize: '16px',
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
                  fontSize: isMobile?'15px':'18px',
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
                <MessageCircle size={isMobile?20:24} />
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