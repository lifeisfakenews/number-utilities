const utils = require('./index.js');

test('4 should be even', () => {
    expect(utils.isEven(4)).toBe(true);
});
test('3 should not be even', () => {
    expect(utils.isEven(3)).toBe(false);
});

test('5 should be odd', () => {
    expect(utils.isOdd(5)).toBe(true);
});
test('2 should not be odd', () => {
    expect(utils.isOdd(2)).toBe(false);
});

test('5 should be prime', () => {
    expect(utils.isPrime(5)).toBe(true);
});
test('1 should not be prime', () => {
    expect(utils.isPrime(1)).toBe(false);
});
test('9 should not be prime', () => {
    expect(utils.isPrime(9)).toBe(false);
});

test('1 should be square', () => {
    expect(utils.isSquare(1)).toBe(true);
});
test('9 should be square', () => {
    expect(utils.isSquare(9)).toBe(true);
});
test('5 should not be square', () => {
    expect(utils.isSquare(5)).toBe(false);
});

test('1 should be cube', () => {
    expect(utils.isCube(1)).toBe(true);
});
test('8 should be cube', () => {
    expect(utils.isCube(8)).toBe(true);
});
test('5 should not be cube', () => {
    expect(utils.isCube(5)).toBe(false);
});
