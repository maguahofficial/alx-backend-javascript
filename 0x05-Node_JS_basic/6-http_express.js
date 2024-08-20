// Import the 'express' module to create an Express.js application
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number where the server will listen
const port = 1245; // Port 1245

// Define a route for the root URL ('/') that sends a response to the client
app.get('/', (request, response) => {
  // Send a plain text response with the message 'Hello Holberton School!'
  response.send('Hello Holberton School!');
});

// Make the Express application listen on the specified port
app.listen(port, () => {
  // This callback function can be used to log a message or perform an action when the server starts
  // Currently, it does nothing
});

// Export the Express application so it can be used in other files/modules
module.exports = app;

