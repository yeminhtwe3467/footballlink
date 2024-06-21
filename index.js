const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('<h1>Api is ready</h1>')
  res.send()
})

app.get('/fetch-html', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      'args' : [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--single-process',
      ]
    });
    const page = await browser.newPage();
    await page.goto('https://yeminhtwe.com/', { waitUntil: 'networkidle2' });
    const html = await page.content();
    await browser.close();
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send(`${error}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});