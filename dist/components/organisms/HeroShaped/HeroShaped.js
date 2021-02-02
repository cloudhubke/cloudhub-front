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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _heroLeftSide;

  return {
    root: {
      height: '100%',
      width: '100%',
      overflow: 'hidden'
    },
    hero: _defineProperty({
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      maxWidth: theme.layout.contentWidth,
      margin: '0 auto'
    }, theme.breakpoints.down('sm'), {
      flexDirection: 'column-reverse'
    }),
    heroLeftSide: (_heroLeftSide = {}, _defineProperty(_heroLeftSide, theme.breakpoints.down('sm'), {
      padding: theme.spacing(3, 8)
    }), _defineProperty(_heroLeftSide, theme.breakpoints.down('xs'), {
      padding: theme.spacing(3, 2)
    }), _heroLeftSide),
    heroRightSide: _defineProperty({
      maxWidth: '50%',
      flex: '0 0 50%',
      position: 'relative'
    }, theme.breakpoints.down('sm'), {
      maxWidth: '100%',
      flex: '0 0 100%',
      height: '300px'
    }),
    heroCover: _defineProperty({
      position: 'relative',
      width: '50vw',
      height: '100%'
    }, theme.breakpoints.down('sm'), {
      width: '100%'
    }),
    heroImageContainer: {
      height: '100%',
      width: '100%',
      overflow: 'hidden'
    },
    heroImage: _defineProperty({
      position: 'absolute',
      left: '0%',
      width: '100%',
      height: '100%'
    }, theme.breakpoints.up('md'), {
      shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
      clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
    })
  };
});
/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */

var HeroShaped = function HeroShaped(props) {
  var leftSide = props.leftSide,
      rightSide = props.rightSide,
      className = props.className,
      rest = _objectWithoutProperties(props, ["leftSide", "rightSide", "className"]);

  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)(classes.root, 'hero-shaped', className)
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('hero-shaped__wrapper', classes.hero)
  }, /*#__PURE__*/_react.default.createElement(_organisms.Section, {
    className: (0, _clsx.default)('hero-shaped__left-side', classes.heroLeftSide)
  }, leftSide), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('hero-shaped__right-side', classes.heroRightSide)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('hero-shaped__cover', classes.heroCover)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('hero-shaped__image-container', classes.heroImageContainer)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('hero-shaped__image', classes.heroImage)
  }, rightSide))))), /*#__PURE__*/_react.default.createElement(_core.Divider, null));
};

HeroShaped.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Children to placed inside the section right side
   */
  rightSide: _propTypes.default.node.isRequired,

  /**
   * Children to placed inside the section left side
   */
  leftSide: _propTypes.default.node.isRequired
};
var _default = HeroShaped;
exports.default = _default;