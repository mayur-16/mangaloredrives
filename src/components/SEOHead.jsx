import React from 'react';
import { Helmet } from 'react-helmet';

// Create a reusable SEO component
const SEOHead = ({ 
  title = "Car Rental Mangalore | Trekking Packages | Temple Tours - Mangalore Drives",
  description = "Premium car rental services in Mangaluru with professional drivers. Rent sedans, SUVs, tempo travellers & mini buses. Book trekking packages to Western Ghats & temple tour packages to Tirupati, Shirdi, Sabarimala. 24/7 service, best rates.",
  keywords = "car rental mangalore, car hire mangaluru, tempo traveller mangalore, mini bus rental mangalore, trekking packages western ghats, kumara parvatha trek, netravathi peak trek, temple tour packages, tirupati tour package, shirdi package tour, car rental with driver mangalore, outstation cab mangalore, airport taxi mangalore",
  canonicalUrl = "https://mangaloredrives.in",
  ogImage = "https://mangaloredrives.in/og-image.webp",
  pageType = "website"
}) => {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://mangaloredrives.in/#organization",
        "name": "Mangalore Drives",
        "alternateName": "Mangalore Drives Car Rental",
        "url": "https://mangaloredrives.in",
        "logo": "https://mangaloredrives.in/logo.png",
        "description": "Premium car rental and adventure tour services in Mangaluru",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mangaluru",
          "addressRegion": "Karnataka",
          "postalCode": "575001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.9141",
          "longitude": "74.8560"
        },
        "telephone": "+91-7676498124",
        "priceRange": "$$",
        "openingHours": "Mo-Su 00:00-23:59",
        "image": [
          "https://mangaloredrives.in/logos/mangalore_drives_logo_png.png"
        ],
        "sameAs": [
          "https://www.instagram.com/the._nomad._way/",
          "https://www.facebook.com/profile.php?id=100084512079639"
        ],
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "12.9141",
            "longitude": "74.8560"
          },
          "geoRadius": "500000"
        }
      },
      {
        "@type": "TravelAgency",
        "@id": "https://mangaloredrives.in/#travelagency",
        "name": "Mangalore Drives",
        "url": "https://mangaloredrives.in",
        "telephone": "+91-7676498124",
        "priceRange": "$$"
      },
      {
        "@type": "AutoRental",
        "@id": "https://mangaloredrives.in/#autorental",
        "name": "Mangalore Drives Car Rental",
        "url": "https://mangaloredrives.in/#vehicle-rentals",
        "brand": {
          "@type": "Brand",
          "name": "Mangalore Drives"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://mangaloredrives.in/#website",
        "url": "https://mangaloredrives.in",
        "name": "Mangalore Drives",
        "publisher": {
          "@id": "https://mangaloredrives.in/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mangaloredrives.in/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mangaloredrives.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mangaloredrives.in"
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:site_name" content="Mangalore Drives" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Mangaluru" />
      <meta name="geo.position" content="12.9141;74.8560" />
      <meta name="ICBM" content="12.9141, 74.8560" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en-IN" />
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;