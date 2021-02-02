"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactVisibilitySensor = _interopRequireDefault(require("react-visibility-sensor"));

var _reactCountup = _interopRequireDefault(require("react-countup"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("cloudhub-components/dist/mui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component to display the Count Up Numbers
 *
 * @param {Object} props
 */
var CountUpNumber = function CountUpNumber(props) {
  var start = props.start,
      end = props.end,
      suffix = props.suffix,
      prefix = props.prefix,
      label = props.label,
      textColor = props.textColor,
      labelColor = props.labelColor,
      className = props.className,
      visibilitySensorProps = props.visibilitySensorProps,
      wrapperProps = props.wrapperProps,
      countWrapperProps = props.countWrapperProps,
      countNumberProps = props.countNumberProps,
      labelProps = props.labelProps,
      rest = _objectWithoutProperties(props, ["start", "end", "suffix", "prefix", "label", "textColor", "labelColor", "className", "visibilitySensorProps", "wrapperProps", "countWrapperProps", "countNumberProps", "labelProps"]);

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      viewPortEntered = _React$useState2[0],
      setViewPortEntered = _React$useState2[1];

  var setViewPortVisibility = function setViewPortVisibility(isVisible) {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _clsx.default)('countup-number', className)
  }, rest), /*#__PURE__*/_react.default.createElement(_reactVisibilitySensor.default, _extends({
    onChange: function onChange(isVisible) {
      return setViewPortVisibility(isVisible);
    },
    delayedCall: true
  }, visibilitySensorProps), /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "countup-number__wrapper"
  }, wrapperProps), /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "h4",
    gutterBottom: true,
    align: "center",
    color: textColor || 'textPrimary',
    className: "countup-number__count-wrapper"
  }, countWrapperProps), /*#__PURE__*/_react.default.createElement(_reactCountup.default, _extends({
    delay: 1,
    redraw: false,
    end: viewPortEntered ? end : start,
    start: start,
    suffix: suffix || '',
    prefix: prefix || '',
    className: "countup-number__count"
  }, countNumberProps))), /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "subtitle1",
    color: labelColor || 'textSecondary',
    align: "center",
    className: "countup-number__label"
  }, labelProps), label))));
};

CountUpNumber.defaultProps = {
  start: 0,
  visibilitySensorProps: {},
  wrapperProps: {},
  countWrapperProps: {},
  countNumberProps: {},
  labelProps: {}
};
CountUpNumber.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * The Suffix of the count up number
   */
  suffix: _propTypes.default.string,

  /**
   * The Prefix of the count up number
   */
  prefix: _propTypes.default.string,

  /**
   * The label text of the count up number
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Starting number
   */
  start: _propTypes.default.number,

  /**
   * End number
   */
  end: _propTypes.default.number.isRequired,

  /**
   * Text color
   */
  textColor: _propTypes.default.string,

  /**
   * Label color
   */
  labelColor: _propTypes.default.string,

  /**
   * Additional properties to pass to the VisibilitySensor Component
   */
  visibilitySensorProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the wrapper div
   */
  wrapperProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the count wrapper Typography component
   */
  countWrapperProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the CountUp React component
   */
  countNumberProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the label Typography component
   */
  labelProps: _propTypes.default.object
};
var _default = CountUpNumber;
exports.default = _default;