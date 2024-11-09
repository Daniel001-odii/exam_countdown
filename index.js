// server.js
const express = require('express');
const { getTimeLeft } = require('./countdown');
const { generateOgImage } = require('./generateOgImage');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

const targetDate = new Date('2024-12-14');

// Serve the frontend
app.get('/', (req, res) => {
  const timeLeft = getTimeLeft(targetDate);
  res.render('index', { timeLeft, targetDate });
});

// Serve dynamic OG image
app.get('/og-image.png', async (req, res) => {
  try {
    const imageBuffer = await generateOgImage(targetDate);
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (error) {
    console.error("Error generating OG image:", error);
    res.status(500).send("Failed to generate OG image");
  }
});

app.listen(port, () => {
  console.log(`Countdown app listening at http://localhost:${port}`);
});
