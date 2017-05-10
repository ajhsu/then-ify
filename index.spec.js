var test = require('tape');
var thenify = require('./index.js');

test('Make sync function thenable', function(t) {
  t.plan(2);

  var syncf = function(input) {
    return input ? input : -1;
  };
  thenify(syncf)().then(function(output) {
    t.equal(-1, output);
  });
  thenify(syncf)(3).then(function(output) {
    t.equal(3, output);
  });
});

test('Thenified sync function as middleware', function(t) {
  t.plan(2);
  // Arrange
  var asyncf = function() {
    return new Promise(function(resolve, reject) {
      resolve(1);
    });
  };
  const middlef = function(input) {
    // Assert
    t.equal(1, input);
    return 2;
  };
  // Act
  asyncf().then(thenify(middlef)).then(function(output) {
    t.equal(2, output);
  });
});
