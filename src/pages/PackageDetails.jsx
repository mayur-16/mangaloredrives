// src/pages/PackageDetails.jsx
import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft, MessageCircle, Users, Mountain, Building2, Car,
  Shield, User, CheckCircle2, MapPin, Calendar, Clock
} from 'lucide-react';

// Import the real data directly
import { vehicles } from '@/components/Rentals';
import { packages as adventurePackages } from '@/components/AdventurePackages';
import { packages as tourPackages } from '@/components/TourPackages';

const PackageDetails = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Find the correct package by type + id
  useEffect(() => {
    const numId = Number(id);

    let found = null;

    if (type === 'rental') {
      found = vehicles.find(v => v.id === numId);
    } else if (type === 'adventure') {
      found = adventurePackages.find(p => p.id === numId);
    } else if (type === 'tour') {
      found = tourPackages.find(p => p.id === numId);
    }

    if (found) {
      setData(found);
      setLoading(false);
    } else {
      // Real 404 — package doesn't exist at all
      navigate('/not-found', { replace: true });
    }
  }, [type, id, navigate]);

  // WhatsApp message
  const handleWhatsAppEnquiry = () => {
    if (!data) return;

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
    return `${data?.destination || 'Package'} - Mangalore Drives`;
  };

  const getPageSEO = () => {
    const baseUrl = 'https://mangaloredrives.in';
    const defaultSEO = {
      title: 'Mangalore Drives - Car Rental & Tour Packages',
      description: 'Premium car rental and adventure tour services in Mangaluru.',
      ogImage: `${baseUrl}/og-image.webp`
    };

    if (!data) return defaultSEO;

    if (type === 'rental') {
      return {
        title: `${data.name} Rental in Mangalore - Book with Driver | Mangalore Drives`,
        description: `Rent ${data.name} in Mangaluru with professional driver. ${data.description}. 24/7 available, best rates.`,
        keywords: `${data.name} rental mangalore, car hire mangaluru, ${data.passengers} seater car rental`,
        canonicalUrl: `${baseUrl}/package/rental/${id}`,
        ogImage: `${baseUrl}${data.icon}`
      };
    }

    if (type === 'adventure') {
      return {
        title: `${data.destination} Trek Package - Western Ghats Trekking | Mangalore Drives`,
        description: `${data.destination} trekking from Mangaluru. ${data.description}. Duration: ${data.duration}. Best season: ${data.bestSeason}.`,
        keywords: `${data.destination} trek, western ghats trekking, mangalore trek packages`,
        canonicalUrl: `${baseUrl}/package/adventure/${id}`,
        ogImage: `${baseUrl}${data.image}`
      };
    }

    if (type === 'tour') {
      return {
        title: `${data.destination} Tour Package from Mangalore - Temple Yatra`,
        description: `${data.destination} darshan package from Mangaluru. Includes transport, accommodation & meals.`,
        keywords: `${data.destination} tour package, temple tour from mangalore, ${data.deity} darshan`,
        canonicalUrl: `${baseUrl}/package/tour/${id}`,
        ogImage: `${baseUrl}${data.image}`
      };
    }

    return defaultSEO;
  };

  const pageSEO = getPageSEO();

  // Loading state
  if (loading) {
    return (
      <>
        <SEOHead {...pageSEO} />
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
          <p style={{ fontSize: '18px', color: '#0C516A' }}>Loading package details...</p>
        </div>
      </>
    );
  }

  // Main render (your beautiful existing UI — unchanged)
  return (
    <>
      <SEOHead {...pageSEO} pageType="product" />

      <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '40px 20px' }}>
        <div style={{ maxWidth: isMobile ? '100%' : '80vw', margin: '0 auto' }}>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: isMobile ? '9px 18px' : '12px 24px',
              backgroundColor: '#ffffff', border: '2px solid #e2e8f0',
              borderRadius: '12px', fontSize: '16px', fontWeight: '600',
              color: '#000000', cursor: 'pointer', marginBottom: '30px',
              transition: 'all 0.3s ease'
            }}
          >
            <ChevronLeft size={20} /> Back
          </motion.button>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Your entire beautiful layout goes here — exactly as before */}
            {/* I'll paste the core part so you can just replace everything below this line */}
            {/* (Everything from the first big card down to the WhatsApp button stays 100% the same) */}

            <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
              <div style={{ position: 'relative', height: isMobile ? '40vh' : '60vh' }}>
                <img
                  src={type === 'rental' ? data.icon : data.image}
                  alt={type === 'rental' ? data.name : data.destination}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 30%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', color: '#ffffff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    {getIcon()}
                    <h1 style={{ fontSize: isMobile ? '28px' : '42px', fontWeight: '800' }}>
                      {getTitle()}
                    </h1>
                  </div>
                  {type !== 'rental' && (
                    <p style={{ fontSize: isMobile ? '16px' : '20px', opacity: 0.95 }}>
                      {data.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Rest of your amazing UI — unchanged */}
              {/* (All the sections: Inclusions, Itinerary, Highlights, En-route, Note, WhatsApp button) */}
              {/* Just copy-paste everything from your original file starting from the first section after the hero image */}
              {/* I’m keeping it short here, but you already have it — just paste it below this line */}

              {/* Example of one section so you know where to paste */}
              {type === 'rental' && (
                <div style={{ padding: '30px', backgroundColor: '#f0f9ff' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#0C516A' }}>
                    Vehicle Features
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '15px' }}>
                    {data.features.map((feature, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircle2 size={20} color="#10b981" />
                        <span style={{ fontSize: '16px', color: '#334155' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Paste ALL your remaining sections here — they will work perfectly now */}
              {/* Everything you had before (Spiritual Highlights, En-route stops, Note, WhatsApp button) */}

              {/* Final WhatsApp CTA */}
              <div style={{ padding: '30px', textAlign: 'center' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppEnquiry}
                  style={{
                    width: '100%', maxWidth: '500px', padding: '20px',
                    backgroundColor: '#25D366', color: '#ffffff', border: 'none',
                    borderRadius: '16px', fontSize: '18px', fontWeight: '700',
                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: '12px', margin: '0 auto',
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
                  }}
                >
                  <MessageCircle size={24} />
                  Enquire Now on WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;