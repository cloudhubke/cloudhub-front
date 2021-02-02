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
    root: {
      display: 'inline-flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      width: '100%'
    },
    title: {
      marginLeft: theme.spacing(1)
    }
  };
});
/**
 * Component to display the icon text
 *
 * @param {Object} props
 */

var IconText = function IconText(props) {
  var title = props.title,
      color = props.color,
      fontIconClass = props.fontIconClass,
      className = props.className,
      iconProps = props.iconProps,
      typographyProps = props.typographyProps,
      rest = _objectWithoutProperties(props, ["title", "color", "fontIconClass", "className", "iconProps", "typographyProps"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)('icon-text', classes.root, className)
  }, rest), /*#__PURE__*/_react.default.createElement(_atoms.Icon, _extends({
    className: "icon-text__icon",
    size: "small",
    fontIconClass: fontIconClass,
    fontIconColor: color
  }, iconProps)), /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    noWrap: true,
    variant: "subtitle1",
    color: "textPrimary",
    className: (0, _clsx.default)('icon-text__typography', classes.title)
  }, typographyProps), title));
};

IconText.defaultProps = {
  iconProps: {},
  typographyProps: {}
};
IconText.propTypes = {
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
  color: _propTypes.default.string,

  /**
   * Title of the icon-text
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the Typography component
   */
  typographyProps: _propTypes.default.object
};
var _default = IconText;
exports.default = _default;