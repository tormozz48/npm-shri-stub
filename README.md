# npm-shri-stub

Repository which can be used as stub for [npm](http://npmjs.com) module. (Presentation Module)

[![NPM version](http://img.shields.io/npm/v/npm-shri-stub.svg?style=flat)](http://www.npmjs.org/package/npm-shri-stub)
[![Coveralls branch](https://img.shields.io/coveralls/tormozz48/npm-shri-stub/master.svg)](https://coveralls.io/r/tormozz48/npm-shri-stub?branch=master)
[![Travis](https://img.shields.io/travis/tormozz48/npm-shri-stub.svg)](https://travis-ci.org/tormozz48/npm-shri-stub)
[![David](https://img.shields.io/david/tormozz48/npm-shri-stub.svg)](https://david-dm.org/tormozz48/npm-shri-stub)

<!-- TOC -->
- [Usage](#usage)
  - [API](#api)
    - [`add`](#add)
    - [`subtract`](#subtract)
    - [`multiply`](#multiply)
    - [`divide`](#divide)
  - [CLI](#cli)
- [Testing](#testing)

<!-- TOC END -->

## Usage

Install `npm-shri-stub` package as usual:
```bash
npm install --save npm-shri-stub
```

Add `npm-shri-stub` calls into you code:
```js
const shri = require('npm-shri-stub');

const add = shri.add(1, 2);

const subtract = shri.subtract(2, 1);

const multiply = shri.multiply(2, 3);

const divide = shri.divide(2, 1);
```

### API

#### `add`

description: calculates sum of two numbers
example:
```js
const add = shri.add(1, 2); //add = 3
```

#### `subtract`

description: calculates diff between two numbers
example:
```js
const subtract = shri.subtract(2, 1); //subtract = 1
```

#### `multiply`

description: multiply two numbers
example:
```js
const multiply = shri.multiply(2, 3); //multiply = 6
```

#### `divide`

description: divide given numbers
example:
```js
const divide = shri.divide(2, 1); //divide = 1 
```

### CLI

This tool also can be used from command line interface (CLI)

Examples: 

Sum of two numbers:
```bash
node bin/shri add 2 3
```

Difference between two numbers:
```bash
node bin/shri subtract 2 3
```

Multiply two numbers:
```bash
node bin/shri multiply 2 3
```

Divide two numbers:
```bash
node bin/shri divide 4 2
```

## Testing

Run tests [mocha](https://mochajs.org):
```
npm run mocha
```

Run tests with [istanbul](https://www.npmjs.com/package/istanbul) coverage calculation:
```
npm test
```

Run codestyle verification [eslint](http://eslint.org)
```
npm run lint
```

Maintainer @tormozz48
Please send your questions and proposals to: tormozz48@gmail.com
