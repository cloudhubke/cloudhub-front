"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("cloudhub-components/dist/mui/styles");

var _organisms = require("components/organisms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    root: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  };
});

var HeroSimpleBackground = function HeroSimpleBackground(props) {
  var children = props.children,
      backgroundSize = props.backgroundSize,
      backgroundImage = props.backgroundImage,
      backgroundPosition = props.backgroundPosition,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "backgroundSize", "backgroundImage", "backgroundPosition", "className"]);

  var classes = useStyles();
  var useBackground = (0, _styles.makeStyles)(function () {
    return {
      backgroundImage: {
        backgroundImage: "url(".concat(backgroundImage, ")")
      },
      backgroundSize: {
        backgroundSize: backgroundSize
      },
      backgroundPosition: {
        backgroundPosition: backgroundPosition
      }
    };
  });
  var backgroundClasses = useBackground();
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)('hero-simple-background', classes.root, className, backgroundClasses.backgroundImage, backgroundClasses.backgroundSize, backgroundClasses.backgroundPosition)
  }, rest), /*#__PURE__*/_react.default.createElement(_organisms.Section, {
    className: "hero-simple-background__section"
  }, children));
};

HeroSimpleBackground.defaultProps = {
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};
HeroSimpleBackground.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The main content
   */
  children: _propTypes.default.node.isRequired,

  /**
   * The background image of the hero
   */
  backgroundImage: _propTypes.default.string.isRequired,

  /**
   * The background size of the hero
   */
  backgroundSize: _propTypes.default.string,

  /**
   * The background position of the hero
   */
  backgroundPosition: _propTypes.default.string
};
var _default = HeroSimpleBackground;
exports.default = _default;