// Import the 'express' module to create an Express.js application
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number where the server will listen
const port = 1245; // Port 1245

// Define a route for the root URL ('/') that handles GET requests
app.get('/', (request, response) => {
  // Send a plain text response with the message 'Hello Holberton School!'
  response.send('Hello Holberton School!');
});

// Make the Express application listen on the specified port
app.listen(port, () => {
  // This callback function is called when the server starts listening
  // It is currently empty but can be used for logging or initialization tasks
});

// Export the Express application so it can be used in other files or for testing
module.exports = app;

