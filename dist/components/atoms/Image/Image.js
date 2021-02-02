"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      width: '100%',
      height: '100%'
    },
    dBlock: {
      display: 'block'
    }
  };
});
/**
 * Component to display the images
 *
 * @param {Object} props
 */

var Image = function Image(props) {
  var src = props.src,
      srcSet = props.srcSet,
      alt = props.alt,
      lazy = props.lazy,
      lazyProps = props.lazyProps,
      className = props.className,
      rest = _objectWithoutProperties(props, ["src", "srcSet", "alt", "lazy", "lazyProps", "className"]);

  var classes = useStyles();

  if (lazy) {
    return /*#__PURE__*/_react.default.createElement(_reactLazyLoadImageComponent.LazyLoadImage, _extends({
      className: (0, _clsx.default)('image', classes.root, classes.dBlock, className),
      alt: alt,
      src: src,
      srcSet: srcSet,
      effect: "opacity"
    }, lazyProps, rest));
  }

  return /*#__PURE__*/_react.default.createElement("img", _extends({
    className: (0, _clsx.default)('image', classes.root, className),
    alt: alt,
    src: src,
    srcSet: srcSet
  }, rest));
};

Image.defaultProps = {
  alt: '...',
  lazy: true,
  lazyProps: {
    width: 'auto',
    height: 'auto'
  }
};
Image.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Source of the image
   */
  src: _propTypes.default.string.isRequired,

  /**
   * Source set for the responsive images
   */
  srcSet: _propTypes.default.string,

  /**
   * Image title
   */
  alt: _propTypes.default.string,

  /**
   * Lazy loading properties
   */
  lazyProps: _propTypes.default.object,

  /**
   * Should lazy load the image
   */
  lazy: _propTypes.default.bool
};
var _default = Image;
exports.default = _default;