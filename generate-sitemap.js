const fs = require('fs');
const path = require('path');

// Configure your application's domain here
const DOMAIN = process.env.DOMAIN || 'https://www.toffanoah.com';

// Define the routes and sections of your Single Page Application
// As you add true child routes later (e.g., /about, /projects/:id)
// you can add them to this array or dynamically fetch them from an API.
// Note: Google ignores anchor hashes (/#about) for indexing, so only distinct paths are included.
const routes = [
  '/'
];

function generateSitemap() {
  console.log('Generating dynamic sitemap...');
  const currentDate = new Date().toISOString();
  
  const urls = routes.map(route => {
    // The root route usually has highest priority
    const priority = route === '/' ? '1.0' : '0.8';
    return `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  // Write sitemap to the public/ directory so Angular automatically serves and builds it.
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)){
      fs.mkdirSync(publicDir);
  }
  
  const outputPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemapXml, 'utf8');
  console.log(`✅ Sitemap created successfully at ${outputPath}`);
}

generateSitemap();
