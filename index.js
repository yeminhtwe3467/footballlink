const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello world from root side</h1>')
  res.send()
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

/*const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/fetch-html', async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const html = await page.content();
    await browser.close();
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch HTML content');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/
