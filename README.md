[![Build Status](https://travis-ci.org/ajhsu/then-ify.svg?branch=master)](https://travis-ci.org/ajhsu/then-ify)

# then-ify
Make your synchronous function thenable.

## Install
```bash
$ npm install then-ify --save
```

## Example

```javascript
var thenify = require('then-ify');

// Here we have a synchronous function
function syncFunction(param) { ... }

// Now you can call .then with then-ify
thenify(syncFunction)(someParams)
  .then(...);
```