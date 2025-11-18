import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Users, Mountain, Building2, Car, Shield, User, CheckCircle2, MapPin, Calendar, Clock } from 'lucide-react';

const PackageDetails = () => {
  const { type, id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.package || location.state?.vehicle;

  const handleWhatsAppEnquiry = () => {
    let message = '';
    
    if (type === 'rental') {
      message = `Hi! I'm interested in renting a ${data.name} (${data.passengers} passengers). Please provide more details and pricing.`;
    } else if (type === 'adventure') {
      message = `Hi! I'm interested in the ${data.destination} adventure package. Please provide more details and pricing.`;
    } else if (type === 'tour') {
      message = `Hi! I'm interested in the ${data.destination} tour package. Please provide more details and pricing.`;
    }

    const whatsappUrl = `https://wa.me/919663632802?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getIcon = () => {
    if (type === 'rental') return <Car size={40} color="#0C516A" />;
    if (type === 'adventure') return <Mountain size={40} color="#0C516A" />;
    if (type === 'tour') return <Building2 size={40} color="#0C516A" />;
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

  return (
    <>
      <Helmet>
        <title>{getTitle()} - Mangalore Drives</title>
        <meta name="description" content={`Book ${getTitle()} with Mangalore Drives. Premium service with professional drivers and complete packages.`} />
      </Helmet>

      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        padding: '40px 20px'
      }}>
        <div style={{
          maxWidth: '900px',
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
              padding: '12px 24px',
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
            <ArrowLeft size={20} />
            Back to Home
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
                height: '400px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img
                  alt={`${data.destination} destination`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src={data.image}/>
                {type === 'adventure' && data?.difficulty && (
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    right: '30px',
                    backgroundColor: 'rgba(12, 81, 106, 0.95)',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    fontSize: '16px',
                    fontWeight: '700',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {data.difficulty}
                  </div>
                )}
              </div>
            )}

            <div style={{ padding: '50px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                {getIcon()}
                <h1 style={{
                  fontSize: '36px',
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
                  padding: '25px',
                  backgroundColor: '#e6f2f7',
                  borderRadius: '16px',
                  marginBottom: '40px'
                }}>
                  <Users size={32} color="#0C516A" />
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
                      fontSize: '24px',
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
                      fontSize: '24px',
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
                            padding: '15px',
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
                        fontSize: '24px',
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
                            alignItems: 'flex-start',
                            gap: '12px',
                            padding: '15px',
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
                      padding: '25px',
                      backgroundColor: '#fef3c7',
                      borderRadius: '16px',
                      marginBottom: '40px',
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
                          fontSize: '20px',
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
                            padding: '10px 18px',
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
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{
                    fontSize: '24px',
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
                        padding: '15px',
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
                <div style={{ marginBottom: '40px' }}>
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
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '15px',
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
                  padding: '25px',
                  backgroundColor: '#fef3c7',
                  borderRadius: '16px',
                  marginBottom: '40px',
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
                      fontSize: '20px',
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
                        padding: '10px 18px',
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
                padding: '30px',
                backgroundColor: '#dbeafe',
                borderRadius: '16px',
                marginBottom: '40px',
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
                  fontSize: '18px',
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
                <MessageCircle size={24} />
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