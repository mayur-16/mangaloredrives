import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Users, Mountain, Church, Car } from 'lucide-react';

const PackageDetails = () => {
  const { type, id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.package || location.state?.vehicle;

  const handleWhatsAppEnquiry = () => {
    let message = '';
    
    if (type === 'rental') {
      message = `Hi! I'm interested in renting a ${data.name} (${data.passengers} passengers). Please provide more details.`;
    } else if (type === 'adventure') {
      message = `Hi! I'm interested in the ${data.destination} adventure package (₹${data.price}/person). Please provide more details.`;
    } else if (type === 'tour') {
      message = `Hi! I'm interested in the ${data.destination} tour package (₹${data.price}/person). Please provide more details.`;
    }

    const whatsappUrl = `https://wa.me/919663632802?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getIcon = () => {
    if (type === 'rental') return <Car size={40} color="#1e40af" />;
    if (type === 'adventure') return <Mountain size={40} color="#1e40af" />;
    if (type === 'tour') return <Church size={40} color="#1e40af" />;
  };

  const getTitle = () => {
    if (type === 'rental') return data?.name || 'Vehicle Rental';
    return `Mangaluru - ${data?.destination || 'Package'}`;
  };

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
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                {data?.price && (
                  <div style={{
                    position: 'absolute',
                    top: '30px',
                    right: '30px',
                    backgroundColor: '#1e40af',
                    color: '#ffffff',
                    padding: '15px 30px',
                    borderRadius: '40px',
                    fontSize: '24px',
                    fontWeight: '700',
                    boxShadow: '0 4px 20px rgba(30, 64, 175, 0.4)'
                  }}>
                    ₹{data.price}/person
                  </div>
                )}
              </div>
            )}

            <div style={{ padding: '50px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '30px'
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

              {type === 'rental' && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '25px',
                  backgroundColor: '#eff6ff',
                  borderRadius: '16px',
                  marginBottom: '40px'
                }}>
                  <Users size={32} color="#1e40af" />
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
                      color: '#1e40af'
                    }}>
                      {data?.passengers} Passengers
                    </span>
                  </div>
                </div>
              )}

              {data?.features && (
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px'
                  }}>
                    {data.features.map((feature, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '15px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#1e40af',
                          borderRadius: '50%'
                        }} />
                        <span style={{
                          fontSize: '16px',
                          color: '#334155',
                          fontWeight: '500'
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {type === 'adventure' && (
                <div style={{
                  padding: '25px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '16px',
                  marginBottom: '40px',
                  border: '2px solid #86efac'
                }}>
                  <p style={{
                    fontSize: '16px',
                    color: '#166534',
                    lineHeight: '1.6'
                  }}>
                    <strong>Additional Benefits:</strong> Guide fees, forest fees, first aid kit, and all trekking essentials included in the package price.
                  </p>
                </div>
              )}

              <div style={{
                padding: '30px',
                backgroundColor: '#fef3c7',
                borderRadius: '16px',
                marginBottom: '40px',
                border: '2px solid #fbbf24'
              }}>
                <p style={{
                  fontSize: '16px',
                  color: '#92400e',
                  lineHeight: '1.6',
                  marginBottom: '10px'
                }}>
                  <strong>Note:</strong> {type === 'rental' ? 'Professional driver included with the vehicle. Fuel charges apply as per actual usage.' : 'All prices are per person. Group discounts available for bookings of 10+ people.'}
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