// Import the 'Utils' module, which contains utility functions
const Utils = require("./utils");

// Define a function that sends a payment request to an API
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Calls the 'calculateNumber' function from the 'Utils' module
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    
    // Log the result to the console with a descriptive message
    console.log(`The total is: ${result}`);
}

// Export the function so it can be used in other modules
module.exports = sendPaymentRequestToApi;
