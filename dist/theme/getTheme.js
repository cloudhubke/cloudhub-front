"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("cloudhub-components/dist/mui/core");

var _palette = require("./palette");

var getTheme = function getTheme(_ref) {
  var mode = _ref.mode,
      _ref$colors = _ref.colors,
      colors = _ref$colors === void 0 ? {} : _ref$colors;
  return (0, _core.responsiveFontSizes)((0, _core.createMuiTheme)({
    palette: mode === 'light' ? (0, _palette.getLightColors)(colors) : _palette.getDarkColors,
    layout: {
      contentWidth: 1236
    },
    typography: {
      fontFamily: ['Lato' // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      ].join(',')
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100
    }
  }));
};

var _default = getTheme;
exports.default = _default;