const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

// Define a test suite named "sendPaymentRequestToApi"
describe("sendPaymentRequestToApi", function() {
    // Define a test case within the suite
    it("check that Utils.calculateNumber is stubbed", function() {
// Create a spy for 'console.log' to verify that it is
	    // called with specific arguments
        const spy = sinon.spy(console, "log");

        // Creates a stub for 'Utils.calculateNumber' to control its behavior
        // This stub will return 10 when called
        const stub = sinon.stub(Utils, "calculateNumber").returns(10);

        // Calls the function to be tested
        sendPaymentRequestToApi(100, 20);

        // The Assert that 'console.log' was called once with
	    // the expected argument
        assert(spy.withArgs("The total is: 10").calledOnce);

        // Assert that 'calculateNumber' was called once 
	// with the specified arguments
        assert(stub.withArgs("SUM", 100, 20).calledOnce);

        // Restore the original 'console.log' and 'calculateNumber' methods
        spy.restore();
        stub.restore();
    });
});
