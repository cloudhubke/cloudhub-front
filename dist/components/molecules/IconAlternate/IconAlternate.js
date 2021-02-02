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

var _atoms = require("components/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    extraSmall: {
      width: 20,
      height: 20
    },
    small: {
      width: 50,
      height: 50
    },
    medium: {
      width: 70,
      height: 70
    },
    large: {
      width: 90,
      height: 90
    },
    circle: {
      borderRadius: '100%'
    },
    square: {
      borderRadius: theme.spacing(2)
    }
  };
});
/**
 * Component to display the alternate icon
 *
 * @param {Object} props
 */

var IconAlternate = function IconAlternate(props) {
  var iconProps = props.iconProps,
      fontIconClass = props.fontIconClass,
      size = props.size,
      color = props.color,
      shape = props.shape,
      className = props.className,
      rest = _objectWithoutProperties(props, ["iconProps", "fontIconClass", "size", "color", "shape", "className"]);

  var classes = useStyles();
  var useBackgroundStyles = (0, _styles.makeStyles)(function () {
    return {
      background: {
        background: color[50]
      }
    };
  });
  var backgroundClasses = useBackgroundStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Avatar, _extends({
    className: (0, _clsx.default)('icon-alternate', classes[size], classes[shape], backgroundClasses.background, className)
  }, rest), /*#__PURE__*/_react.default.createElement(_atoms.Icon, _extends({
    size: size,
    fontIconClass: fontIconClass,
    fontIconColor: color[500],
    className: "icon-alternate__icon"
  }, iconProps)));
};

IconAlternate.defaultProps = {
  size: 'medium',
  shape: 'square',
  iconProps: {}
};
IconAlternate.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The classes of the font icon
   */
  fontIconClass: _propTypes.default.string.isRequired,

  /**
   * Sizes of the icon
   */
  size: _propTypes.default.oneOf(['extraSmall', 'small', 'medium', 'large']),

  /**
   * Color of the icon
   */
  color: _propTypes.default.oneOf([_core.colors.red, _core.colors.pink, _core.colors.purple, _core.colors.deepPurple, _core.colors.indigo, _core.colors.blue, _core.colors.lightBlue, _core.colors.cyan, _core.colors.teal, _core.colors.green, _core.colors.lightGreen, _core.colors.lime, _core.colors.yellow, _core.colors.amber, _core.colors.orange, _core.colors.deepOrange, _core.colors.brown, _core.colors.grey, _core.colors.blueGrey]),

  /**
   * The shape of the alternate icon
   */
  shape: _propTypes.default.oneOf(['circle', 'square']),

  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: _propTypes.default.object
};
var _default = IconAlternate;
exports.default = _default;