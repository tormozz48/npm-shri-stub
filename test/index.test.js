'use strict';

const assert = require('chai').assert;
const shri = require('..');

describe('npm-shri-stub', () => {
    it('should calculate sum of given numbers', () => {
        assert.equal(shri.add(1, 2), 3);
    });

    it('should calculate difference between given numbers', () => {
        assert.equal(shri.subtract(3, 2), 1);
    });

    it('should multiply given numbers', () => {
        assert.equal(shri.multiply(2, 3), 6);
    });

    it('should divide given numbers', () => {
        assert.equal(shri.divide(4, 2), 2);
    });
});
