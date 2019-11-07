"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

var _clear = _interopRequireDefault(require("clear"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var home = function home(name) {
  return new Promise(function (resolve) {
    (0, _clear["default"])();

    _inquirer["default"].prompt([{
      type: "input",
      name: "command",
      message: " ",
      prefix: "".concat(name, "@sputer")
    }]).then(function (answers) {
      resolve(answers.command);
    });
  });
};

var _default = home;
exports["default"] = _default;