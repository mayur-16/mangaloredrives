import React, { useState, useEffect, useRef } from 'react';
import { Car, Users, Phone, Menu, X } from 'lucide-react';

// CSS Styles
const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
    background: #f8f9fa;
  }

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 1rem 5%;
  }

  .nav-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1e40af;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-link-button {
    background: none;
    border: none;
    text-decoration: none;
    color: #1f2937;
    font-weight: 500;
    transition: color 0.3s;
    cursor: pointer;
    font-size: 1rem;
    font-family: inherit;
  }

  .nav-link-button:hover {
    color: #1e40af;
  }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: #1e40af;
  }

  .section {
    min-height: 100vh;
    padding: 100px 5% 50px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .fade-up {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .home-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .company-logo {
    width: 150px;
    height: 150px;
    object-fit: contain;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .company-name {
    font-size: 3rem;
    color: #1e40af;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .company-details {
    font-size: 1.2rem;
    color: #4b5563;
    max-width: 800px;
    line-height: 1.8;
  }

  .section-title {
    font-size: 2.5rem;
    color: #1e40af;
    margin-bottom: 3rem;
    text-align: center;
  }

  .cards-container {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    padding: 2rem 0;
    scroll-behavior: smooth;
  }

  .cards-container::-webkit-scrollbar {
    height: 8px;
  }

  .cards-container::-webkit-scrollbar-track {
    background: #e5e7eb;
    border-radius: 10px;
  }

  .cards-container::-webkit-scrollbar-thumb {
    background: #1e40af;
    border-radius: 10px;
  }

  .card {
    min-width: 320px;
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(30, 64, 175, 0.2);
  }

  .vehicle-card {
    text-align: center;
  }

  .vehicle-icon {
    width: 120px;
    height: 120px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .vehicle-icon svg {
    width: 60px;
    height: 60px;
    color: white;
  }

  .vehicle-name {
    font-size: 1.5rem;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .passenger-count {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
  }

  .package-card {
    display: flex;
    flex-direction: column;
  }

  .package-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    border-radius: 10px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.9rem;
    text-align: center;
    padding: 1rem;
  }

  .package-title {
    font-size: 1.3rem;
    color: #1f2937;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  .package-price {
    font-size: 1.5rem;
    color: #1e40af;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .package-features {
    list-style: none;
    color: #6b7280;
    margin-bottom: 1.5rem;
  }

  .package-features li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #e5e7eb;
  }

  .package-features li:last-child {
    border-bottom: none;
  }

  .powered-by {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6b7280;
    font-size: 0.9rem;
    margin-top: auto;
  }

  .powered-logo {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  .cta-button {
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(30, 64, 175, 0.3);
  }

  .details-page {
    min-height: 100vh;
    padding: 120px 5% 50px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .details-content {
    background: white;
    border-radius: 15px;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .back-button {
    background: #6b7280;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: background 0.3s;
  }

  .back-button:hover {
    background: #4b5563;
  }

  .details-header {
    margin-bottom: 2rem;
  }

  .details-title {
    font-size: 2rem;
    color: #1e40af;
    margin-bottom: 1rem;
  }

  .details-price {
    font-size: 2rem;
    color: #1e40af;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .details-features {
    background: #f3f4f6;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 2rem;
  }

  .details-features h3 {
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .details-features ul {
    list-style: none;
    color: #4b5563;
  }

  .details-features li {
    padding: 0.75rem 0;
    border-bottom: 1px solid #e5e7eb;
  }

  .details-features li:last-child {
    border-bottom: none;
  }

  .enquire-section {
    text-align: center;
    padding: 2rem;
    background: #eff6ff;
    border-radius: 10px;
  }

  .enquire-button {
    background: #25D366;
    color: white;
    border: none;
    padding: 1.25rem 3rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .enquire-button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
  }

  @media (max-width: 768px) {
    .mobile-menu-btn {
      display: block;
    }

    .nav-links {
      display: none;
    }

    .nav-links.mobile-open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .company-name {
      font-size: 2rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .card {
      min-width: 280px;
    }

    .details-content {
      padding: 2rem 1.5rem;
    }
  }
`;

// Vehicles Data
const vehicles = [
  { name: '5 Seater Car', passengers: 5, type: 'car' },
  { name: '7 Seater Car', passengers: 7, type: 'car' },
  { name: '8 Seater Car', passengers: 8, type: 'car' },
  { name: '15 Seater Tempo Traveller', passengers: 15, type: 'bus' }
];

// Adventure Packages Data
const adventurePackages = [
  {
    id: 'netravathi-peak',
    name: 'Netravathi Peak',
    destination: 'Mangaluru - Netravathi Peak',
    price: 2700,
    features: [
      '1 Night Room Stay',
      'Breakfast',
      '2 Dinners',
      'Fruits/Dry fruits while trekking',
      'Guide fees included',
      'Forest fees included',
      'First aid included'
    ],
    image: 'assets/netravathi-peak.jpg'
  },
  {
    id: 'kumara-parvatha',
    name: 'Kumara Parvatha',
    destination: 'Mangaluru - Kumara Parvatha',
    price: 2800,
    features: [
      '1 Night Room Stay',
      'Breakfast',
      '2 Dinners',
      'Fruits/Dry fruits while trekking',
      'Guide fees included',
      'Forest fees included',
      'First aid included'
    ],
    image: 'assets/kumara-parvatha.jpg'
  },
  {
    id: 'kuduremukha',
    name: 'Kuduremukha',
    destination: 'Mangaluru - Kuduremukha',
    price: 2500,
    features: [
      '1 Night Room Stay',
      'Breakfast',
      '2 Dinners',
      'Fruits/Dry fruits while trekking',
      'Guide fees included',
      'Forest fees included',
      'First aid included'
    ],
    image: 'assets/kuduremukha.jpg'
  },
  {
    id: 'ranijhari-falls',
    name: 'Ranijhari Falls',
    destination: 'Mangaluru - Ranijhari Falls',
    price: 2500,
    features: [
      '1 Night Room Stay',
      'Breakfast',
      '2 Dinners',
      'Fruits/Dry fruits while trekking',
      'Guide fees included',
      'Forest fees included',
      'First aid included'
    ],
    image: 'assets/ranijhari-falls.jpg'
  }
];

// Tour Packages Data
const tourPackages = [
  {
    id: 'thirupathi',
    name: 'Thirupathi Temple',
    destination: 'Mangaluru - Thirupathi Temple',
    price: 2700,
    features: [
      '1 Night Room Stay',
      'Breakfast',
      'Lunch',
      'Dinner'
    ],
    image: 'assets/thirupathi.jpg'
  },
  {
    id: 'manthralaya',
    name: 'Manthralaya Temple',
    destination: 'Mangaluru - Manthralaya Temple',
    price: 2600,
    features: [
      '1 Night Room Stay',
      'Breakfast',
      'Lunch',
      'Dinner'
    ],
    image: 'assets/manthralaya.jpg'
  },
  {
    id: 'shabarimala',
    name: 'Shabarimala Temple',
    destination: 'Mangaluru - Shabarimala Temple',
    price: 2400,
    features: [
      '1 Night Room Stay',
      'Breakfast',
      'Lunch',
      'Dinner'
    ],
    image: 'assets/shabarimala.jpg'
  },
  {
    id: 'shirdi',
    name: 'Shirdi Sai Baba Temple',
    destination: 'Mangaluru - Shirdi Sai Baba Temple',
    price: 2700,
    features: [
      '1 Night Room Stay',
      'Breakfast',
      'Lunch',
      'Dinner'
    ],
    image: 'assets/shirdi.jpg'
  }
];

// Scroll Animation Hook
const useScrollAnimation = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>Mangalore Drives</div>
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button className="nav-link-button" onClick={() => scrollToSection('home')}>Home</button>
          <button className="nav-link-button" onClick={() => scrollToSection('rentals')}>Rentals</button>
          <button className="nav-link-button" onClick={() => scrollToSection('adventure')}>Adventure Packages</button>
          <button className="nav-link-button" onClick={() => scrollToSection('tour')}>Tour Packages</button>
        </nav>
      </div>
    </header>
  );
};

// Home Section
const HomeSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="home" className="section home-section">
      <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
        <img 
          src="assets/mangalore_drive_logo.jpg" 
          alt="Mangalore Drives Logo" 
          className="company-logo"
        />
        <h1 className="company-name">Mangalore Drives</h1>
        <p className="company-details">
          Welcome to Mangalore Drives, your trusted partner for comfortable and reliable vehicle rentals in Mangaluru. 
          We offer a wide range of vehicles from cars to tempo travellers and mini buses, all with professional drivers. 
          Whether you're planning a family trip, a pilgrimage, or an adventure trek, we've got you covered with our 
          comprehensive rental and tour packages. Experience the beauty of Karnataka with us!
        </p>
      </div>
    </section>
  );
};

// Rentals Section
const RentalsSection = ({ setCurrentPage, setSelectedItem }) => {
  const [ref, isVisible] = useScrollAnimation();

  const handleViewDetails = (index) => {
    setSelectedItem({ type: 'rental', data: vehicles[index] });
    setCurrentPage('details');
    window.scrollTo(0, 0);
  };

  return (
    <section id="rentals" className="section">
      <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Our Vehicle Rentals</h2>
        <div className="cards-container">
          {vehicles.map((vehicle, idx) => (
            <div key={idx} className="card vehicle-card">
              <div className="vehicle-icon">
                <Car />
              </div>
              <h3 className="vehicle-name">{vehicle.name}</h3>
              <div className="passenger-count">
                <Users size={20} />
                <span>{vehicle.passengers} Passengers</span>
              </div>
              <button 
                className="cta-button"
                onClick={() => handleViewDetails(idx)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Adventure Packages Section
const AdventureSection = ({ setCurrentPage, setSelectedItem }) => {
  const [ref, isVisible] = useScrollAnimation();

  const handleViewDetails = (pkg) => {
    setSelectedItem({ type: 'adventure', data: pkg });
    setCurrentPage('details');
    window.scrollTo(0, 0);
  };

  return (
    <section id="adventure" className="section">
      <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Adventure Packages</h2>
        <div className="cards-container">
          {adventurePackages.map((pkg) => (
            <div key={pkg.id} className="card package-card">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} style={{display: 'none'}} />
                {pkg.destination}
              </div>
              <h3 className="package-title">{pkg.name}</h3>
              <p className="package-price">₹{pkg.price} per person</p>
              <ul className="package-features">
                {pkg.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="powered-by">
                <span>Powered by</span>
                <img src="assets/thenomadway_logo.jpeg" alt="The Nomad Way" className="powered-logo" />
                <span>The Nomad Way</span>
              </div>
              <button 
                className="cta-button"
                onClick={() => handleViewDetails(pkg)}
                style={{marginTop: '1rem'}}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tour Packages Section
const TourSection = ({ setCurrentPage, setSelectedItem }) => {
  const [ref, isVisible] = useScrollAnimation();

  const handleViewDetails = (pkg) => {
    setSelectedItem({ type: 'tour', data: pkg });
    setCurrentPage('details');
    window.scrollTo(0, 0);
  };

  return (
    <section id="tour" className="section">
      <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Tour Packages</h2>
        <div className="cards-container">
          {tourPackages.map((pkg) => (
            <div key={pkg.id} className="card package-card">
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} style={{display: 'none'}} />
                {pkg.destination}
              </div>
              <h3 className="package-title">{pkg.name}</h3>
              <p className="package-price">₹{pkg.price} per person</p>
              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button 
                className="cta-button"
                onClick={() => handleViewDetails(pkg)}
                style={{marginTop: 'auto'}}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Home Page
const HomePage = ({ setCurrentPage, setSelectedItem }) => {
  return (
    <>
      <HomeSection />
      <RentalsSection setCurrentPage={setCurrentPage} setSelectedItem={setSelectedItem} />
      <AdventureSection setCurrentPage={setCurrentPage} setSelectedItem={setSelectedItem} />
      <TourSection setCurrentPage={setCurrentPage} setSelectedItem={setSelectedItem} />
    </>
  );
};

// Details Page
const DetailsPage = ({ selectedItem, setCurrentPage }) => {
  if (!selectedItem) {
    setCurrentPage('home');
    return null;
  }

  const { type, data } = selectedItem;
  const isRental = type === 'rental';

  const handleEnquire = () => {
    let message = '';
    if (isRental) {
      message = `Hi, I'm interested in renting a ${data.name} (${data.passengers} passengers). Can you provide more details?`;
    } else {
      message = `Hi, I'm interested in the ${data.destination} package (₹${data.price} per person). Can you provide more details?`;
    }
    
    const whatsappUrl = `https://wa.me/919986861041?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="details-page">
      <div className="details-content">
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          ← Back to Home
        </button>
        
        <div className="details-header">
          <h1 className="details-title">
            {isRental ? data.name : data.destination}
          </h1>
          {!isRental && <p className="details-price">₹{data.price} per person</p>}
        </div>

        {!isRental && (
          <div className="details-features">
            <h3>Package Includes:</h3>
            <ul>
              {data.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
          </div>
        )}

        {isRental && (
          <div className="details-features">
            <h3>Vehicle Details:</h3>
            <ul>
              <li>✓ Passenger Capacity: {data.passengers} people</li>
              <li>✓ Professional Driver Included</li>
              <li>✓ Well-maintained Vehicles</li>
              <li>✓ Comfortable Seating</li>
              <li>✓ Flexible Booking Options</li>
            </ul>
          </div>
        )}

        <div className="enquire-section">
          <h3 style={{marginBottom: '1rem', color: '#1f2937'}}>Ready to Book?</h3>
          <p style={{marginBottom: '2rem', color: '#6b7280'}}>
            Contact us on WhatsApp for instant booking and queries
          </p>
          <button className="enquire-button" onClick={handleEnquire}>
            <Phone size={24} />
            Enquire Now on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <style>{styles}</style>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? (
        <HomePage setCurrentPage={setCurrentPage} setSelectedItem={setSelectedItem} />
      ) : (
        <DetailsPage selectedItem={selectedItem} setCurrentPage={setCurrentPage} />
      )}
    </>
  );
};

export default App;