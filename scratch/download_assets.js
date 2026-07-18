const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  'assets/images/logo.png',
  'assets/images/about-us.jpg',
  'assets/icons/seo.png',
  'assets/icons/google-ads.png',
  'assets/icons/meta.png',
  'assets/icons/linkedin.png',
  'assets/icons/instagram.png',
  'assets/icons/web.png',
  'assets/images/pay-per-click.jpg',
  'assets/images/social-media-marketing.png',
  'assets/images/search-engine-optimization.png',
  'assets/images/warning-1.png',
  'assets/images/warning-2.png',
  'assets/images/ads-expert.jpg',
  'assets/images/team.jpg',
  'assets/icons/google.png',
  'assets/icons/google-icon.png',
  'assets/images/left-quote.png',
  'assets/icons/map.png',
  'assets/icons/shopping.png',
  'assets/icons/analytics.png',
  'assets/icons/online-banking.png',
  'assets/videos/hero.mp4'
];

const targetBase = path.join(__dirname, '..', 'public');
const baseUrl = 'https://manikdigital.com/';

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    // Ensure directory exists
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Starting assets download...');
  for (const asset of assets) {
    const url = `${baseUrl}${asset}`;
    const dest = path.join(targetBase, asset);
    console.log(`Downloading ${url} -> ${dest}...`);
    try {
      await downloadFile(url, dest);
      console.log(`Successfully downloaded ${asset}`);
    } catch (err) {
      console.error(`Error downloading ${asset}:`, err.message);
    }
  }
  console.log('Assets download completed.');
}

main();
