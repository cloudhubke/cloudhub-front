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

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative'
    },
    image: {
      position: 'absolute',
      objectFit: 'cover',

      /* support for plugin https://github.com/bfred-it/object-fit-images */
      fontFamily: 'object-fit: cover;',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  };
});
/**
 * Component to display the Parallax backgrounds
 *
 * @param {Object} props
 */

var Parallax = function Parallax(props) {
  var backgroundImage = props.backgroundImage,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["backgroundImage", "children", "className"]);

  var classes = useStyles();

  _react.default.useEffect(function () {
    var jarallaxElems = document.querySelectorAll('.jarallax');

    if (!jarallaxElems || jarallaxElems && jarallaxElems.length === 0) {
      return;
    }

    var jarallax = require('jarallax').jarallax;

    jarallax(jarallaxElems, {
      speed: 0.2
    });
  });

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)('jarallax', 'parallax', classes.root, className),
    "data-jarallax": true,
    "data-speed": "0.2"
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('jarallax-img', 'parallax__image', classes.image),
    style: {
      backgroundImage: "url(".concat(backgroundImage, ")")
    },
    alt: "..."
  }), children);
};

Parallax.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The content
   */
  children: _propTypes.default.node,

  /**
   * The parallax background image
   */
  backgroundImage: _propTypes.default.string.isRequired
};
var _default = Parallax;
exports.default = _default;