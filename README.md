# thenable

[![Build Status](https://travis-ci.org/ajhsu/thenable.svg?branch=master)](https://travis-ci.org/ajhsu/thenable)

## Example

```javascript
function plainJsFunction(param) {
  
}

promise
  .then(
    thenable(plainJsFunction)
  )
  .then();
```