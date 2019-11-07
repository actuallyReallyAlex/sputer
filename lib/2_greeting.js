"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _clear = _interopRequireDefault(require("clear"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var greeting = function greeting(name) {
  return new Promise(function (resolve) {
    var message = "Hello, ".concat(name, " ");
    var times = 0;
    var messageInterval = setInterval(function () {
      var dots = {
        0: ".",
        1: "..",
        2: "..."
      };

      if (times === 3) {
        clearInterval(messageInterval);
      } else {
        (0, _clear["default"])();
        console.log(message + dots[times]);
        times++;
      }
    }, 1000);
    resolve();
  });
};

var _default = greeting;
exports["default"] = _default;