const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} received.`);

    if (req.url === '/') {
        // Serve the index.html file
        const filePath = path.join(__dirname, 'index.html');
        const readStream = fs.createReadStream(filePath);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    } else {
        // Serve a 404 page for any other request
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
