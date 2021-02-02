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

var _ArrowRightAlt = _interopRequireDefault(require("@material-ui/icons/ArrowRightAlt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none'
    },
    title: {
      fontWeight: 'bold'
    },
    icon: {
      padding: 0,
      marginLeft: theme.spacing(1),
      '&:hover': {
        background: 'transparent'
      }
    }
  };
});
/**
 * Component to display the "Learn More" link
 *
 * @param {Object} props
 */

var LearnMoreLink = function LearnMoreLink(props) {
  var color = props.color,
      component = props.component,
      variant = props.variant,
      title = props.title,
      href = props.href,
      className = props.className,
      iconProps = props.iconProps,
      typographyProps = props.typographyProps,
      rest = _objectWithoutProperties(props, ["color", "component", "variant", "title", "href", "className", "iconProps", "typographyProps"]);

  var classes = useStyles();

  var children = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    component: "span",
    className: (0, _clsx.default)('learn-more-link__typography', classes.title),
    variant: variant,
    color: color || 'primary'
  }, typographyProps), title), /*#__PURE__*/_react.default.createElement(_core.IconButton, _extends({
    className: (0, _clsx.default)('learn-more-link__icon-button', classes.icon),
    color: color || 'primary'
  }, iconProps), /*#__PURE__*/_react.default.createElement(_ArrowRightAlt.default, {
    className: "learn-more-link__arrow"
  })));

  return /*#__PURE__*/_react.default.createElement("a", _extends({
    href: href,
    className: (0, _clsx.default)('learn-more-link', classes.root, className)
  }, rest), children);
};

LearnMoreLink.defaultProps = {
  variant: 'subtitle1',
  href: '#',
  typographyProps: {},
  iconProps: {},
  component: 'a'
};
LearnMoreLink.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The component to load as a main DOM
   */
  component: _propTypes.default.oneOf(['Link', 'a']),

  /**
   * Title of the link
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Variant of the link
   */
  variant: _propTypes.default.oneOf(['h6', 'subtitle1', 'subtitle2', 'body1', 'body2']),

  /**
   * Href of the link
   */
  href: _propTypes.default.string,

  /**
   * Color of the link
   */
  color: _propTypes.default.string,

  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the Typography component
   */
  typographyProps: _propTypes.default.object
};
var _default = LearnMoreLink;
exports.default = _default;