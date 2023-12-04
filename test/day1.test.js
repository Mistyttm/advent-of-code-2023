let assert = require("assert");
let part1 = require("../src/day1");
let part2 = require("../src/day1partII");

describe("Day 1", function() {
    describe("Part 1", function() {
        describe("Translate Line", function() {
            it("1abc2 should return 12", function() {
                assert.equal(part1.calibrationTranslate("1abc2"), 12);
            });
            it("pqr3stu8vwx should return 38", function() {
                assert.equal(part1.calibrationTranslate("pqr3stu8vwx"), 38);
            });
            it("a1b2c3d4e5f should return 15", function() {
                assert.equal(part1.calibrationTranslate("a1b2c3d4e5f"), 15);
            });
            it("treb7uchet should return 77", function() {
                assert.equal(part1.calibrationTranslate("treb7uchet"), 77);
            });
        });
    });
    describe("Part 2", function() {
        describe("Translate Line", function() {
            it("two1nine should return 29", function() {
                assert.equal(part2.calibrationTranslate("two1nine"), 29);
            });
            it("eightwothree should return 83", function() {
                assert.equal(part2.calibrationTranslate("eightwothree"), 83);
            });
            it("abcone2threexyz should return 13", function() {
                assert.equal(part2.calibrationTranslate("abcone2threexyz"), 13);
            });
            it("xtwone3four should return 24", function() {
                assert.equal(part2.calibrationTranslate("xtwone3four"), 24);
            });
            it("4nineeightseven2 should return 42", function() {
                assert.equal(
                    part2.calibrationTranslate("4nineeightseven2"),
                    42
                );
            });
            it("zoneight234 should return 14", function() {
                assert.equal(part2.calibrationTranslate("zoneight234"), 14);
            });
            it("7pqrstsixteen should return 76", function() {
                assert.equal(part2.calibrationTranslate("7pqrstsixteen"), 76);
            });
        });
    });
});
