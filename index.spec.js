var test = require('tape');
var thenify = require('./index.js');

test('Thenified sync function as middleware', function(t) {
  t.plan(1);
  // Arrange
  const somethingReturnPromise = function() {
    return new Promise(function(resolve, reject) {
      resolve('it_works');
    });
  };
  const validateMiddleware = function(result) {
    // Assert
    t.equal('it_works', result);
  };
  // Act
  somethingReturnPromise()
    .then(thenify(validateMiddleware))
    .then(function(res) {
      console.log(res);
    });
});

test('Call thenified function directly', function(t) {
  t.plan(1);
  // Arrange
  const donothing = function() {};
  const validateFunction = function(result) {
    // Assert
    t.pass('Validate function was called');
  };
  // Act
  thenify(donothing)().then(validateFunction);
});
