"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _clear = _interopRequireDefault(require("clear"));

var _start = _interopRequireDefault(require("./1_start"));

var _greeting = _interopRequireDefault(require("./2_greeting"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cli = function cli() {
  var name;
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
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = cli;
exports["default"] = _default;