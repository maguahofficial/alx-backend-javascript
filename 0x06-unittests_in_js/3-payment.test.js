// Import necessary modules for testing
const { describe, it } = require("mocha"); 
const sinon = require("sinon"); 
const sendPaymentRequestToApi = require("./3-payment"); 
const Utils = require("./utils");
const assert = require("assert");

// This Defines a test suite named "sendPaymentRequestToApi"
describe("sendPaymentRequestToApi", function() {
    // Define a test case within the suite
    it("check that Utils.calculateNumber was called once", function() {
        // Creates a spy for the 'calculateNumber' method of the 'Utils' module
        const spy = sinon.spy(Utils, "calculateNumber");

        // Calls the function to be tested
        sendPaymentRequestToApi(50, 24.52);

        // The Assert that the spy was called exactly once
        assert(spy.calledOnce);

        // Restores the original 'calculateNumber' method
        spy.restore();
    });
});
