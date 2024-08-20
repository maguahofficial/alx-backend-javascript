// Import the 'http' module to create an HTTP server
const http = require('http');
// Define the hostname (IP address) where the server will listen
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
});

module.exports = app;
