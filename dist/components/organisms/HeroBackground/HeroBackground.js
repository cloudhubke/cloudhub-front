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

var _organisms = require("components/organisms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'visible'
    },
    colorDefault: {
      background: _core.colors.indigo[900]
    },
    heroWrapper: {
      zIndex: 2
    },
    heroCover: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.2,
      width: '100%',
      height: '100%',
      zIndex: 1
    },
    heroBg: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    },
    noCoverOpacity: {
      opacity: 1
    }
  };
});
/**
 * Component to display the background hero
 *
 * @param {Object} props
 */

var HeroBackground = function HeroBackground(props) {
  var children = props.children,
      disbaleCoverOpacity = props.disbaleCoverOpacity,
      backgroundImg = props.backgroundImg,
      backgroundPosition = props.backgroundPosition,
      backgroundColor = props.backgroundColor,
      contentSectionClassName = props.contentSectionClassName,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "disbaleCoverOpacity", "backgroundImg", "backgroundPosition", "backgroundColor", "contentSectionClassName", "className"]);

  var classes = useStyles();
  var useCustomStyles = (0, _styles.makeStyles)(function () {
    return {
      coverBg: {
        backgroundImage: "url(".concat(backgroundImg, ")")
      },
      backgroundColor: {
        background: backgroundColor
      },
      backgroundPosition: {
        backgroundPosition: backgroundPosition
      }
    };
  });
  var customClasses = useCustomStyles();
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)('hero-background', classes.root, backgroundColor ? customClasses.backgroundColor : classes.colorDefault, className)
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('hero-background__wrapper', classes.heroWrapper)
  }, /*#__PURE__*/_react.default.createElement(_organisms.Section, {
    className: (0, _clsx.default)(contentSectionClassName ? contentSectionClassName : '', 'hero-background__section')
  }, children)), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('hero-background__cover', classes.heroBg, classes.heroCover, customClasses.coverBg, backgroundPosition ? customClasses.backgroundPosition : {}, disbaleCoverOpacity ? classes.noCoverOpacity : {})
  }));
};

HeroBackground.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Children to placed inside the hero
   */
  children: _propTypes.default.node,

  /**
   * Background image of the hero
   */
  backgroundImg: _propTypes.default.string,

  /**
   * Background color of the hero
   */
  backgroundColor: _propTypes.default.string,

  /**
   * Background position of the hero
   */
  backgroundPosition: _propTypes.default.string,

  /**
   * Custom classes for the content section
   */
  contentSectionClassName: _propTypes.default.string,

  /**
   * Should disable here cover opacity
   */
  disbaleCoverOpacity: _propTypes.default.bool
};
var _default = HeroBackground;
exports.default = _default;