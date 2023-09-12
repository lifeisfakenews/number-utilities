function isOdd(v) {
    const n = Math.abs(v);
    if (isNaN(n)) throw new TypeError("Value is not a number");
    if (!Number.isInteger(n)) throw new Error("Value is not an integer");
    if (!Number.isSafeInteger(n)) throw new Error("value exceeds maximum safe integer");
    return (n % 2) === 1;
};
function isEven(v) {
    const n = Math.abs(v);
    if (isNaN(n)) throw new TypeError("Value is not a number");
    if (!Number.isInteger(n)) throw new Error("Value is not an integer");
    if (!Number.isSafeInteger(n)) throw new Error("value exceeds maximum safe integer");
    return (n % 2) === 0;
};
function isPrime(v) {
    const n = Math.abs(v);
    if (isNaN(n)) throw new TypeError("Value is not a number");
    if (!Number.isInteger(n)) throw new Error("Value is not an integer");
    if (!Number.isSafeInteger(n)) throw new Error("value exceeds maximum safe integer");
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
};
function isSquare(v) {
    if (isNaN(v)) throw new TypeError("Value is not a number");
    if (Math.abs(v) !== v) throw new Error("Value is negative");
    if (!Number.isInteger(v)) throw new Error("Value is not an integer");
    if (!Number.isSafeInteger(v)) throw new Error("value exceeds maximum safe integer");
    const r = Math.sqrt(v);
    return parseInt(r) === r;
};
function isCube(v) {
    if (isNaN(v)) throw new TypeError("Value is not a number");
    if (Math.abs(v) !== v) throw new Error("Value is negative");
    if (!Number.isInteger(v)) throw new Error("Value is not an integer");
    if (!Number.isSafeInteger(v)) throw new Error("value exceeds maximum safe integer");
    const r = Math.cbrt(v);
    return parseInt(r) === r;
};

module.exports = { isOdd, isEven, isPrime, isSquare, isCube };