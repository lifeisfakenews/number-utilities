<h1 align="center">Number Utilities</h3>
<h2 align="center">number-utilities</h3>
<p align="center">
    Number Tools & Utilities for JavaScript
    <br>
    <a href="https://github.com/lifeisfakenews/number-utilities/issues/new&labels=bug">Bug Report</a>
    ·
    <a href="https://github.com/lifeisfakenews/number-utilities/issues/new&labels=feature">Feature Request</a>
</p>

## Installation

```npm install number-utilities --save```

or, simply

```npm i number-utilitie```

## Usage

```js
const number_utilities = require("number-utilities");

console.log(number_utilities.isOdd(2))// -> false
console.log(number_utilities.asString(12))// -> "twelve"
```

## Functions

### `isOdd`

> Check if a number is odd

### Paramters
- `number` - the number to check
### Returns
- `boolean` - if the number is odd
### Example
```js
console.log(number_utilities.isOdd(5))// -> true
console.log(number_utilities.isOdd(2))// -> false
```

### `isEven`

> Check if a number is even

### Paramters
- `number` - the number to check
### Returns
- `boolean` - if the number is even
### Example
```js
console.log(number_utilities.isEven(4))// -> true
console.log(number_utilities.isEven(3))// -> false
```

### `isPrime`

> Check if a number is prime

### Paramters
- `number` - the number to check
### Returns
- `boolean` - if the number is prime
### Example
```js
console.log(number_utilities.isPrime(5))// -> true
console.log(number_utilities.isPrime(1))// -> false
console.log(number_utilities.isPrime(9))// -> false
```

### `isSquare`

> Check if a number is a square number

### Paramters
- `number` - the number to check
### Returns
- `boolean` - if the number is a square number
### Example
```js
console.log(number_utilities.isSquare(1))// -> true
console.log(number_utilities.isSquare(9))// -> true
console.log(number_utilities.isSquare(5))// -> false
```

### `isCube`

> Check if a number is a cube number

### Paramters
- `number` - the number to check
### Returns
- `boolean` - if the number is a cube number
### Example
```js
console.log(number_utilities.isCube(1))// -> true
console.log(number_utilities.isCube(8))// -> true
console.log(number_utilities.isCube(5))// -> false
```