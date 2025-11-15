import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

  return (
    <footer style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '60px 20px 30px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '40px',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        <div>
          <span style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#0C516A', /* Updated color */
            marginBottom: '20px',
            display: 'block'
          }}>
            Mangalore Drives
          </span>
          <p style={{
            color: '#94a3b8',
            lineHeight: '1.6',
            fontSize: '15px'
          }}>
            Your trusted partner for premium car rentals and unforgettable adventure experiences in Mangaluru.
          </p>
        </div>

        <div>
          <span style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '20px',
            display: 'block'
          }}>
            Contact Us
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: isMobile ? 'center' : 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={18} color="#0C516A" /> {/* Updated color */}
              <span style={{ color: '#94a3b8', fontSize: '15px' }}>Mangaluru, Karnataka</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={18} color="#0C516A" /> {/* Updated color */}
              <span style={{ color: '#94a3b8', fontSize: '15px' }}>+91 9663632802</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={18} color="#0C516A" /> {/* Updated color */}
              <span style={{ color: '#94a3b8', fontSize: '15px' }}>info@mangaloredrives.in</span>
            </div>
          </div>
        </div>

      </div>

      <div style={{
        borderTop: '1px solid #334155',
        paddingTop: '30px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#64748b', fontSize: '14px' }}>
          © 2025 Mangalore Drives. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;