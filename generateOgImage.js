// generateOgImage.js
const puppeteer = require('puppeteer');
const { getTimeLeft } = require('./countdown');

const targetDate = new Date('2023-12-31');

async function generateOgImage(targetDate) {
  const { days, hours, minutes, seconds } = getTimeLeft(targetDate);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // HTML template for OG image
  const htmlContent = `
    <html>
    <body style="display: flex; justify-content: center; align-items: center; width: 1200px; height: 630px; background-color: black; color: white; font-family: Arial;">
      <div style="text-align: center;">
        <h1 style="font-size: 50px; margin: 0;">Countdown to Event</h1>
        <p style="font-size: 80px; margin: 10px 0;">${days}d ${hours}h ${minutes}m ${seconds}s</p>
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlContent);
  await page.setViewport({ width: 1200, height: 630 });

  // Take a screenshot of the content
  const buffer = await page.screenshot({ type: 'png' });

  await browser.close();
  return buffer;
}

module.exports = { generateOgImage };
