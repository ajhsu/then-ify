var test = require('tape');
var thenable = require('./index.js');

test('Thenable function as middleware', function(t) {
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
    .then(thenable(validateMiddleware))
    .then(function(res) {
      console.log(res);
    });
});

test('Call thenable function directly', function(t) {
  t.plan(1);
  // Arrange
  const donothing = function() {};
  const validateFunction = function(result) {
    // Assert
    t.pass('Validate function was called');
  };
  // Act
  thenable(donothing)().then(validateFunction);
});
