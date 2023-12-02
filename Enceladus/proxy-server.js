// proxy-server.js
const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
  const proxy = https.request('https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA18435.jpg', (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxy, { end: true });
});

const PORT = 8081; // Choose any available port

server.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
