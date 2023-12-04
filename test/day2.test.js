let assert = require('assert');
let calibrationTranslate = require('../src/day2').calibrationTranslate;
let translateDocument = require('../src/day2').translateDocument;

describe('Day 2', function () {
    describe('Translate Line', function () {
        it('two1nine should return 29', function () {
            assert.equal(calibrationTranslate('two1nine'), 29);
        });
        it('eightwothree should return 83', function () {
            assert.equal(calibrationTranslate('eightwothree'), 83);
        });
        it('abcone2threexyz should return 13', function () {
            assert.equal(calibrationTranslate('abcone2threexyz'), 13);
        });
        it('xtwone3four should return 24', function () {
            assert.equal(calibrationTranslate('xtwone3four'), 24);
        });
        it('4nineeightseven2 should return 42', function () {
            assert.equal(calibrationTranslate('4nineeightseven2'), 42);
        });
        it('zoneight234 should return 14', function () {
            assert.equal(calibrationTranslate('zoneight234'), 14);
        });
        it('7pqrstsixteen should return 76', function () {
            assert.equal(calibrationTranslate('7pqrstsixteen'), 76);
        });
    });
    describe('Sum of file', function() {
        it('File should return 281', function () {
            assert.equal(translateDocument('../data/day2.test.txt'), 281);
        });
    });
});
