# then-ify

Make your synchronous function thenable.

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![License][license-image]][license-url]

## Install
```bash
$ npm install then-ify --save
```

## Example

```javascript
var thenify = require('then-ify');

// Here we have a synchronous function
function syncFunction(input) { return input * input; }

// Now you can call .then with then-ify
thenify(syncFunction)(3)
  .then(function(output){
    // output = 9
  });
```

[npm-image]: https://img.shields.io/npm/v/then-ify.svg
[npm-url]: https://www.npmjs.com/package/then-ify
[travis-image]: https://img.shields.io/travis/ajhsu/then-ify.svg
[travis-url]: https://travis-ci.org/ajhsu/then-ify
[license-image]: https://img.shields.io/github/license/ajhsu/then-ify.svg
[license-url]: LICENSE