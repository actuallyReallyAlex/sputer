"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inquirer = _interopRequireDefault(require("inquirer"));

var _clear = _interopRequireDefault(require("clear"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var start = function start() {
  (0, _clear["default"])();
  return new Promise(function (resolve) {
    _inquirer["default"].prompt([{
      type: "input",
      name: "name",
      message: "Who are you?"
    }]).then(function (answers) {
      resolve(answers.name);
    });
  });
};

var _default = start;
exports["default"] = _default;