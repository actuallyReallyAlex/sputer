"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _clear = _interopRequireDefault(require("clear"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var welcome = function welcome() {
  return new Promise(function (resolve) {
    (0, _clear["default"])();
    console.log("Welcome to ".concat(_chalk["default"].redBright("sputer"), "."));
    resolve();
  });
};

var _default = welcome;
exports["default"] = _default;