var thenify = function(f) {
  return function(input) {
    return Promise.resolve(f(input));
  };
};

module.exports = thenify;
