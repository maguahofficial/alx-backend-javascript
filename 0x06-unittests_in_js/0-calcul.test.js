// Import the 'assert' module for writing test assertions
const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {
// (Test case) Check if the function rounds 1 and 2 and returns the sum
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1, 2);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1.4, 2.2);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1.6, 2.7);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(0, 0);
      assert.strictEqual(res, 0);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(-1.6, -1.7);
      assert.strictEqual(res, -4);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(-1.4, -1.3);
	assert.strictEqual(res, -2);
    });
});
