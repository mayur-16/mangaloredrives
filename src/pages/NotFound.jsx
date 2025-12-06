import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>404 - Page Not Found | Mangalore Drives</title>
      </Helmet>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '120px',
          fontWeight: '800',
          color: '#0C516A',
          marginBottom: '20px'
        }}>404</h1>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#000000',
          marginBottom: '15px'
        }}>Page Not Found</h2>
        <p style={{
          fontSize: '18px',
          color: '#64748b',
          marginBottom: '40px',
          maxWidth: '500px'
        }}>
          Sorry, the package you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '15px 30px',
            backgroundColor: '#0C516A',
            color: '#ffffff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#0A4257'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0C516A'}
        >
          <Home size={20} />
          Back to Home
        </button>
      </div>
    </>
  );
};

export default NotFound;