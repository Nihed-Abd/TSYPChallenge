const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

app.use('/', (req, res) => {
  const url = 'https://www.solarsystemscope.com/textures/download/8k_earth_daymap.jpg';
  req.pipe(request(url)).pipe(res);
});

app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});
