import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { MapPin, Phone, Mail } from 'lucide-react';
const Hero = () => {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return <section id="home" ref={ref} style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #ADD8E6, #0C516A)', /* Updated gradient */
    padding: isMobile ? '120px 20px 60px' : '100px 40px 60px',
    position: 'relative',
    overflow: 'hidden'
  }}>
      <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    }} />

      <div style={{
      maxWidth: '1400px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '60px' : '80px',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      textAlign: isMobile ? 'center' : 'left'
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMobile ? 'center' : 'flex-start'
      }}>
          <img alt="Mangalore Drives modern logo" style={{
          width: '180px',
          height: 'auto',
          marginBottom: '30px',
          borderRadius: '20px',
          // boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
        }} src="https://horizons-cdn.hostinger.com/0ad8efd7-7eaf-4e43-9362-605452a45d21/cropped_circle_image-0y5xU.png" />

          <h1 style={{
          fontSize: isMobile ? '48px' : '56px',
          fontWeight: '800',
          color: '#ffffff',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
            Mangalore Drives
          </h1>
          <p style={{
          fontSize: isMobile ? '18px' : '20px',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '40px',
          lineHeight: '1.6',
          maxWidth: '600px'
        }}>
            Your trusted partner for premium car rentals and unforgettable adventure experiences in Mangaluru. We provide comfortable vehicles with professional drivers and curated tour packages.
          </p>

          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: isMobile ? 'center' : 'flex-start'
        }}>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
              <MapPin size={24} color="#ffffff" />
              <span style={{
              color: '#ffffff',
              fontSize: '16px'
            }}>Mangaluru, Karnataka</span>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
              <Phone size={24} color="#ffffff" />
              <span style={{
              color: '#ffffff',
              fontSize: '16px'
            }}>+91 9663632802</span>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
              <Mail size={24} color="#ffffff" />
              <span style={{
              color: '#ffffff',
              fontSize: '16px'
            }}>info@mangaloredrives.in</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: 50
      }} animate={isInView ? {
        opacity: 1,
        x: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.2
      }} style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }}>
          <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
            <h3 style={{
            fontSize: isMobile ? '32px' : '40px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '10px'
          }}>500+</h3>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px'
          }}>Happy Customers</p>
          </div>
          <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
            <h3 style={{
            fontSize: isMobile ? '32px' : '40px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '10px'
          }}>50+</h3>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px'
          }}>Vehicles</p>
          </div>
          <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
            <h3 style={{
            fontSize: isMobile ? '32px' : '40px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '10px'
          }}>24/7</h3>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px'
          }}>Support</p>
          </div>
          <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
            <h3 style={{
            fontSize: isMobile ? '32px' : '40px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '10px'
          }}>100%</h3>
            <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px'
          }}>Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;