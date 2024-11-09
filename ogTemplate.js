// ogTemplate.js
const { getTimeLeft } = require('./countdown');

function generateOgSvg(targetDate) {
  const { days, hours, minutes, seconds } = getTimeLeft(targetDate);

  return `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="black"/>
      <text x="50%" y="40%" font-size="50" fill="white" text-anchor="middle" font-family="Arial">Countdown to Exams</text>
      <text x="50%" y="60%" font-size="100" fill="white" text-anchor="middle" font-family="Arial">
        ${days}d ${hours}h ${minutes}m ${seconds}s
      </text>
    </svg>
  `;
}

module.exports = { generateOgSvg };
