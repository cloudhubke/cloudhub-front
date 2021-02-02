"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("cloudhub-components/dist/mui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _root;

  return {
    root: (_root = {
      maxWidth: theme.layout.contentWidth,
      width: '100%',
      margin: '0 auto',
      padding: theme.spacing(6, 2)
    }, _defineProperty(_root, theme.breakpoints.up('sm'), {
      padding: theme.spacing(8, 8)
    }), _defineProperty(_root, theme.breakpoints.up('md'), {
      padding: theme.spacing(12, 8)
    }), _root),
    fullWidth: {
      maxWidth: '100%'
    },
    disablePadding: {
      padding: 0
    },
    narrow: {
      maxWidth: 800
    }
  };
});
/**
 * Component to display the sections
 *
 * @param {Object} props
 */

var Section = function Section(props) {
  var children = props.children,
      fullWidth = props.fullWidth,
      narrow = props.narrow,
      disablePadding = props.disablePadding,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "fullWidth", "narrow", "disablePadding", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("section", _extends({
    className: (0, _clsx.default)('section', classes.root, fullWidth ? classes.fullWidth : {}, narrow ? classes.narrow : {}, disablePadding ? classes.disablePadding : {}, className)
  }, rest), children);
};

Section.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Children to placed inside the section
   */
  children: _propTypes.default.node,

  /**
   * Should show narrow sections
   */
  narrow: _propTypes.default.bool,

  /**
   * Should the section be full width
   */
  fullWidth: _propTypes.default.bool,

  /**
   * Should the section render with no padding
   */
  disablePadding: _propTypes.default.bool
};
var _default = Section;
exports.default = _default;