var test = require('tape');
var thenable = require('../index.js');

test('Thenable function as middleware', t => {
  t.plan(1);
  // Arrange
  const somethingReturnPromise = () => {
    return new Promise((resolve, reject) => {
      resolve('it_works');
    });
  };
  const validateMiddleware = (result) => {
    // Assert
    t.equal('it_works', result);
  };
  // Act
  somethingReturnPromise()
    .then(
      thenable(validateMiddleware)
    )
    .then(res => {
      console.log(res);
    });
});

test('Call thenable function directly', t => {
  t.plan(1);
  // Arrange
  const donothing = () => {};
  const validateFunction = (result) => {
    // Assert
    t.pass('Validate function was called');
  };
  // Act
  thenable(donothing)()
    .then(validateFunction);
});