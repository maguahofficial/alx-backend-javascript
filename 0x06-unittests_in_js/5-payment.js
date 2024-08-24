const Utils = require("./utils");
// Import the 'Utils' module, which contains utility functions

function sendPaymentRequestToApi (totalAmount, totalshipping) {
    const result = Utils.calculateNumber("SUM", totalAmount, totalshipping);
	// Output the result to the console with a descriptive message
    console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
