let assert = require('assert');
let calibrationTranslate = require('../src/day1').calibrationTranslate;

describe('Day 1', function () {
    describe('Translate Line', function () {
        it('1abc2 should return 12', function () {
            assert.equal(calibrationTranslate('1abc2'), 12);
        });
        it('pqr3stu8vwx should return 38', function () {
            assert.equal(calibrationTranslate('pqr3stu8vwx'), 38);
        });
        it('a1b2c3d4e5f should return 15', function () {
            assert.equal(calibrationTranslate('a1b2c3d4e5f'), 15);
        });
        it('treb7uchet should return 77', function () {
            assert.equal(calibrationTranslate('treb7uchet'), 77);
        });
    });
});
