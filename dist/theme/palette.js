"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDarkColors = exports.getLightColors = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getLightColors = function getLightColors(_ref) {
  var primaryColors = _ref.primaryColors,
      secondaryColors = _ref.secondaryColors,
      tertiaryColors = _ref.tertiaryColors,
      textColors = _ref.textColors,
      backgroundColors = _ref.backgroundColors;
  return {
    tertiary: _objectSpread({
      main: 'rgb(247, 249, 250)',
      dark: '#e8eaf6'
    }, tertiaryColors),
    cardShadow: 'rgba(23, 70, 161, .11)',
    type: 'light',
    primary: _objectSpread({
      main: '#3f51b5',
      light: 'rgb(71, 145, 219)',
      dark: 'rgb(17, 82, 147)',
      contrastText: '#fff'
    }, primaryColors),
    secondary: _objectSpread({
      light: '#ffb74d',
      main: '#f9b934',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    }, secondaryColors),
    text: _objectSpread({
      primary: '#2d3748',
      secondary: '#718096'
    }, textColors),
    divider: 'rgba(0, 0, 0, 0.12)',
    background: _objectSpread({
      paper: '#fff',
      default: '#fff',
      level2: '#f5f5f5',
      level1: '#fff',
      footer: '#1b1642'
    }, backgroundColors)
  };
};

exports.getLightColors = getLightColors;

var getDarkColors = function getDarkColors(_ref2) {
  var primaryColors = _ref2.primaryColors,
      secondaryColors = _ref2.secondaryColors,
      tertiaryColors = _ref2.tertiaryColors,
      textColors = _ref2.textColors,
      backgroundColors = _ref2.backgroundColors;
  return {
    tertiary: _objectSpread({
      main: '#2D3748',
      dark: '#24242b'
    }, tertiaryColors),
    cardShadow: 'rgba(0, 0, 0, .11)',
    common: {
      black: '#000',
      white: '#fff'
    },
    type: 'dark',
    primary: _objectSpread({
      main: '#90caf9',
      light: 'rgb(166, 212, 250)',
      dark: 'rgb(100, 141, 174)',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    }, primaryColors),
    secondary: _objectSpread({
      light: '#ffb74d',
      main: '#f9b934',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    }, secondaryColors),
    text: _objectSpread({
      primary: '#EEEEEF',
      secondary: '#AEB0B4'
    }, textColors),
    divider: 'rgba(255, 255, 255, 0.12)',
    background: _objectSpread({
      paper: '#1A202C',
      default: '#121212',
      level2: '#333',
      level1: '#2D3748',
      footer: '#18181f'
    }, backgroundColors)
  };
};

exports.getDarkColors = getDarkColors;