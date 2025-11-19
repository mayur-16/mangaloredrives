import React from 'react';
import { MapPin, Instagram, Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react';

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
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      padding: isMobile ? '50px 20px 20px' : '80px 40px 30px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '40px' : '60px',
          marginBottom: '50px',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          {/* Company Info */}
          <div>
            <span style={{
              fontSize: '28px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #0C516A, #ADD8E6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '20px',
              display: 'block'
            }}>
              Mangalore Drives
            </span>
            <p style={{
              color: '#a0a0a0',
              lineHeight: '1.7',
              fontSize: '15px',
              marginBottom: '25px',
              maxWidth: '350px',
              margin: isMobile ? '0 auto 25px' : '0 0 25px 0'
            }}>
              Your trusted partner for premium car rentals and unforgettable adventure experiences in coastal Karnataka.
            </p>
            
            {/* Social Media */}
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <a 
                href="https://www.instagram.com/the._nomad._way/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '45px',
                  height: '45px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #2a2a2a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E1306C';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Instagram size={20} color="#ffffff" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100084512079639" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '45px',
                  height: '45px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #2a2a2a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1877F2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Facebook size={20} color="#ffffff" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '45px',
                  height: '45px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #2a2a2a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f63711ff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Youtube size={20} color="#ffffff" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '25px',
              color: '#ffffff'
            }}>
              Quick Links
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: isMobile ? 'center' : 'flex-start'
            }}>
              {['Home', 'Vehicle Rentals', 'Adventure Packages', 'Temple Tours'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  style={{
                    color: '#a0a0a0',
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#0C516A'}
                  onMouseLeave={(e) => e.target.style.color = '#a0a0a0'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '25px',
              color: '#ffffff'
            }}>
              Our Services
            </h3>
            <nav aria-label="Services" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: isMobile ? 'center' : 'flex-start'
            }}>
              {[
                { text: 'Car Rental with Driver', href: '#vehicle-rentals' },
                { text: 'Tempo Traveller Hire', href: '#vehicle-rentals' },
                { text: 'Trekking Packages', href: '#adventure-packages' },
                { text: 'Temple Tour Packages', href: '#temple-tours' },
                { text: 'Outstation Tours', href: '#temple-tours' },
                { text: 'Airport Transfers', href: '#vehicle-rentals' }
              ].map((service) => (
                <a
                  key={service.text}
                  href={service.href}
                  style={{
                    color: '#a0a0a0',
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#0C516A'}
                  onMouseLeave={(e) => e.target.style.color = '#a0a0a0'}
                >
                  {service.text}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '25px',
              color: '#ffffff'
            }}>
              Get In Touch
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              alignItems: isMobile ? 'center' : 'flex-start'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <MapPin size={20} color="#0C516A" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{
                  color: '#a0a0a0',
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}>
                  Mangaluru, Karnataka<br />India - 575001
                </span>
              </div>
              
              
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          backgroundColor: '#2a2a2a',
          marginBottom: '30px'
        }} />

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px'
        }}>
          <p style={{
            color: '#6a6a6a',
            fontSize: '14px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            © {new Date().getFullYear()} Mangalore Drives. All rights reserved.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '25px',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            
            <span style={{
              color: '#6a6a6a',
              fontSize: '14px'
            }}>
              Made with ❤️ in Mangaluru
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;