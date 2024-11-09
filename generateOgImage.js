// generateOgImage.js
const { Resvg } = require('@resvg/resvg-js');
const { generateOgSvg } = require('./ogTemplate');

function generateOgImage(targetDate) {
  const svg = generateOgSvg(targetDate);
  const resvg = new Resvg(svg);

  // Render the SVG to a PNG buffer
  return resvg.render().asPng();
}

module.exports = { generateOgImage };
