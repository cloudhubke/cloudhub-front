"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("cloudhub-components/dist/mui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative'
    },
    border: _defineProperty({
      width: theme.spacing(5),
      height: theme.spacing(2),
      borderRadius: theme.spacing(3),
      border: '3px solid',
      borderColor: theme.palette.divider,
      backgroundColor: 'transparent'
    }, theme.breakpoints.up('md'), {
      width: theme.spacing(6),
      height: theme.spacing(3)
    }),
    borderDark: {
      borderColor: _core.colors.indigo[700]
    },
    modeToggler: _defineProperty({
      position: 'absolute',
      top: "-".concat(theme.spacing(1 / 2), "px"),
      left: "-".concat(theme.spacing(1 / 2), "px"),
      width: theme.spacing(3),
      height: theme.spacing(3),
      borderRadius: '50%',
      backgroundColor: theme.palette.text.primary,
      transition: "transform .3s cubic-bezier(.4,.03,0,1)",
      cursor: 'pointer'
    }, theme.breakpoints.up('md'), {
      width: theme.spacing(4),
      height: theme.spacing(4)
    }),
    modeTogglerDark: {
      transform: "translateX(".concat(theme.spacing(3), "px)"),
      backgroundColor: _core.colors.indigo[900]
    },
    modeTogglerIcon: _defineProperty({
      fill: theme.palette.secondary.main,
      marginTop: theme.spacing(1 / 2),
      marginLeft: theme.spacing(1 / 2)
    }, theme.breakpoints.up('md'), {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1)
    })
  };
});
/**
 * Component to display the dark mode toggler
 *
 * @param {Object} props
 */

var DarkModeToggler = function DarkModeToggler(_ref) {
  var _ref$themeMode = _ref.themeMode,
      themeMode = _ref$themeMode === void 0 ? 'light' : _ref$themeMode,
      onClick = _ref.onClick,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["themeMode", "onClick", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("span", _extends({
    className: (0, _clsx.default)(classes.root, className)
  }, rest, {
    onClick: onClick
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.border, themeMode === 'dark' ? classes.borderDark : '')
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.modeToggler, themeMode === 'dark' ? classes.modeTogglerDark : '')
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: classes.modeTogglerIcon,
    "aria-hidden": "true",
    width: "14",
    height: "13",
    viewBox: "0 0 14 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"
  }))));
};

DarkModeToggler.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The theme mode
   */
  themeMode: _propTypes.default.string,

  /**
   * Theme toggler function
   */
  onClick: _propTypes.default.func.isRequired
};
var _default = DarkModeToggler;
exports.default = _default;