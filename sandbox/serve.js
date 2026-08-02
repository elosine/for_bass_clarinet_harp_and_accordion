// Tiny static server for the sandbox — Web MIDI requires a secure context,
// and localhost qualifies (file:// does not). No dependencies.
//   node sandbox/serve.js   →  http://localhost:4600
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4600;
const ROOT = __dirname;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let file = path.normalize(path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`sandbox at http://localhost:${PORT}`));
