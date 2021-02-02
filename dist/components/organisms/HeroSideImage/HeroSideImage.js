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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative'
    },
    imageWrapper: {
      position: 'relative',
      maxHeight: 400
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    cover: {
      background: _core.colors.indigo[900],
      opacity: 0.6,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%'
    },
    content: _defineProperty({
      position: 'absolute',
      padding: theme.spacing(2),
      top: '50%',
      transform: 'translateY(-50%)'
    }, theme.breakpoints.up('md'), {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      transform: 'none',
      padding: theme.spacing(0, 4)
    })
  };
});
/**
 * Component to display the side image hero
 *
 * @param {Object} props
 */

var HeroSideImage = function HeroSideImage(props) {
  var imageSrc = props.imageSrc,
      imageSrcSet = props.imageSrcSet,
      children = props.children,
      backgroundColor = props.backgroundColor,
      reverse = props.reverse,
      className = props.className,
      rest = _objectWithoutProperties(props, ["imageSrc", "imageSrcSet", "children", "backgroundColor", "reverse", "className"]);

  var classes = useStyles();
  var useCustomStyles = (0, _styles.makeStyles)(function () {
    return {
      coverBg: {
        background: backgroundColor
      }
    };
  });
  var customClasses = useCustomStyles();
  return /*#__PURE__*/_react.default.createElement(_core.Grid, _extends({
    container: true,
    className: (0, _clsx.default)('hero-side-image', classes.root, className),
    direction: reverse ? 'row-reverse' : 'row'
  }, rest), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    className: (0, _clsx.default)('hero-side-image__image-wrapper', classes.imageWrapper)
  }, /*#__PURE__*/_react.default.createElement(_atoms.Image, {
    src: imageSrc,
    srcSet: imageSrcSet ? imageSrcSet : '',
    alt: '...',
    className: (0, _clsx.default)('hero-side-image__image', classes.image),
    lazy: false
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('hero-side-image__cover', classes.cover, backgroundColor ? customClasses.coverBg : {})
  })), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 6,
    className: (0, _clsx.default)('hero-side-image__content', classes.content)
  }, children));
};

HeroSideImage.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Children to placed inside the hero
   */
  children: _propTypes.default.node,

  /**
   * Background color of the hero
   */
  backgroundColor: _propTypes.default.string,

  /**
   * Side image
   */
  imageSrc: _propTypes.default.string.isRequired,

  /**
   * Side image srcset
   */
  imageSrcSet: _propTypes.default.string,

  /**
   * Should show in reverse order
   */
  reverse: _propTypes.default.bool
};
var _default = HeroSideImage;
exports.default = _default;