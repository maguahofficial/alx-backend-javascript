//This Import the 'assert' module for writing test assertions
const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {
//This Check if the function rounds 1 and 2 and returns the sum
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1, 2);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1.6, 2.5);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(1.3, 2.8);
      assert.strictEqual(res, 4);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(0, 0);
      assert.strictEqual(res, 0);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(-1.3, -1.6);
      assert.strictEqual(res, -3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber(-1.2, -1.1);
	assert.strictEqual(res, -2);
    });
});
