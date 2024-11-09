// countdown.js


function getTimeLeft(targetDate) {
    const now = new Date();
    const diff = new Date(targetDate) - now;
  
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    return { days, hours, minutes, seconds };
  }
  
  module.exports = { getTimeLeft };
  