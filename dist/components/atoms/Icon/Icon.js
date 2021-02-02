"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _core = require("cloudhub-components/dist/mui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    extraSmall: {
      fontSize: 10
    },
    small: {
      fontSize: 20
    },
    medium: {
      fontSize: 30
    },
    large: {
      fontSize: 40
    }
  };
});
/**
 * Component to display the icon
 *
 * @param {Object} props
 */

var Icon = function Icon(props) {
  var fontIconClass = props.fontIconClass,
      size = props.size,
      fontIconColor = props.fontIconColor,
      className = props.className,
      rest = _objectWithoutProperties(props, ["fontIconClass", "size", "fontIconColor", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_core.NoSsr, null, /*#__PURE__*/_react.default.createElement("i", _extends({
    className: (0, _clsx.default)('icon', fontIconClass, classes[size], className),
    style: {
      color: fontIconColor
    }
  }, rest)));
};

Icon.defaultProps = {
  size: 'small'
};
Icon.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The classes of the font icon
   */
  fontIconClass: _propTypes.default.string.isRequired,

  /**
   * Source set for the responsive images
   */
  size: _propTypes.default.oneOf(['extraSmall', 'small', 'medium', 'large']),

  /**
   * Color of the icon
   */
  fontIconColor: _propTypes.default.string
};
var _default = Icon;
exports.default = _default;