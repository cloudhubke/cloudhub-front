"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTyped = _interopRequireDefault(require("react-typed"));

var _core = require("cloudhub-components/dist/mui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component to display the typed animated texts
 *
 * @param {Object} props
 */
var TypedText = function TypedText(props) {
  var className = props.className,
      typedProps = props.typedProps,
      rest = _objectWithoutProperties(props, ["className", "typedProps"]);

  return /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    className: (0, _clsx.default)('typed-text', className)
  }, rest), /*#__PURE__*/_react.default.createElement(_reactTyped.default, _extends({
    className: "typed-text__item"
  }, typedProps)));
};

TypedText.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * react-typed properties. For more info visit https://www.npmjs.com/package/react-typed
   */
  typedProps: _propTypes.default.object.isRequired
};
var _default = TypedText;
exports.default = _default;