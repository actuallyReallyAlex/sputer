"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _start = _interopRequireDefault(require("./1_start"));

var _greeting = _interopRequireDefault(require("./2_greeting"));

var _welcome = _interopRequireDefault(require("./3_welcome.js"));

var _home = _interopRequireDefault(require("./4_home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cli = function cli() {
  var name, command, commands;
  return regeneratorRuntime.async(function cli$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _start["default"])());

        case 2:
          name = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap((0, _greeting["default"])(name));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap((0, _welcome["default"])());

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap((0, _home["default"])(name));

        case 9:
          command = _context.sent;
          commands = {
            help: function help() {
              console.log("-----");
              console.log("OPTIONS");
              console.log("Option 1");
              console.log("Option 2");
              console.log("Option 3");
            }
          };
          commands[command]();

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = cli;
exports["default"] = _default;