// tools/generate-sitemap.js
import { writeFileSync } from 'fs';
import { join } from 'path';

const baseUrl = 'https://mangaloredrives.in';
const currentDate = new Date().toISOString().split('T')[0];

// Define all your packages
const vehicles = [
  { id: 1, name: '5 Seater Car' },
  { id: 2, name: '7 Seater Car' },
  { id: 3, name: '8 Seater Car' },
  { id: 4, name: 'Mini Bus' }
];

const adventures = [
  { id: 1, name: 'Netravathi Peak' },
  { id: 2, name: 'Kumara Parvatha' },
  { id: 3, name: 'Kuduremukha' },
  { id: 4, name: 'Ranijhari Falls' }
];

const tours = [
  { id: 1, name: 'Tirupati Balaji Temple' },
  { id: 2, name: 'Mantralayam' },
  { id: 3, name: 'Sabarimala Temple' },
  { id: 4, name: 'Shirdi Sai Baba Temple' }
];

const generateSitemap = () => {
  const urls = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      loc: `${baseUrl}/#vehicle-rentals`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/#adventure-packages`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/#temple-tours`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    }
  ];

  // Add vehicle rental pages
  vehicles.forEach(vehicle => {
    urls.push({
      loc: `${baseUrl}/package/rental/${vehicle.id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  // Add adventure package pages
  adventures.forEach(adventure => {
    urls.push({
      loc: `${baseUrl}/package/adventure/${adventure.id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  // Add tour package pages
  tours.forEach(tour => {
    urls.push({
      loc: `${baseUrl}/package/tour/${tour.id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();