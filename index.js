var thenify = function(func) {
  return function(result) {
    func(result);
    return Promise.resolve(result);
  };
};
module.exports = thenify;
