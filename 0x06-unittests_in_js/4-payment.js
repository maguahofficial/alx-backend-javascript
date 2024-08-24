const Utils = require("./utils");

// Define a function that sends a payment request to an API
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    // Call the 'calculateNumber' function from the 'Utils' module 
    const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    
    // Output the result to the console with a descriptive message
    console.log(`The total is: ${result}`);
}

// Export the  function so it can be used in other modules
module.exports = sendPaymentRequestToApi;
