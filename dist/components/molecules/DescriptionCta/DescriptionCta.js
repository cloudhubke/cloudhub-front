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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component to display the description with CTA's
 *
 * @param {Object} props
 */
var DescriptionCta = function DescriptionCta(props) {
  var title = props.title,
      subtitle = props.subtitle,
      primaryCta = props.primaryCta,
      secondaryCta = props.secondaryCta,
      align = props.align,
      className = props.className,
      wrapperProps = props.wrapperProps,
      titleProps = props.titleProps,
      subtitleProps = props.subtitleProps,
      buttonGroupProps = props.buttonGroupProps,
      primaryButtonWrapperProps = props.primaryButtonWrapperProps,
      secondaryButtonWrapperProps = props.secondaryButtonWrapperProps,
      rest = _objectWithoutProperties(props, ["title", "subtitle", "primaryCta", "secondaryCta", "align", "className", "wrapperProps", "titleProps", "subtitleProps", "buttonGroupProps", "primaryButtonWrapperProps", "secondaryButtonWrapperProps"]);

  var theme = (0, _styles.useTheme)();
  var isSm = (0, _core.useMediaQuery)(theme.breakpoints.up('sm'), {
    defaultMatches: true
  });
  var justifyGrid = 'center';

  if (align === 'left') {
    justifyGrid = isSm ? 'flex-end' : 'flex-start';
  } else if (align === 'right') {
    justifyGrid = isSm ? 'flex-start' : 'flex-end';
  }

  return /*#__PURE__*/_react.default.createElement(_core.Grid, _extends({
    container: true,
    spacing: 2,
    justify: "space-between",
    alignItems: "center",
    className: (0, _clsx.default)('description-cta', className)
  }, rest), /*#__PURE__*/_react.default.createElement(_core.Grid, _extends({
    item: true,
    className: "description-cta__wrapper"
  }, wrapperProps), /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "h5",
    align: align,
    gutterBottom: true,
    className: "description-cta__title"
  }, titleProps), title), subtitle && /*#__PURE__*/_react.default.createElement(_core.Typography, _extends({
    variant: "subtitle1",
    align: align,
    color: "textSecondary",
    className: "description-cta__subtitle"
  }, subtitleProps), subtitle)), /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, _extends({
    container: true,
    justify: justifyGrid,
    spacing: 1,
    className: "description-cta__button-group"
  }, buttonGroupProps), /*#__PURE__*/_react.default.createElement(_core.Grid, _extends({
    item: true,
    className: "description-cta__primary-button-wrapper"
  }, primaryButtonWrapperProps), primaryCta), secondaryCta && /*#__PURE__*/_react.default.createElement(_core.Grid, _extends({
    item: true,
    className: (0, _clsx.default)('description-cta__secondary-button-wrapper')
  }, secondaryButtonWrapperProps), secondaryCta))));
};

DescriptionCta.defaultProps = {
  align: 'center',
  wrapperProps: {},
  titleProps: {},
  subtitleProps: {},
  buttonGroupProps: {},
  primaryButtonWrapperProps: {},
  secondaryButtonWrapperProps: {}
};
DescriptionCta.propTypes = {
  /**
   * External classes
   */
  className: _propTypes.default.string,

  /**
   * Title of the list
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Subtitle of the list
   */
  subtitle: _propTypes.default.string,

  /**
   * Primary CTA of the list
   */
  primaryCta: _propTypes.default.node.isRequired,

  /**
   * Secondary CTA of the list
   */
  secondaryCta: _propTypes.default.node,

  /**
   * Alignment
   */
  align: _propTypes.default.oneOf(['left', 'right', 'center']),

  /**
   * Additional properties to pass to the wrapper Grid item components
   */
  wrapperProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the title Typography components
   */
  titleProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the subtitle Typography components
   */
  subtitleProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the button group div container
   */
  buttonGroupProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the primary button wrapper div container
   */
  primaryButtonWrapperProps: _propTypes.default.object,

  /**
   * Additional properties to pass to the secondary button wrapper div container
   */
  secondaryButtonWrapperProps: _propTypes.default.object
};
var _default = DescriptionCta;
exports.default = _default;