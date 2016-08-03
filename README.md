# npm-shri-stub

Repository which can be used as stub for npm module.

[![NPM version](http://img.shields.io/npm/v/npm-shri-stub.svg?style=flat)](http://www.npmjs.org/package/npm-shri-stub)
[![Coveralls branch](https://img.shields.io/coveralls/tormozz48/npm-shri-stub/master.svg)](https://coveralls.io/r/tormozz48/npm-shri-stub?branch=master)
[![Travis](https://img.shields.io/travis/tormozz48/npm-shri-stub.svg)](https://travis-ci.org/tormozz48/npm-shri-stub)
[![David](https://img.shields.io/david/tormozz48/npm-shri-stub.svg)](https://david-dm.org/tormozz48/npm-shri-stub)

## Usage

Install `npm-shri-stub` package as usual:
```
npm install --save npm-shri-stub
```

Add `npm-shri-stub` calls into you code:
```
const shri = require('npm-shri-stub');

const add = shri.add(1, 2);

const subtract = shri.subtract(2, 1);

const multiply = shri.multiply(2, 3);

const divide = shri.divide(2, 1);
```

### API

### CLI

## Testing

Run tests:
```
npm run mocha
```

Run tests with istanbul coverage calculation:
```
npm test
```

Run codestyle verification (eslint)
```
npm run lint
```

Maintainer @tormozz48
Please send your questions and proposals to: tormozz48@gmail.com
