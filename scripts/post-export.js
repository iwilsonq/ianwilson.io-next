const fs = require('fs-extra');
const getPathsObject = require('./get-paths-object');
const formatDate = require('./format-date');

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://ianwilson.io/sitemap.xml
Host: https://ianwilson.io
Disallow:`;

fs.writeFileSync('public/robots.txt', robotsTxt);
console.log('robots.txt saved!');

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${Object.keys(pathsObj)
    .map(
      path => `<url>
    <loc>https://ianwilson.io${path}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemapXml);
console.log('sitemap.xml saved!');

// GOOGLE's VERIFY HTML
const googleVerify = `google-site-verification: google8f5d91a719b65f09.html`;
fs.mkdirSync('public/sitemap.xml');
fs.writeFileSync('public/sitemap.xml/google8f5d91a719b65f09.html', googleVerify);
console.log('google8f5d91a719b65f09.html saved!');

// copy `_redirects` etc.
fs.copySync('scripts/copy-to-build/', 'public/');
