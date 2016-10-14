"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var thenable = function thenable(func) {
  return function (result) {
    func(result);
    return Promise.resolve(result);
  };
};

exports.default = thenable;
module.exports = exports["default"];
